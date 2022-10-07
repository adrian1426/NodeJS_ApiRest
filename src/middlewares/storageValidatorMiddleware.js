const { check } = require('express-validator');
const { validatorResult } = require('../utils/handleValidator');

const validatorGetStorageById = [
  check('id').exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validatorResult(req, res, next);
  }
];

module.exports = {
  validatorGetStorageById
};