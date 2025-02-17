const { up } = require("../migrations/20250217080842-create-patient");

module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patients', {
        patientId: {
            type: DataTypes.INTEGER,
            autolncrement: true,
            primaryKey: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateNaissance: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        createdAt: false,
        updatedAt: false,
    }
    )
    return Patient;
}

