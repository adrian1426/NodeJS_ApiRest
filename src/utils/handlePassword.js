const bcryptjs = require('bcryptjs');

const encrypt = async (pwd) => {
  const pwdEncripted = await bcryptjs.hash(pwd, 10);
  return pwdEncripted;
};

const validate = async (pwd, pwdEncripted) => {
  return await bcryptjs.compare(pwd, pwdEncripted);
};

module.exports = {
  encrypt,
  validate
};