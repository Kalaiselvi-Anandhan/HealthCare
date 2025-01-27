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
    console.log("user", JSON.stringify(user,null,1))
    const match = await bcrypt.compare(payload.password, user.password) // user.password === payload.password
    if(match) {
        token = generateToken({ email: user.email, id: user[TypeId], name: user.first_name, type: 'patient' })
        // jwt.sign({ email: user.email, id: user[TypeId], name: user.first_name, type: 'patient' }, configData.secret_key)
    }
    console.log("result", token)

    return {token, id: user[TypeId], first_name: user.first_name, email: user.email}
}

const Register = async (payload) => {
    const { type } = payload;
    const ModelType = type === 'patient' ? 'Patients' : 'Providers'
    payload.password = bcrypt.hashSync(payload.password, 10)
    const result = await models[ModelType].create(payload)
    console.log("registered!!", result, payload.password)
    return result
}

module.exports = {
    Login,
    Register,
};
