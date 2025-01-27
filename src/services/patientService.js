const models = require('../models');

const getPatients = async () => {
    const result = await models.Patients.findAndCountAll({attributes: { exclude: ['password'] }})
    
    return result
}

const getPatient = async (patientId) => {
    const result = await models.Patients.findByPk(patientId,{attributes: { exclude: ['password'] }})
    return result
}

const CreatePatient = async (payload) => {
    const result = await models.Patients.create(payload,{ fields: ['first_name','email','phone','daily_goals','dob'] })
    return result
}

const updatePatient = async (payload, patientId) => {
    const result = await models.Patients.update(payload, {
        where:{
            patient_id:patientId
        },
        attributes: { exclude: ['password'] }
    })
    return result
}

const updatePatientWellness = async (payload, patientId) => {
    const result = await models.Patients.update(payload, {
        where:{
            patient_id:patientId
        }
    })
    return result
}

module.exports = {
    getPatient,
    CreatePatient,
    updatePatient,
    updatePatientWellness,
    getPatients,

}
