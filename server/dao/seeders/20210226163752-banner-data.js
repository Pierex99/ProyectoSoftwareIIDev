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

    await queryInterface.bulkInsert("Banner",
    [
      {
        id: 1,
        url: "https://static-teleticket.azureedge.net/images/eventos/banners/dea010_1_2_banner.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 2,
        url: "https://static-teleticket.azureedge.net/images/eventos/banners/lab008_1_2_banner.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 3,
        url: "https://static-teleticket.azureedge.net/images/eventos/banners/etk002_1_2_banner.jpg",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 4,
        url: "https://static-teleticket.azureedge.net/images/eventos/banners/yid003_1_2_banner.jpg",
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

    await queryInterface.bulkDelete("Banner", null);
  }
};
