const express = require('express');
const { validatorRegister, validatorLogin } = require('../middlewares/authValidatorMiddleware');
const { addUser, login } = require('../controllers/authController');

const router = express.Router();

/*
@openapi
/auth/login:
  post:
    tags:
      - auth
    summary: "Registra nuevo usuario"
    description: "Ruta para registrar nuevo usuario"
    requestBody:
      content:
        application/json:
          schema:
            $ref: "#/components/schemas/login"
    responses:
      "200":
        description: "Usuario creado"
      "401": 
        description: "No autorizado"
*/
router.post('/login', validatorLogin, login);
router.post('/register', validatorRegister, addUser);

module.exports = router;