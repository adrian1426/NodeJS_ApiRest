const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`;

    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    const fileExt = file.originalname.split('.').pop();
    const newFileName = `file-${Date.now()}.${fileExt}`;

    cb(null, newFileName);
  }
});

module.exports = {
  storage
};