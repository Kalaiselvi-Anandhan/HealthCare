const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Patients = sequelize.define(
        'Patients',
        {
            patient_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            first_name: {
                type: DataTypes.STRING(30),
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
                type: DataTypes.STRING(40),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            dob: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            daily_goals: {
                type: DataTypes.JSONB,
                allowNull: true,
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
            tableName: 'patients',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    );

    Patients.associate = (models) => {
        Patients.hasMany(models.AppointmentMapper, { foreignKey: 'patient_id', onDelete: 'CASCADE' });
        // Patients.hasMany(models.Prescriptions, { foreignKey: 'patient_id', onDelete: 'CASCADE' });
        // Patients.hasMany(models.MedicalRecords, { foreignKey: 'patient_id', onDelete: 'CASCADE' });
    };

    return Patients;
};
