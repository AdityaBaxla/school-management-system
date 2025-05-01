// models/Enrollment.js
const { DataTypes: DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Enrollment = sequelize.define(
  "Enrollment",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // studentId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: { model: 'Student', key: "id" },
    //   onUpdate: "CASCADE",
    //   onDelete: "CASCADE",
    // },
    // classSectionId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: { model: ClassE, key: "id" },
    //   onUpdate: "CASCADE",
    //   onDelete: "RESTRICT",
    // },
    // academic_year_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: { model: AcademicYearE, key: "id" },
    //   onUpdate: "CASCADE",
    //   onDelete: "RESTRICT",
    // },
    enrollmentDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM("active", "graduated", "withdrawn"),
      allowNull: true,
      defaultValue: "active",
    },
  }
  // {
  //   tableName: "enrollment",
  //   underscored: true,
  // }
);

module.exports = Enrollment;
