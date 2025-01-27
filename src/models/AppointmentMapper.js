const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const AppointmentMapper = sequelize.define(
        'AppointmentMapper',
        {
            patient_provider_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            patient_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            provider_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            appointment_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: 'appointment_mapper',
            timestamps: false,
        }
    );

    AppointmentMapper.associate = (models) => {
        AppointmentMapper.belongsTo(models.Providers, { foreignKey: 'provider_id' });
        AppointmentMapper.belongsTo(models.Patients, { foreignKey: 'patient_id' });
    };

    return AppointmentMapper;
};
