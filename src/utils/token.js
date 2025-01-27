const jwt = require('jsonwebtoken');
const configData = require('../configs/env');

const SECRET_KEY = configData.secret_key;

const generateToken = (payload, expiresIn = '1h') => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        throw new Error('Invalid or expired token');
    }
};

module.exports = {
    generateToken,
    verifyToken,
};
