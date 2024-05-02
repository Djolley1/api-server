'use strict';

require('dotenv').config();

const server = require('./src/server.js');
const { db } = require('./src/models/index.js');

db.sync()
  .then( () => {
    server.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch(console.error);