const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Student = sequelize.define(
  "Student",
  {
    folioNumber: {
      type: DataTypes.STRING,
      unique: true,
      // allowNull: false,
    },
    admissionNumber: {
      type: DataTypes.STRING,
      unique: true,
      // allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    section: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    rollNo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fatherName: {
      type: DataTypes.STRING,
    },
    motherName: {
      type: DataTypes.STRING,
    },
    aadharNumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    dateOfAdmission: {
      type: DataTypes.DATE,
      // allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Active", "Dropout"),
      defaultValue: "Active",
    },
  },
  {
    // tableName: "Student", use this if you want to change the table name
  }
);

module.exports = Student;
