const express = require('express');
const { getTracks, addTrack } = require('../controllers/tracksController');
const { validatorAddTrack } = require('../middlewares/trackValidatorMiddleware');
const { customHeader } = require('../middlewares/customHeaderMiddleware');

const router = express.Router();

router.get('/', getTracks);
router.post('/', validatorAddTrack, customHeader, addTrack);

module.exports = router;