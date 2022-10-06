const handleHttpError = (res, message, httpCode) => {
  res.status(httpCode);
  res.send({ message });
};

module.exports = {
  handleHttpError
};