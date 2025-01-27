const models = require('../models');

const getPatient = async (patientId) => {
    const result = await models.Patients.findByPk(patientId)
    return result
}

const CreatePatient = async (payload) => {
    const result = await models.Patients.create(payload)
    return result
}

module.exports = {
    getPatient,
    CreatePatient,
}