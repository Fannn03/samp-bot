'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ucps', {
      id: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      level: {
        type: Sequelize.ENUM("user", "junior helper", "senior helper", "junior admin", "senior admin", "head admin", "developer"),
        defaultValue: "user"
      },
      golds: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      points: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      is_banned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ucps')
  }
};
