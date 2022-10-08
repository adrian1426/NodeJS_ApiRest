const { handleHttpError } = require('../utils/handlerError');
const { verifyToken } = require('../utils/handleJWT');
const { userModel } = require('../models/mongo');

const sessionMiddleware = async (req, res, next) => {
  try {
    const { headers } = req;

    if (!headers.authorization) {
      handleHttpError(res, `Error - No se encontró token en el request`, 403);
      return;
    }

    const token = headers.authorization.split(' ').pop();
    const isValidToken = await verifyToken(token);

    if (!isValidToken) {
      handleHttpError(res, `Error - Token Incorrecto`, 401);
      return;
    }

    const user = await userModel.findById(isValidToken._id);
    req.user = user;

    next();

  } catch (error) {
    handleHttpError(res, `Error - ${error}`, 500);
  }
};

module.exports = sessionMiddleware;

