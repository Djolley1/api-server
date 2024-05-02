'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const foodRouter = require('./routes/food');
const clothesRouter = require('./routes/clothes');
const handleNotFound = require('./error-handlers/404');
const handleInternalServerError = require('./error-handlers/500');

const app = express();

app.use(bodyParser.json());

app.use('/food', foodRouter);
app.use('/clothes', clothesRouter);

// Error handlers
app.use(handleNotFound);
app.use(handleInternalServerError);

const PORT = process.env.PORT || 5432;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = { app };