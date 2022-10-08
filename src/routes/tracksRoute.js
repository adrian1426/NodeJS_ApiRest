const express = require('express');
const { getTracks, getTrackById, addTrack, updateTrackById, deleteTrackById } = require('../controllers/tracksController');
const { validatorAddTrack, validatorGetTrackById } = require('../middlewares/trackValidatorMiddleware');
const sessionMiddleware = require('../middlewares/sessionMiddleware');

const router = express.Router();

router.get('/', sessionMiddleware, getTracks);
router.get('/:id', validatorGetTrackById, getTrackById);
router.post('/', validatorAddTrack, addTrack);
router.put('/:id', validatorGetTrackById, validatorAddTrack, updateTrackById);
router.delete('/:id', validatorGetTrackById, deleteTrackById);

module.exports = router;