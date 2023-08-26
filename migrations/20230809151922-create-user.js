'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        type: Sequelize.STRING(60)
      },
      birthdate: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING(100)
      },
      avatar: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.INTEGER(30)
      },
      password: {
        type: Sequelize.STRING(100)
      },
      address: {
        type: Sequelize.TEXT
      },
      country: {
        type: Sequelize.STRING(50)
      },
      province: {
        type: Sequelize.STRING(100)
      },
      city: {
        type: Sequelize.STRING(50)
      },
      zipcode: {
        type: Sequelize.INTEGER(8)
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};