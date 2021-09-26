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
   await queryInterface.bulkInsert("Usuario",
   [
     {
        username : "usuario@ulima.com",
        password : "123",
        nombre : "Usuario",
        apellido : "Demo",
        fechaNac : new Date(),
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        username : "admin@ulima.com",
        password : "123",
        nombre : "Admin",
        apellido : "Demo",
        fechaNac : new Date(),
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
    await queryInterface.bulkDelete("Usuario", null);
  }
};
