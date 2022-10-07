const express = require('express');
const { uploadFileToStorage, getFilesStorage, getFilesStorageById, deletStorageById } = require('../controllers/storageController');
const { storage } = require('../utils/storageUtils');
const uploadMiddleware = require('../middlewares/uploadMiddleware');
const { validatorGetStorageById } = require('../middlewares/storageValidatorMiddleware');

const router = express.Router();

router.get('/', getFilesStorage);
router.get('/:id', validatorGetStorageById, getFilesStorageById);
router.post('/', uploadMiddleware(storage).single('file'), uploadFileToStorage);
router.delete('/:id', validatorGetStorageById, deletStorageById);

module.exports = router;