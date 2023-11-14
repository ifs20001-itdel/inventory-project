'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [
      {
        name_product: 'Tekken 3',
        name_version: 'Playstation 1',
        name_user: 'Naruto Uzumaki',
        stock: 10,
        amount: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name_product: 'Jackie Chan Stuntmaster',
        name_version: 'Playstation 1',
        name_user: 'Naruto Uzumaki',
        stock: 10,
        amount: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name_product: 'Crash Bandicot',
        name_version: 'Playstation 1',
        name_user: 'Naruto Uzumaki',
        stock: 10,
        amount: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name_product: 'CTR Crash Team Racing',
        name_version: 'Playstation 1',
        name_user: 'Naruto Uzumaki',
        stock: 10,
        amount: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name_product: 'Digimon World 3',
        name_version: 'Playstation 1',
        name_user: 'Naruto Uzumaki',
        stock: 10,
        amount: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name_product: 'WWF Smackdown 2',
        name_version: 'Playstation 1',
        name_user: 'Naruto Uzumaki',
        stock: 10,
        amount: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  }
};
