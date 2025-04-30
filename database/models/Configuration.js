// models/Configuration.js
const { DataTypes: DTConfig } = require("sequelize");
const seqConfig = require("../sequelize");

const Configuration = seqConfig.define(
  "Configuration",
  {
    id: { type: DTConfig.INTEGER, primaryKey: true, autoIncrement: true },
    key: { type: DTConfig.STRING, allowNull: true, unique: true },
    value: { type: DTConfig.TEXT, allowNull: true },
    description: { type: DTConfig.TEXT, allowNull: true },
  },
  {
    tableName: "configuration",
    underscored: true,
  }
);

module.exports = Configuration;
