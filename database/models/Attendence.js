const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Attendance = sequelize.define("Attendance", {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Present", "Absent", "Other"),
    allowNull: false,
  },
});

module.exports = Attendance;
