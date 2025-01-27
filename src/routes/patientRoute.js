const express = require('express');
const patientController = require('../controllers/patientController')
const router = express.Router();

router.route('/:patientId')
    .get(patientController.getPatient)
    .post(patientController.createPatient)
    .put(patientController.updatePatient);

router.route('/wellness_goal/:patientId')
.put(providerController.updatePatientWellness);

// router.route('/appointment/:patientId')
//     .post(providerController.createPatient)
//     .put(providerController.updatePatient)

module.exports = router;