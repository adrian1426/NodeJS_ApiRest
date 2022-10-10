require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morganBody = require('morgan-body');
const dbMongoConnect = require('./src/config/mongoConfig');
const { dbConnectMSSQL } = require('./src/config/mssqlConfig');
const routes = require('./src/routes');
const { loggerStream } = require('./src/utils/handleMorganIntercep');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('./src/docs/swagger');


const PORT = process.env.PORT || 8080;
const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || 'development';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('src/storage'));

const options = {
  explorer: true
};

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc, options));
app.use(routes);

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400;
  }
});

if (NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

if (ENGINE_DB === 'SQL') {
  dbConnectMSSQL();
} else {
  dbMongoConnect();
}

module.exports = app;