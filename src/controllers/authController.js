const { matchedData } = require('express-validator');
const { userModel } = require('../models/mongo');
const { encrypt, validate } = require('../utils/handlePassword');
const { signToken } = require('../utils/handleJWT');

const addUser = async (req, res) => {
  req = matchedData(req);
  const pwdEncripted = await encrypt(req.password);

  const user = {
    ...req,
    password: pwdEncripted
  };

  const resBdModel = await userModel.create(user);
  resBdModel.set('password', undefined, { strict: false });

  const userToken = await signToken(user);

  const response = {
    token: userToken,
    user: resBdModel
  };

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