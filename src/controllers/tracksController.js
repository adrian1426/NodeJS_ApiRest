const { trackModel } = require('../models/mongo');

const getTracks = async (req, res) => {
  const data = await trackModel.find({});
  res.send({ data });
};

const addTrack = async (req, res) => {
  const { body } = req;
  const response = await trackModel.create(body);

  res.send({ message: 'Correcto', data: response });
};

module.exports = {
  getTracks,
  addTrack
};

