// model for storing information about jobs like generating fee invoices, sending emails, etc.
const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Job = sequelize.define("Job", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  code: { type: DataTypes.STRING, allowNull: false, unique: true },
  description: { type: DataTypes.TEXT, allowNull: true },
  data: { type: DataTypes.JSON, allowNull: true },
  status: {
    type: DataTypes.ENUM("pending", "running", "completed", "failed"),
    defaultValue: "pending",
  },
});

module.exports = Job;
