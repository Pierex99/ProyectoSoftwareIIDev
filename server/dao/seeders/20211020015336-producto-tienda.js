'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Producto_Tienda",
      [
        {
          id : 1,
          idTienda: 1,
          idProducto: 1,
          precio: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id : 2,
          idTienda: 1,
          idProducto: 2,
          precio: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id : 3,
          idTienda: 1,
          idProducto: 5,
          precio: 20,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id : 4,
          idTienda: 2,
          idProducto: 3,
          precio: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id : 5,
          idTienda: 2,
          idProducto: 4,
          precio: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id : 6,
          idTienda: 2,
          idProducto: 6,
          precio: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Producto_Tienda", null);
  }
};
