module.exports = (sequelize, DataTypes) => {
    const Facture = sequelize.define('Factures', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,  // Correction de "autolncrement"
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,  // Correction: utiliser DataTypes
            allowNull: false,
        },
        montant: {
            type: DataTypes.INTEGER,  // Correction: utiliser DataTypes
            allowNull: false,
        },
        patientId: {  // Ajout de la référence à Patient
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Patients', // Correspond au nom de la table Patients
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
    },
        {
            createdAt: false,
            updatedAt: false,
        });

    return Facture;
}