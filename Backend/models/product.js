'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Product.belongsTo(models.Version)
    Product.belongsTo(models.User)
    Product.hasMany(models.Log)
    }
  }
  Product.init({
    versionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};