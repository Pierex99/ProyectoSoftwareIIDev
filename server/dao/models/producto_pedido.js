'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto_Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Producto_Pedido.init({
    idPedido: DataTypes.INTEGER,
    idProducto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    montoP: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Producto_Pedido',
    freezeTableName: true
  });
  return Producto_Pedido;
};