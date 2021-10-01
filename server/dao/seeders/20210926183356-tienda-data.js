'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Tienda",
      [
        {
          id: 1,
          nombreTienda: "Tienda Las Nubes",
          tiempoMin: 60,
          tiempoMax: 90,
          costoEnvio: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          nombreTienda: "Tienda Los Tulipanes",
          tiempoMin: 40,
          tiempoMax: 60,
          costoEnvio: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          nombreTienda: "Tienda Las Gardenias",
          tiempoMin: 70,
          tiempoMax: 100,
          costoEnvio: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tienda", null);
  }
};
