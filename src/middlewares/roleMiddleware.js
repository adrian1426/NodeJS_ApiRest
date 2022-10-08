const { handleHttpError } = require('../utils/handlerError');

const checkRol = (rolesAllowed) => (req, res, next) => {
  try {
    const { user } = req;
    const rolAllowed = rolesAllowed.some(rol => user.role.includes(rol));

    if (!rolAllowed) {
      handleHttpError(res, `No tiene permisos para realizar la acción solicitada`, 403);
      return;
    }

    next();
  } catch (error) {
    handleHttpError(res, `Error - ${error}`, 500);
  }
};

module.exports = checkRol;
