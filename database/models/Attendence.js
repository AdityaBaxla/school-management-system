const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Student = require("./Student");

const Attendance = sequelize.define("Attendance", {
  class: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  section: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("Present", "Absent"),
    allowNull: false,
  },
});

Attendance.belongsTo(Student, { foreignKey: "studentId" });
Student.hasMany(Attendance, { foreignKey: "studentId" });

module.exports = Attendance;
