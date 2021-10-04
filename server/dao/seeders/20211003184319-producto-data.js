'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Producto",
      [
        {
          id: 1,
          nombreProd: "Tomate Italiano",
          descripcion: "250 g",
          precio: 2,
          imagen: "https://images.rappi.pe/products/40425-1541955284.png?d=200x200&?d=1920xundefined&e=webp",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          nombreProd: "Don Vittorio Salsa Roja",
          descripcion: "400 g",
          precio: 4,
          imagen: "https://images.rappi.pe/products/97625-1560872039168.png?d=200x200&?d=1920xundefined&e=webp",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          nombreProd: "Field Galleta Coronita Chocolate",
          descripcion: "228 g",
          precio: 3,
          imagen: "https://images.rappi.pe/products/97781-1592255736286.png?d=200x200&?d=1920xundefined&e=webp",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Producto", null);
  }
};
