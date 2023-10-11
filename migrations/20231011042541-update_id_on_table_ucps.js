'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('ucps', 'id', {
      type: Sequelize.STRING,
      primaryKey: true
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('ucps', 'id', {
      primaryKey: false
    })
  }
};
