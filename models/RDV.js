module.exports = (sequelize, DataTypes) => {
    const RDV = sequelize.define('RDV', {
        rdvId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        PatientsID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Patients',
                key: 'patientId',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        PraticiensID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Practiciens',
                key: 'practicienId',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
    },
        {
            createdAt: false,
            updatedAt: false,
        }
    );

    return RDV;
};
