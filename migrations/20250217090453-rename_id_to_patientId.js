'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Patients", "id", "patientId");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn("Patients", "patientId", "id");
  }
};
