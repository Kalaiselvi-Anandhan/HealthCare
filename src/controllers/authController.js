const catchAsync = require('../utils/catchAsyncHandler');
const authService = require('../services/authService');

const Login = catchAsync(async (req, res) => {
    const result = await authService.Login(
        req.body
    );

    res.send(result);
});

const Register = catchAsync(async (req, res) => {
    req.body.user = req.user;

    const result = await authService.Register(
        req.body,
    );

    res.send(result);
});

module.exports = {
    Login,
    Register,
};
