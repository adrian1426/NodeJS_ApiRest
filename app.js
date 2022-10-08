require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morganBody = require('morgan-body');
const dbMongoConnect = require('./src/config/mongoConfig');
const routes = require('./src/routes');
const { loggerStream } = require('./src/utils/handleMorganIntercep');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('src/storage'));

morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400;
  }
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

dbMongoConnect();
