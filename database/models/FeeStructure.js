// models/FeeStructure.js
const { DataTypes: DFS } = require("sequelize");
const seqFS = require("../sequelize");
const ClassFS = require("./Class");
const AcademicYearFS = require("./AcademicYear");
const FeeTypeFS = require("./FeeType");

const FeeStructure = seqFS.define(
  "FeeStructure",
  {
    id: { type: DFS.INTEGER, primaryKey: true, autoIncrement: true },
    // class_id: {
    //   type: DFS.INTEGER,
    //   allowNull: false,
    //   references: { model: ClassFS, key: "id" },
    //   onUpdate: "CASCADE",
    //   onDelete: "RESTRICT",
    // },
    // academic_year_id: {
    //   type: DFS.INTEGER,
    //   allowNull: false,
    //   references: { model: AcademicYearFS, key: "id" },
    //   onUpdate: "CASCADE",
    //   onDelete: "RESTRICT",
    // },
    // fee_type_id: {
    //   type: DFS.INTEGER,
    //   allowNull: false,
    //   references: { model: FeeTypeFS, key: "id" },
    //   onUpdate: "CASCADE",
    //   onDelete: "RESTRICT",
    // },
    amount: { type: DFS.DECIMAL(10, 2), allowNull: false },
    dueDate: { type: DFS.DATEONLY, allowNull: true },
  }
  // {
  //   tableName: "fee_structure",
  //   underscored: true,
  // }
);

module.exports = FeeStructure;
