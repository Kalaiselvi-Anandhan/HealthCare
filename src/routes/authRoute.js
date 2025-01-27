const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.route('/login')
    .post(authController.Login);

router.route('/register')
    .post(authController.Register);

module.exports = router;