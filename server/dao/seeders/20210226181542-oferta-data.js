'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Oferta",
   [
     {
       id: 1,
       url: "https://bucket-tue.obs.la-south-2.myhuaweicloud.com/600a224632b0d.jpg",
       texto: "20% de descuento",
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
       id: 2,
       url: "https://bucket-tue.obs.la-south-2.myhuaweicloud.com/6011d289a640c.jpg",
       texto: "10% de descuento",
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
       id: 3,
       url: "https://bucket-tue.obs.la-south-2.myhuaweicloud.com/6007394788d33.jpg",
       texto: "2 x 1",
       createdAt : new Date(),
       updatedAt : new Date()
     }
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Oferta", null);
  }
};
