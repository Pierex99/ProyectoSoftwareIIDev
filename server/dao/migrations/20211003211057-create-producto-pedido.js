'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Producto_Pedido', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPedido: {
        type: Sequelize.INTEGER
      },
      idProducto: {
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

    await queryInterface.addConstraint("Producto_Pedido",
      {
        fields: ['idPedido'],
        type: 'FOREIGN KEY',
        name: 'FK_idPedido',
        references:
        {
          table: 'Pedido',
          field: 'id'
        }
      });

    await queryInterface.addConstraint("Producto_Pedido",
      {
        fields: ['idProducto'],
        type: 'FOREIGN KEY',
        name: 'FK_idProducto',
        references:
        {
          table: 'Producto',
          field: 'id'
        }
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Producto_Pedido');
  }
};