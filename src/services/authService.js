const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const configData = require('../configs/env');
const { generateToken } = require('../utils/token');

const Login = async (payload) => {
    const { type } = payload;
    const ModelType = type === 'patient' ? 'Patients' : 'Providers';
    const TypeId = type === 'patient' ? 'patient_id' : 'provider_id'
    let token = '';
    const user = await models[ModelType].findOne({
        where: {
            email: payload.email
        }
    })
    const match = await bcrypt.compare(payload.password, user.password)
    if(match) {
        token = generateToken({ email: user.email, id: user[TypeId], name: user.first_name, type: 'patient' })
    }

    return {token, id: user[TypeId], first_name: user.first_name, email: user.email}
}

const Register = async (payload) => {
    const { type } = payload;
    const ModelType = type === 'patient' ? 'Patients' : 'Providers'
    const TypeId = type === 'patient' ? 'patient_id' : 'provider_id'
    payload.password = bcrypt.hashSync(payload.password, 10)
    const result = await models[ModelType].create(payload)

    return {id: result[TypeId], first_name:result.first_name, email:result.email}
}

module.exports = {
    Login,
    Register,
};
