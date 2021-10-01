'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Producto",
      [
        {
          id: 1,
          nombre: "Fresa",
          monto: 3,
          categoria: 1,
          medida: "20 g",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          nombre: "Pera",
          monto: 1,
          categoria: 1,
          medida: "20 g",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          nombre: "Morochas",
          monto: 0.8,
          categoria: 1,
          medida: "54 g",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          nombre: "Melocotón",
          monto: 0.8,
          categoria: 1,
          medida: "20 g",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          nombre: "Tampico 1.5",
          monto: 5,
          categoria: 2,
          medida: "1.5l",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Producto", null);
  }
};
