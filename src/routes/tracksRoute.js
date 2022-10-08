const express = require('express');
const { getTracks, getTrackById, addTrack, updateTrackById, deleteTrackById } = require('../controllers/tracksController');
const { validatorAddTrack, validatorGetTrackById } = require('../middlewares/trackValidatorMiddleware');
const sessionMiddleware = require('../middlewares/sessionMiddleware');
const checkRoleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.get('/', sessionMiddleware, getTracks);
router.get('/:id', sessionMiddleware, validatorGetTrackById, getTrackById);
router.post('/', sessionMiddleware, checkRoleMiddleware(['admin']), validatorAddTrack, addTrack);
router.put('/:id', sessionMiddleware, validatorGetTrackById, validatorAddTrack, updateTrackById);
router.delete('/:id', sessionMiddleware, validatorGetTrackById, deleteTrackById);

module.exports = router;