'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
        name_product: 'Tekken 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        name_product: 'Jackie Chan Stuntmaster',
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        name_product: 'Crash Bandicot',
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        name_product: 'CTR Crash Team Racing',
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        name_product: 'Digimon World 3',
        createdAt: new Date(),
        updatedAt: new Date()
      },      {
        name_product: 'WWF Smackdown 2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  }
};
