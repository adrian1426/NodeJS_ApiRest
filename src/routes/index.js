const express = require('express');
const tracksRoute = require('./tracksRoute');
const storageRoute = require('./storageRoute');

const apiRoutesBase = express.Router();
const apiRoutes = express.Router();

apiRoutes.use('/tracks', tracksRoute);
apiRoutes.use('/storage', storageRoute);

apiRoutesBase.use('/v1/api', apiRoutes);

module.exports = apiRoutesBase;