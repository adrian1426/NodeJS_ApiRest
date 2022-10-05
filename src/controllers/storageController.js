const { storageModel } = require('../models/mongo');

const PUBLIC_URL = process.env.PUBLIC_URL;

const uploadFileToStorage = async (req, res) => {
  const { file } = req;

  const dataToStorageModel = {
    url: `${PUBLIC_URL}/${file.filename}`,
    filename: file.filename
  };

  const response = await storageModel.create(dataToStorageModel);

  res.send({ message: 'exito', data: response });
};

module.exports = {
  uploadFileToStorage
};