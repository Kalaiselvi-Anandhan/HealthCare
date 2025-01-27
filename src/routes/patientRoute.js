const express = require('express');
const patientController = require('../controllers/patientController')
const router = express.Router();

router.route('/')
    .get(patientController.getPatients)

router.route('/:patientId')
    .get(patientController.getPatient)
    .post(patientController.createPatient)
    .put(patientController.updatePatient);

router.route('/wellness_goal/:patientId')
.put(patientController.updatePatientWellness);

// router.route('/appointment/:patientId')
//     .post(providerController.createAppointment)

module.exports = router;
