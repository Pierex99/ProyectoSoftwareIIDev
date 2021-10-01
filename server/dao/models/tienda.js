'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tienda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tienda.init({
    nombreTienda: DataTypes.STRING,
    tiempoMin: DataTypes.INTEGER,
    tiempoMax: DataTypes.INTEGER,
    costoEnvio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tienda',
    freezeTableName: true
  });
  return Tienda;
};