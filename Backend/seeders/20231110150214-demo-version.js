'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('versions', [
      {
        name_version: 'Playstation 1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name_version: 'Playstation 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name_version: 'Playstation 3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name_version: 'Playstation 4',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name_version: 'Playstation 5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('versions', null, {});
  }
};