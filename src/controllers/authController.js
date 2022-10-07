const { matchedData } = require('express-validator');
const { userModel } = require('../models/mongo');
const { encrypt, validate } = require('../utils/handlePassword');

const addUser = async (req, res) => {
  req = matchedData(req);
  const pwdEncripted = await encrypt(req.password);

  const user = {
    ...req,
    password: pwdEncripted
  };

  const response = await userModel.create(user);
  response.set('password', undefined, { strict: false });

  res.send({ message: 'register', data: response });
};

const login = (req, res) => {
  req = matchedData(req);

  res.send({ message: 'login', received: req });
};

module.exports = {
  addUser,
  login
};