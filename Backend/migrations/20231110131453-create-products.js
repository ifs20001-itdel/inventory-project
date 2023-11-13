'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_version: {
        type: Sequelize.STRING
      },
      name_user: {
        type: Sequelize.STRING
      },
      // name_version: {
      //   type: Sequelize.STRING,
      //   references: {
      //     model: {
      //       tableName: "versions",
      //     },
      //     key: "name"
      //   },
      // },
      name_product: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER
      },
      amount: {
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};