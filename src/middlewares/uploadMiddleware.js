const multer = require('multer');

const uploadMiddleware = (storage) => {
  return multer({ storage });
};

module.exports = uploadMiddleware;

