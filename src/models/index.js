const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Sequelize with database connection parameters
const sequelize = new Sequelize(DATABASE_URL,{
  dialect: 'postgres',
  logging: false,
});

// Define your models
const Food = require('./food');
const Clothes = require('./clothes');

// Export the models
module.exports = { db: sequelize, Food: Food(sequelize, DataTypes)};
