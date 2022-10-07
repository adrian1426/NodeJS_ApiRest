const { check } = require('express-validator');
const { validatorResult } = require('../utils/handleValidator');

const validatorRegister = [
  check('name').exists().notEmpty(),
  check('age').exists().notEmpty().isNumeric(),
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty(),
  (req, res, next) => {
    return validatorResult(req, res, next);
  }
];

const validatorLogin = [
  check('email').exists().notEmpty().isEmail(),
  check('password').exists().notEmpty(),
  (req, res, next) => {
    return validatorResult(req, res, next);
  }
];

module.exports = {
  validatorRegister,
  validatorLogin
};