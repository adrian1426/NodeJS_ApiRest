const { matchedData } = require('express-validator');
const { userModel } = require('../models/mongo');
const { encrypt, validate } = require('../utils/handlePassword');
const { signToken } = require('../utils/handleJWT');
const { handleHttpError } = require('../utils/handlerError');

const addUser = async (req, res) => {
  try {
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
  } catch (error) {
    handleHttpError(res, `Error: ${error}`, 500);
  }
};

const login = async (req, res) => {
  try {
    req = matchedData(req);
    const userFound = await userModel.findOne({ email: req.email })
      .select('password name email role');

    if (!userFound) {
      handleHttpError(res, 'Usuario No encontrado', 404);
      return;
    }

    const idValidPwd = await validate(req.password, userFound.password);

    if (!idValidPwd) {
      handleHttpError(res, `No estás autorizado`, 401);
      return;
    }

    const token = await signToken(userFound);

    const response = {
      token,
      user: userFound
    };

    res.send({ message: 'login', data: response });
  } catch (error) {
    handleHttpError(res, `Error: ${error}`, 500);
  }
};

module.exports = {
  addUser,
  login
};