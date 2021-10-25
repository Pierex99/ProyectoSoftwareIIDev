'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Producto",
      [
        {
          id: 1,
          nombreProd: "Tomate Italiano",
          descripcion: "250 g",
          imagen: "https://images.rappi.pe/products/40425-1541955284.png?d=200x200&?d=1920xundefined&e=webp",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          nombreProd: "Don Vittorio Salsa Roja",
          imagen: "https://images.rappi.pe/products/97625-1560872039168.png?d=200x200&?d=1920xundefined&e=webp",
          descripcion: "400 g",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          nombreProd: "Field Galleta Coronita Chocolate",
          imagen: "https://images.rappi.pe/products/97781-1592255736286.png?d=200x200&?d=1920xundefined&e=webp",
          descripcion: "228 g",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          nombreProd: "San Mateo Bidón Sin Gas",
          imagen: "https://images.rappi.pe/products/390940-1613059457429.jpg?d=200x200&?d=3840xundefined&e=webp",
          descripcion: "7 L",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          nombreProd: "Costeño Arroz Extra",
          imagen: "https://images.rappi.pe/products/97539-1605570792796.png?d=200x200&?d=1200xundefined&e=webp",
          descripcion: "5 Kg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          nombreProd: "Palta Fuerte",
          imagen: "https://images.rappi.pe/products/35794-1540931960.png?d=200x200&?d=3840xundefined&e=webp",
          descripcion: "250 g",
          createdAt: new Date(),
          updatedAt: new Date()
        }
        
      ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Producto", null);
  }
};