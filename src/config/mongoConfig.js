const mongoose = require('mongoose');

const dbConnect = () => {
  const MONGO_URI = process.env.MONGO_URI;

  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (!err) {
      console.log('Conexión a mongo correcta');
    } else {
      console.log('Conexión a mongo INCORRECTA');
    }
  });
};

module.exports = dbConnect;