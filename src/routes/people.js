'use strict';

// All routing and data management for "people"

const express = require('express');

const router = express.Router();

const {People} = require('../models/index.js');

const Model = People;


// RESTful route definitions
router.get('/people', getPeople);
router.get('/people/:id', getOnePerson);
router.post('/people', createPerson);
router.put('/people/:id', updatePerson);
router.delete('/people/:id', deletePerson);

// ROUTE HANDLERS
async function getPeople( request, response ) {
  let data = await Model.read( null, {
    include: {
      model: People.model,
    },
  });
  response.status(200).json(data);
}

async function getOnePerson( request, response ) {
  let id = request.params.id;
  let data = await Model.read(id, {
    include: {
      model: People.model,
    },
  });
  response.status(200).json(data);
}

async function createPerson( request, response ) {
  let data = request.body;
  let newPerson = await Model.create(data);
  response.status(201).json(newPerson);
}

async function updatePerson( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let updatedPerson = await Model.update(id, data);
  response.status(200).json(updatedPerson);
}

async function deletePerson( request, response ) {
  let id = request.params.id;
  let deletedPerson = await Model.delete(id);
  if ( typeof deletedPerson === 'number' ) {
    response.status(204).send(null);
  } else {
    throw new Error('Error deleting record');
  }
}



module.exports = router;