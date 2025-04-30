// models/FeeInvoice.js
const { DataTypes: DFI } = require("sequelize");
const seqFI = require("../sequelize");
const StudentFI = require("./Student");
const EnrollmentFI = require("./Enrollment");

const FeeInvoice = seqFI.define(
  "FeeInvoice",
  {
    id: { type: DFI.INTEGER, primaryKey: true, autoIncrement: true },
    student_id: {
      type: DFI.INTEGER,
      allowNull: true,
      references: { model: StudentFI, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    enrollment_id: {
      type: DFI.INTEGER,
      allowNull: true,
      references: { model: EnrollmentFI, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    invoiceDate: { type: DFI.DATEONLY, allowNull: true, defaultValue: DFI.NOW },
    totalAmount: { type: DFI.DECIMAL(10, 2), allowNull: true },
    status: {
      type: DFI.ENUM("pending", "paid", "overdue"),
      defaultValue: "pending",
    },
  },
  {
    tableName: "fee_invoice",
    underscored: true,
  }
);

FeeInvoice.belongsTo(StudentFI, { foreignKey: "student_id", as: "student" });
FeeInvoice.belongsTo(EnrollmentFI, {
  foreignKey: "enrollment_id",
  as: "enrollment",
});

module.exports = FeeInvoice;
