// models/Class.js
const { DataTypes: DTClass } = require("sequelize");
const seqClass = require("../sequelize");

const Class = seqClass.define(
  "Class",
  {
    id: { type: DTClass.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DTClass.STRING },
    section: { type: DTClass.STRING, allowNull: true },
  },
  {
    tableName: "class",
    underscored: true,
  }
);

module.exports = Class;
