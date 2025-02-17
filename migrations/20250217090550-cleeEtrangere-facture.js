'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Factures", "patientId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Patients",
        key: "patientId"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",

    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
