const catchAsync = require('../utils/catchAsyncHandler');
const patientService = require('../services/patientService');

const getPatient = catchAsync(async (req, res) => {
    const result = await patientService.getPatient(
        req.params.patientId,
    );

    res.send(result);
});

const createPatient = catchAsync(async (req, res) => {
    req.body.user = req.user;

    const result = await patientService.createPatient(
        req.body,
    );

    res.send(result);
});

const updatePatient = catchAsync(async (req, res) => {
    req.body.user = req.user;

    const result = await patientService.createPatient(
        req.body,
    );

    res.send(result);
});

module.exports = {
    getPatient,
    createPatient,
    updatePatient,
    updatePatientWellness,
};
