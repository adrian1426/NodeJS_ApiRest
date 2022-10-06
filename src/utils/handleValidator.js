const { validationResult } = require('express-validator');

const validatorResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ message: 'hubo un error', errors: error.array() });
  }
};

module.exports = {
  validatorResult
};