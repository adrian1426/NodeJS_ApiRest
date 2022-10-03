const express = require('express');
const tracksRoute = require('./tracksRoute');

const apiRoutesBase = express.Router();
const apiRoutes = express.Router();

apiRoutes.use('/tracks', tracksRoute);

apiRoutesBase.use('/v1/api', apiRoutes);

module.exports = apiRoutesBase;