'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("RDV", {
      rdvId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      PatientsID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Patients", // Nom exact de la table Patients
          key: "PatientID", // Correspond au nom de la clé primaire
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      PraticiensID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Practiciens", // Nom exact de la table Praticiens
          key: "PracticienID", // Correspond au nom de la clé primaire
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
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
