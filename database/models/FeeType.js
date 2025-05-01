// models/FeeType.js
const { DataTypes: DFT } = require("sequelize");
const seqFT = require("../sequelize");

const FeeType = seqFT.define(
  "FeeType",
  {
    id: { type: DFT.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DFT.STRING, allowNull: true, unique: true },
    description: { type: DFT.TEXT, allowNull: true },
  }
  // {
  //   tableName: "fee_type",
  //   underscored: true,
  // }
);

module.exports = FeeType;
