const express = require('express');
const { validatorRegister, validatorLogin } = require('../middlewares/authValidatorMiddleware');
const { addUser, login } = require('../controllers/authController');

const router = express.Router();

router.post('/login', validatorLogin, login);
router.post('/register', validatorRegister, addUser);

module.exports = router;