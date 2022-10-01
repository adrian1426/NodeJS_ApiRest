require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbMongoConnect = require('./src/config/mongoConfig');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

dbMongoConnect();
