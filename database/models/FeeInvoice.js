// models/FeeInvoice.js
const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const FeeInvoice = sequelize.define(
  "FeeInvoice",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: StudentFI, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    enrollment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: EnrollmentFI, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    invoiceDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    totalAmount: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    status: {
      type: DataTypes.ENUM("pending", "paid", "overdue"),
      defaultValue: "pending",
    },
  },
  {
    tableName: "fee_invoice",
    underscored: true,
  }
);

module.exports = FeeInvoice;
