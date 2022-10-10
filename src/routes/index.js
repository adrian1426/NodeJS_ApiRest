const express = require('express');
const tracksRoute = require('./tracksRoute');
const storageRoute = require('./storageRoute');
const authRoute = require('./authRoute');

const apiRoutesBase = express.Router();
const apiRoutes = express.Router();

apiRoutes.use('/tracks', tracksRoute);
apiRoutes.use('/storage', storageRoute);
apiRoutes.use('/auth', authRoute);

apiRoutesBase.get('/status', (req, res) => {
  res.send({ mesasage: 'App up' })
})
apiRoutesBase.use('/v1/api', apiRoutes);
apiRoutesBase.use((req, res) => {
  res.send({ mesage: '404' })
})

module.exports = apiRoutesBase;