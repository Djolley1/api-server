'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

// const { DataTypes, Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './dev.database.sqlite',
// });

const Clothes = (db, DataTypes) =>  
  db.define('Clothes', {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

// (async () => {
//   await Clothes.sync();
// })();

module.exports = Clothes;
