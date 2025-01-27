const catchAsync = require('../utils/catchAsyncHandler');
const providerService = require('../services/providerService');

const getProvider = catchAsync(async (req, res) => {
    const result = await providerService.getProvider(
        req.params.providerId,
    );

    res.send(result);
});

const createProvider = catchAsync(async (req, res) => {
    req.body.user = req.user;

    const result = await providerService.createProvider(
        req.body,
    );

    res.send(result);
});

module.exports = {
    getProvider,
    createProvider,
};
