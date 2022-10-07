const { matchedData } = require('express-validator');

const addUser = (req, res) => {
  req = matchedData(req);

  res.send({ message: 'register', received: req });
};

const login = (req, res) => {
  req = matchedData(req);

  res.send({ message: 'login', received: req });
};

module.exports = {
  addUser,
  login
};