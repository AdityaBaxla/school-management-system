// models/index.js
const sequelize = require("../sequelize");

const Student = require("./Student");
const Class = require("./Class");
const ClassSection = require("./ClassSection");
const AcademicYear = require("./AcademicYear");
const Configuration = require("./Configuration");
const Enrollment = require("./Enrollment");
const FeeType = require("./FeeType");
const FeeStructure = require("./FeeStructure");
const FeeInvoice = require("./FeeInvoice");
const FeePayment = require("./FeePayment");

// make the associations
Student.belongsTo(ClassSection);
ClassSection.hasMany(Student);

ClassSection.belongsTo(Class);
Class.hasMany(ClassSection);

module.exports = {
  sequelize,
  Student,
  Class,
  ClassSection,
  AcademicYear,
  Configuration,
  Enrollment,
  FeeType,
  FeeStructure,
  FeeInvoice,
  FeePayment,
};
