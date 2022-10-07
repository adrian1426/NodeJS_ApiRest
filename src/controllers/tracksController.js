const { matchedData } = require('express-validator');
const { trackModel } = require('../models/mongo');
const { handleHttpError } = require('../utils/handlerError');

const getTracks = async (req, res) => {
  try {
    const data = await trackModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, `Algo falló - ${error}`, 500);
  }
};

const getTrackById = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;

    const data = await trackModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, `Algo falló - ${error}`, 500);
  }
};

const addTrack = async (req, res) => {
  try {
    const body = matchedData(req);
    const response = await trackModel.create(body);

    res.send({ message: 'Correcto', data: response });
  } catch (error) {
    handleHttpError(res, `Algo falló - ${error}`, 500);
  }
};

module.exports = {
  getTracks,
  getTrackById,
  addTrack
};

