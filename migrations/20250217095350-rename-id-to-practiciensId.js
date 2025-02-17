'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Practiciens", "id", "practicienId");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Practiciens", "practicienId", "id");
  }
};
