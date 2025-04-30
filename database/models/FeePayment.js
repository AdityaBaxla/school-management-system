// models/FeePayment.js
const { DataTypes: DFP } = require("sequelize");
const seqFP = require("../sequelize");
const FeeInvoiceFP = require("./FeeInvoice");

const FeePayment = seqFP.define(
  "FeePayment",
  {
    id: { type: DFP.INTEGER, primaryKey: true, autoIncrement: true },
    fee_invoice_id: {
      type: DFP.INTEGER,
      allowNull: true,
      references: { model: FeeInvoiceFP, key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    paymentDate: {
      type: DFP.DATEONLY,
      allowNull: true,
      defaultValue: DFP.NOW,
    },
    amountPaid: { type: DFP.DECIMAL(10, 2), allowNull: true },
    paymentMethod: { type: DFP.STRING, allowNull: true },
    transactionReference: { type: DFP.STRING, allowNull: true },
  },
  {
    tableName: "fee_payment",
    underscored: true,
  }
);

FeePayment.belongsTo(FeeInvoiceFP, {
  foreignKey: "fee_invoice_id",
  as: "invoice",
});

module.exports = FeePayment;
