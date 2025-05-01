// a generic model which will be used to create a class-section table every academic year
const { DataTypes: DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Class = sequelize.define(
  "Class",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    displayOrder: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "class",
    underscored: true,
  }
);

module.exports = Class;
