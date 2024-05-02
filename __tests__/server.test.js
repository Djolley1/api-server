'use strict';

require('dotenv').config();
const supertest = require('supertest');
const { app } = require('../src/server.js');
const { db } = require('../src/models/index.js');

const mockRequest = supertest(app);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('API Server', () => {

  it('should respond with a 404 on an invalid route', async () => {
    let response = await mockRequest.get('/no-thing');
    expect(response.status).toBe(404);
  });

  it('should respond with a 500 when errors are thrown', async () => {
    let response = await mockRequest.get('/broken');
    expect(response.status).toBe(500);
  });

  it('can add a record', async () => {
    let data = {'name':'Sample Food', 'calories': 100, 'isVegan': true}; // Adjust data according to your model structure
    let response = await mockRequest.post('/food').send(data);
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    // Add more expect statements based on your model fields
  });

  it('can get a list of records', async () => {
    let response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    // Add more expect statements based on your expected response
  });

  it('can get a record', async () => {
    let response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    // Add more expect statements based on your expected response
  });

  it('can update a record', async () => {
    let data = {'name':'Updated Food'}; // Adjust data according to your model structure
    let response = await mockRequest.put('/food/1').send(data);
    expect(response.status).toBe(200);
    // Add more expect statements based on your expected response
  });

  it('can delete a record', async () => {
    // Add a record first
    let data = {'name':'Sample Food', 'calories': 100, 'isVegan': true}; // Adjust data according to your model structure
    let response = await mockRequest.post('/food').send(data);
    let id = response.body.id;

    // Delete that record
    let deleteResponse = await mockRequest.delete(`/food/${id}`);
    expect(deleteResponse.status).toBe(200);
    // Add more expect statements based on your expected response
  });

});
