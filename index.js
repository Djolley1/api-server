'use strict';

require('dotenv').config();

const server = require('./src/server.js');
const { db } = require('./src/models/index.js');
console.log(`Port: ${process.env.PORT}`);

db.sync()
  .then( () => {
    server.start(process.env.PORT);
    console.log(process.env.PORT);
  })
  .catch(console.error);