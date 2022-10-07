const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
  res.send({ message: 'login' })
});
router.post('/register', (req, res) => {
  res.send({ message: 'register' })
});

module.exports = router;