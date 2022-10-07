const express = require('express');
const { validatorRegister, validatorLogin } = require('../middlewares/authValidatorMiddleware');

const router = express.Router();

router.post('/login', validatorLogin, (req, res) => {
  res.send({ message: 'login' })
});
router.post('/register', validatorRegister, (req, res) => {
  res.send({ message: 'register' })
});

module.exports = router;