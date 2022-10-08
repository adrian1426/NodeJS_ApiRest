const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const signToken = async (user) => {
  const userSign = jwt.sign(
    {
      _id: user.id,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: '2h' }
  );

  return userSign;
};

const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = {
  signToken,
  verifyToken
};
