const catchAsync = require('../utils/catchAsyncHandler');
const patientService = require('../services/patientService');

const getPatients = catchAsync(async (req, res) => {
    const result = await patientService.getPatients();

    res.send(result);
});

const getPatient = catchAsync(async (req, res) => {
    const result = await patientService.getPatient(
        req.params.patientId,
    );

    res.send(result);
});

const createPatient = catchAsync(async (req, res) => {
    req.body.user = req.user;

    const result = await patientService.CreatePatient(
        req.body,
    );

    res.send(result);
});

const updatePatient = catchAsync(async (req, res) => {
    req.body.user = req.user;

    const result = await patientService.updatePatient(
        req.body,
        req.params.patientId,
    );

    res.send(result);
});

const updatePatientWellness = catchAsync(async (req, res) => {
    req.body.user = req.user;

    const result = await patientService.updatePatientWellness(
        req.body,
        req.params.patientId,
    );

    res.send(result);
});

module.exports = {
    getPatient,
    createPatient,
    updatePatient,
    updatePatientWellness,
    getPatients
};
