'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto_Tienda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Producto_Tienda.init({
    idTienda: DataTypes.INTEGER,
    idProducto: DataTypes.INTEGER,
    precio: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Producto_Tienda',
    freezeTableName: true
  });
  return Producto_Tienda;
};