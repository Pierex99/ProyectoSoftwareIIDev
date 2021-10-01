'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Evento_Pedido', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPedido: {
        type: Sequelize.INTEGER
      },
      idEvento: {
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      montoP: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint("Evento_Pedido",
    {
      fields : ['idPedido'],
      type : 'FOREIGN KEY',
      name : 'FK_idPedido',
      references : 
      {
        table : 'Pedido',
        field : 'id'
      }
    });

    await queryInterface.addConstraint("Evento_Pedido",
    {
      fields : ['idEvento'],
      type : 'FOREIGN KEY',
      name : 'FK_idEvento',
      references : 
      {
        table : 'Evento',
        field : 'id'
      }
    });    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Evento_Pedido', 
      'FK_idPedido');
    await queryInterface.removeConstraint('Evento_Pedido', 
      'FK_idEvento');
    await queryInterface.dropTable('Evento_Pedido');
  }
};