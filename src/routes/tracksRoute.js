const express = require('express');
const { getTracks, getTrackById, addTrack, updateTrackById } = require('../controllers/tracksController');
const { validatorAddTrack, validatorGetTrackById } = require('../middlewares/trackValidatorMiddleware');

const router = express.Router();

router.get('/', getTracks);
router.get('/:id', validatorGetTrackById, getTrackById);
router.post('/', validatorAddTrack, addTrack);
router.put('/:id', validatorGetTrackById, validatorAddTrack, updateTrackById);

module.exports = router;