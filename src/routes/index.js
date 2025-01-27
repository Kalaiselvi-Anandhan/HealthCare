const express = require('express');
const patientRoute = require('./patientRoute');
const authRoute = require('./authRoute');
const auth = require('../middlewares/authMiddleware');

const router = express.Router();

const defaultRoutes = [
    {
        path:'/patients',
        route: patientRoute
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, auth, route.route);
});

// Without authentication middleware
router.use('/auth', authRoute);

module.exports = router;