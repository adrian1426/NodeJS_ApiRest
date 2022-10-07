const express = require('express');
const { getTracks, getTrackById, addTrack } = require('../controllers/tracksController');
const { validatorAddTrack, validatorGetTrackById } = require('../middlewares/trackValidatorMiddleware');

const router = express.Router();

router.get('/', getTracks);
router.get('/:id', validatorGetTrackById, getTrackById);
router.post('/', validatorAddTrack, addTrack);

module.exports = router;