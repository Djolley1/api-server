'use strict';

const express = require('express');
const router = express.Router();
const { Food } = require('../models/index.js');
const Model = Food;

// RESTful route definitions for food
router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

// ROUTE HANDLERS
async function getFood( request, response ) {
  let data = await Model.read(null, {
    include: {
      model: Food.model,
    },
  });
  response.status(200).json(data);
}

async function getOneFood( request, response ) {
  let id = request.params.id;
  let data = await Model.read(id, {
    include: {
      model: Food.model,
    },
  });
  response.status(200).json(data);
}

async function createFood( request, response ) {
  let data = request.body;
  let newFood = await Model.create(data);
  response.status(201).json(newFood);
}

async function updateFood( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let updatedFood = await Model.update(id, data);
  response.status(200).json(updatedFood);
}

async function deleteFood( request, response ) {
  let id = request.params.id;
  let deletedFood = await Model.delete(id);
  if ( typeof deletedFood === 'number' ) {
    response.status(204).send(null);
  } else {
    throw new Error('Error deleting record');
  }
}

module.exports = router;
