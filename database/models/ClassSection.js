import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const ClassSection = sequelize.define("ClassSection", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  displayOrder: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  capacity: {
    type: DataTypes.INTEGER,
  },
  //   classId: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: "Class",
  //       key: "id",
  //     },
  //   },
  //   AcademicYearId: {
  //     type: DataTypes.INTEGER,
  //     references: {
  //       model: "AcademicYear",
  //       key: "id",
  //     },
  //   },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = ClassSection;
