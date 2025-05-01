// models/AcademicYear.js
const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const AcademicYear = sequelize.define(
  "AcademicYear",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true }, // e.g. "2024-2025"
    code: { type: DataTypes.STRING },
    startDate: { type: DataTypes.DATEONLY },
    endDate: { type: DataTypes.DATEONLY },
  },
  {
    tableName: "academicYear",
    underscored: true,
  }
);

module.exports = AcademicYear;
