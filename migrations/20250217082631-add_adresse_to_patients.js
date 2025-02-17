'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Patients", "adresse", {
      type: Sequelize.STRING,
      allowNull: true, // Modifie selon ton besoin
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Patients", "adresse");
  }
};
