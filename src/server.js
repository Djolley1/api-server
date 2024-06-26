'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const peopleRoutes = require('./routes/people.js');
const foodRoutes = require('./routes/food.js');

app.use(cors());
app.use(express.json());

app.use(logger);

app.use(peopleRoutes);
app.use(foodRoutes);
// Force an error for the tests
app.get('/broken', (req,res,next) => next('whoops!'));

app.use('*', notFoundHandler);
app.use(errorHandler);


function start(port) {
  console.log(port);
  app.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });
}

module.exports = { app, start };