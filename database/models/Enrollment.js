// models/Enrollment.js
const { DataTypes: DTE } = require("sequelize");
const seqEnroll = require("../sequelize");
const StudentE = require("./Student");
const ClassE = require("./Class");
const AcademicYearE = require("./AcademicYear");

const Enrollment = seqEnroll.define(
  "Enrollment",
  {
    id: { type: DTE.INTEGER, primaryKey: true, autoIncrement: true },
    student_id: {
      type: DTE.INTEGER,
      allowNull: true,
      references: { model: StudentE, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    class_id: {
      type: DTE.INTEGER,
      allowNull: true,
      references: { model: ClassE, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    academic_year_id: {
      type: DTE.INTEGER,
      allowNull: true,
      references: { model: AcademicYearE, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    enrollmentDate: {
      type: DTE.DATEONLY,
      allowNull: true,
      defaultValue: DTE.NOW,
    },
    status: {
      type: DTE.ENUM("active", "graduated", "withdrawn"),
      allowNull: true,
      defaultValue: "active",
    },
  },
  {
    tableName: "enrollments",
    underscored: true,
  }
);

Enrollment.belongsTo(StudentE, { foreignKey: "student_id", as: "student" });
Enrollment.belongsTo(ClassE, { foreignKey: "class_id", as: "class" });
Enrollment.belongsTo(AcademicYearE, {
  foreignKey: "academic_year_id",
  as: "academicYear",
});

module.exports = Enrollment;
