// const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./collection'); // Import the Collection class
const PeopleModel = require('./people');
const FoodModel = require('./food');
const ClothesModel = require('./clothes');

// let sequelizeOptions = {
//   dialect: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres', // Assuming PostgreSQL for non-test environments
// };
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;
console.log('Database URL:', DATABASE_URL);

const { Sequelize, DataTypes } = require('sequelize');

let sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

// if (process.env.NODE_ENV === 'test') {
//   sequelizeOptions.storage = 'memory';
// }

// let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const People = PeopleModel(sequelize, DataTypes);
const Food = FoodModel(sequelize, DataTypes);
const Clothes = ClothesModel(sequelize, DataTypes);

// Create instances of Collection class for each model
const peopleCollection = new Collection(People);
const foodCollection = new Collection(Food);
const clothesCollection = new Collection(Clothes);

module.exports = {
  db: sequelize,
  People: peopleCollection,
  Food: foodCollection,
  Clothes: clothesCollection,
};