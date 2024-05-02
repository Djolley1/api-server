'use strict';

// const { DataTypes, Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './dev.database.sqlite',
// });

const Food = (db, DataTypes) => 
  db.define('Food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isVegan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

// (async () => {
//   await Food.sync();
// })();

module.exports = Food;
