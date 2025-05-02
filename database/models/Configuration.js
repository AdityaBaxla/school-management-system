// models/Configuration.js
const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Configuration = sequelize.define("Configuration", {
  key: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    primaryKey: true,
  },
  value: { type: DataTypes.TEXT, allowNull: true },
  description: { type: DataTypes.TEXT, allowNull: true },
});

module.exports = Configuration;
