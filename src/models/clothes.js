// 'use strict';

// const Clothes = (sequelize, DataTypes) => {
//   const ClothesModel = sequelize.define('Clothes', {
//     brand: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     size: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     color: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });

//   const findAll = async () => {
//     return await ClothesModel.findAll();
//   };

//   const findOne = async (id) => {
//     return await ClothesModel.findByPk(id);
//   };

//   const create = async (data) => {
//     return await ClothesModel.create(data);
//   };

//   const update = async (id, data) => {
//     const clothes = await ClothesModel.findByPk(id);
//     if (!clothes) return null;
//     return await clothes.update(data);
//   };

//   const destroy = async (id) => {
//     const clothes = await ClothesModel.findByPk(id);
//     if (!clothes) return null;
//     await clothes.destroy();
//     return clothes;
//   };

//   return {
//     ClothesModel,
//     findAll,
//     findOne,
//     create,
//     update,
//     destroy,
//   };
// };

// module.exports = Clothes;


'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Clothes;