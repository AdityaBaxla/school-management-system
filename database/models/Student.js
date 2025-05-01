// models/Student.js
const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Student = sequelize.define(
  "Student",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    admissionNumber: { type: DataTypes.STRING, unique: true },
    folioNumber: { type: DataTypes.STRING, allowNull: true, unique: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    dateOfBirth: { type: DataTypes.DATEONLY, allowNull: true },
    gender: {
      type: DataTypes.ENUM("Male", "Female", "Other"),
      allowNull: true,
    },
    address: { type: DataTypes.TEXT, allowNull: true },
    parentContact: { type: DataTypes.STRING, allowNull: true },
    classSectionId: {
      type: DataTypes.INTEGER,
      references: {
        model: "ClassSection",
        key: "id",
      },
    },
  },
  {
    tableName: "student",
    underscored: true,
  }
);

module.exports = Student;
