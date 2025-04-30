// models/index.js
const sequelize = require("../sequelize");

const Student = require("./Student");
const Class = require("./Class");
const AcademicYear = require("./AcademicYear");
const Configuration = require("./Configuration");
const Enrollment = require("./Enrollment");
const FeeType = require("./FeeType");
const FeeStructure = require("./FeeStructure");
const FeeInvoice = require("./FeeInvoice");
const FeePayment = require("./FeePayment");

// Cross-model associations are set in each model where needed.

module.exports = {
  sequelize,
  Student,
  Class,
  AcademicYear,
  Configuration,
  Enrollment,
  FeeType,
  FeeStructure,
  FeeInvoice,
  FeePayment,
};
