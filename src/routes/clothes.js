'use strict';

const express = require('express');
const router = express.Router();
const { Clothes } = require('../models/index.js');

// RESTful route definitions for clothes
router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

// ROUTE HANDLERS
async function getClothes( request, response ) {
  let data = await Clothes.findAll();
  response.status(200).json(data);
}

async function getOneClothes( request, response ) {
  let id = request.params.id;
  let data = await Clothes.findOne({where: {id:id}});
  response.status(200).json(data);
}

async function createClothes( request, response ) {
  let data = request.body;
  let newClothes = await Clothes.create(data);
  response.status(201).json(newClothes);
}

async function updateClothes( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let clothes = await Clothes.findOne({where: {id:id}});
  let updatedClothes = await clothes.update(data);
  response.status(200).json(updatedClothes);
}

async function deleteClothes( request, response ) {
  let id = request.params.id;
  let deletedClothes = await Clothes.destroy( {where: {id:id}} );
  if ( typeof deletedClothes === 'number' ) {
    response.status(204).send(null);
  } else {
    throw new Error('Error deleting record');
  }
}

module.exports = router;
