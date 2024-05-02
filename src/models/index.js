// const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;
// const { Sequelize, DataTypes } = require('sequelize');

// // Initialize Sequelize with database connection parameters
// const sequelize = new Sequelize(DATABASE_URL,{
//   dialect: 'postgres',
//   logging: false,
// });

// // Define your models
// const Food = require('./food');
// const Clothes = require('./clothes');

// // Export the models
// module.exports = { db: sequelize, Food: Food(sequelize, DataTypes)};


const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');

let sequelizeOptions = {
  dialect: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres', // Assuming PostgreSQL for non-test environments
};

if (process.env.NODE_ENV === 'test') {
  sequelizeOptions.storage = 'memory'; // For SQLite
}

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const peopleModel = require('./people.js');
const foodModel = require('./food.js');

module.exports = {
  db: sequelize,
  People: peopleModel(sequelize, DataTypes),
  Food: foodModel(sequelize, DataTypes),
};