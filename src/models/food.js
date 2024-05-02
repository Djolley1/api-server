// 'use strict';

// const Food = (sequelize, DataTypes) => {
//   const FoodModel = sequelize.define('Food', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     calories: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     isVegan: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: false,
//     },
//   });

//   const findAll = async () => {
//     return await FoodModel.findAll();
//   };

//   const findOne = async (id) => {
//     return await FoodModel.findByPk(id);
//   };

//   const create = async (data) => {
//     return await FoodModel.create(data);
//   };

//   const update = async (id, data) => {
//     const food = await FoodModel.findByPk(id);
//     if (!food) return null;
//     return await food.update(data);
//   };

//   const destroy = async (id) => {
//     const food = await FoodModel.findByPk(id);
//     if (!food) return null;
//     await food.destroy();
//     return food;
//   };

//   return {
//     FoodModel,
//     findAll,
//     findOne,
//     create,
//     update,
//     destroy,
//   };
// };

// module.exports = Food;


'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
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

module.exports = Food;
