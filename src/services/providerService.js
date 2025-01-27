const models = require('../models');

const getProvider = async (ProviderId) => {
    const result = await models.Providers.findByPk(ProviderId)
    return result
}

const CreateProvider = async (payload) => {
    const result = await models.Providers.create(payload)
    return result
}

module.exports = {
    getProvider,
    CreateProvider,
}