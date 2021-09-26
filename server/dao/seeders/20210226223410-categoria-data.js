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
   await queryInterface.bulkInsert("Categoria",
   [
     {
       id: 1,
       nombre: "entretenimiento",
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
       id: 2,
       nombre: "educativo",
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
       id: 3,
       nombre: "salud",
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
       id: 4,
       nombre: "otro",
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

    await queryInterface.bulkDelete("Categoria", null);
  }
};
