const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Providers = sequelize.define(
        'Providers',
        {
            patient_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            first_name: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            phone: {
                type: DataTypes.STRING(12),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            specialty: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: 'healthcare_providers',
        }
    );

    Providers.associate = (models) => {
        Providers.hasMany(models.AppointmentMapper, { foreignKey: 'providers_id', onDelete: 'CASCADE' });
        // Providers.hasMany(models.Prescriptions, { foreignKey: 'providers_id', onDelete: 'CASCADE' });
        // Providers.hasMany(models.MedicalRecords, { foreignKey: 'providers_id', onDelete: 'CASCADE' });
    };

    return Providers;
};
