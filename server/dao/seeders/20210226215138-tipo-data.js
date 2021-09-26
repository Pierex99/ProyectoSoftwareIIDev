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

   await queryInterface.bulkInsert("Tipo",
   [
     {
       id: 1,
       nombre: "webinar",
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
       id: 2,
       nombre: "conferencia",
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
       id: 3,
       nombre: "seminario",
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
       id: 4,
       nombre: "concierto",
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
      id: 5,
      nombre: "recital",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      id: 6,
      nombre: "obra",
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

    await queryInterface.bulkDelete("Tipo", null);
  }
};
