const express = require('express');
const { getTracks, addTrack } = require('../controllers/tracksController');

const router = express.Router();

router.get('/', getTracks);
router.post('/', addTrack);

module.exports = router;