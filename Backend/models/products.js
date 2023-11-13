'use strict';
const {
  Model
} = require('sequelize');
const versions = require('./versions');
const User = require('./user')
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    name_product: DataTypes.STRING,
    
    name_version : {
      type:DataTypes.STRING,
      references: {
        model: versions,
        key: "name_version"
      }
    },  
      
    name_user : {
      type:DataTypes.STRING,
      references: {
        model: User,
        key: "name"
      }
    },
    // name_version: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};