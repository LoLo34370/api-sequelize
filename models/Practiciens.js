module.exports = (sequelize, DataTypes) => {
    const Practiciens = sequelize.define('Practiciens', {
        practicienId: {
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
        },
        specialite: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            createdAt: false,
            updatedAt: false,
        }
    )

    return Practiciens;
}

