const { check } = require('express-validator');
const { validatorResult } = require('../utils/handleValidator');

const validatorAddTrack = [
  check('name').exists().notEmpty(),
  check('album').exists().notEmpty(),
  check('cover').exists().notEmpty(),
  check('artist').exists().notEmpty(),
  check('artist.name').exists().notEmpty(),
  check('artist.nickname').exists().notEmpty(),
  check('artist.nationality').exists().notEmpty(),
  check('duration').exists().notEmpty(),
  check('duration.start').exists().notEmpty(),
  check('duration.end').exists().notEmpty(),
  check('mediaId').exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validatorResult(req, res, next);
  }
];

const validatorGetTrackById = [
  check('id').exists().notEmpty().isMongoId(),
  (req, res, next) => {
    return validatorResult(req, res, next);
  }
];

module.exports = {
  validatorAddTrack,
  validatorGetTrackById
};