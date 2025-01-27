const express = require('express');
const providerController = require('../controllers/providerController')
const router = express.Router();

router.route('/:providerId')
    .get(providerController.getProvider)
    .post(providerController.createProvider);

module.exports = router;