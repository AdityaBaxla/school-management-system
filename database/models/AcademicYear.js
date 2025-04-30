// models/AcademicYear.js
const { DataTypes: DTAY } = require("sequelize");
const seqAY = require("../sequelize");

const AcademicYear = seqAY.define(
  "AcademicYear",
  {
    id: { type: DTAY.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DTAY.STRING, unique: true }, // e.g. "2024-2025"
    startDate: { type: DTAY.DATEONLY },
    endDate: { type: DTAY.DATEONLY },
  },
  {
    tableName: "academic_year",
    underscored: true,
  }
);

module.exports = AcademicYear;
