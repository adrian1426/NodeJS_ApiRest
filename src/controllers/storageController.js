const fs = require('fs');
const { storageModel } = require('../models/mongo');
const { handleHttpError } = require('../utils/handlerError');

const PUBLIC_URL = process.env.PUBLIC_URL;
const STORAGE_PATH = `${__dirname}/../storage`;

const uploadFileToStorage = async (req, res) => {
  try {
    const { file } = req;

    const dataToStorageModel = {
      url: `${PUBLIC_URL}/${file.filename}`,
      filename: file.filename
    };

    const response = await storageModel.create(dataToStorageModel);

    res.send({ message: 'exito', data: response });
  } catch (error) {
    handleHttpError(res, `Algo falló - ${error}`, 500);
  }
};

const getFilesStorage = async (req, res) => {
  try {
    const response = await storageModel.find({});

    res.send({ message: 'Correcto', data: response });
  } catch (error) {
    handleHttpError(res, `Algo falló - ${error}`, 500);
  }
};

const getFilesStorageById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await storageModel.findById(id);

    res.send({ message: 'Correcto', data: response });
  } catch (error) {
    handleHttpError(res, `Algo falló - ${error}`, 500);
  }
};

const deletStorageById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await storageModel.findById(id);

    const FILE_PATH = `${STORAGE_PATH}/${data.filename}`;
    fs.unlinkSync(FILE_PATH);

    const response = await storageModel.findByIdAndDelete({ _id: id });

    res.send({ message: 'Correcto', data: response });
  } catch (error) {
    handleHttpError(res, `Algo falló - ${error}`, 500);
  }
};

module.exports = {
  uploadFileToStorage,
  getFilesStorage,
  getFilesStorageById,
  deletStorageById
};