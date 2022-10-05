const express = require('express');
const { uploadFileToStorage } = require('../controllers/storageController');
const { storage } = require('../utils/storageUtils');
const uploadMiddleware = require('../middlewares/uploadMiddleware');

const router = express.Router();

router.post('/', uploadMiddleware(storage).single('file'), uploadFileToStorage);

module.exports = router;