const { sequelize } = require('../../config/mssqlConfig');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
  'Users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.NUMBER
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    role: {
      type: DataTypes.ENUM(['user', 'admin'])
    }
  },
  {
    timestamps: true
  }
);

module.exports = User;