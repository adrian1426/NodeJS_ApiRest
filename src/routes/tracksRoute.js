const express = require('express');
const { getTracks, addTrack } = require('../controllers/tracksController');
const { validatorAddTrack } = require('../middlewares/trackValidatorMiddleware');

const router = express.Router();

router.get('/', getTracks);
router.post('/', validatorAddTrack, addTrack);

module.exports = router;