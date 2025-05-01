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
const Job = require("./Job");

// === Associations ===

// Student ↔ Enrollment (1-to-Many)
Student.hasMany(Enrollment, { foreignKey: "studentId" });
Enrollment.belongsTo(Student, { foreignKey: "studentId" });

// ClassSection ↔ Enrollment (1-to-Many)
ClassSection.hasMany(Enrollment, { foreignKey: "classSectionId" });
Enrollment.belongsTo(ClassSection, { foreignKey: "classSectionId" });

// AcademicYear ↔ Enrollment (1-to-Many)
AcademicYear.hasMany(Enrollment, { foreignKey: "academicYearId" });
Enrollment.belongsTo(AcademicYear, { foreignKey: "academicYearId" });

// Class ↔ ClassSection (1-to-Many)
Class.hasMany(ClassSection, { foreignKey: "classId" });
ClassSection.belongsTo(Class, { foreignKey: "classId" });

// AcademicYear ↔ Configuration (1-to-Many)
AcademicYear.hasMany(Configuration, { foreignKey: "academicYearId" });
Configuration.belongsTo(AcademicYear, { foreignKey: "academicYearId" });

// === Fee Structure & Payments ===

// AcademicYear ↔ FeeStructure (1-to-Many)
AcademicYear.hasMany(FeeStructure, { foreignKey: "academicYearId" });
FeeStructure.belongsTo(AcademicYear, { foreignKey: "academicYearId" });

// Class ↔ FeeStructure (1-to-Many)
Class.hasMany(FeeStructure, { foreignKey: "classId" });
FeeStructure.belongsTo(Class, { foreignKey: "classId" });

// FeeType ↔ FeeStructure (1-to-Many)
FeeType.hasMany(FeeStructure, { foreignKey: "feeTypeId" });
FeeStructure.belongsTo(FeeType, { foreignKey: "feeTypeId" });

// Student ↔ FeeInvoice (1-to-Many)
Student.hasMany(FeeInvoice, { foreignKey: "studentId" });
FeeInvoice.belongsTo(Student, { foreignKey: "studentId" });

// FeeStructure ↔ FeeInvoice (1-to-Many)
FeeStructure.hasMany(FeeInvoice, { foreignKey: "feeStructureId" });
FeeInvoice.belongsTo(FeeStructure, { foreignKey: "feeStructureId" });

// FeeInvoice ↔ FeePayment (1-to-Many)
FeeInvoice.hasMany(FeePayment, { foreignKey: "feeInvoiceId" });
FeePayment.belongsTo(FeeInvoice, { foreignKey: "feeInvoiceId" });

// You can add Job associations here if it relates to any other models

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
  Job,
};
