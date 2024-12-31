const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Student = require('./Student');

const ClassTransfer = sequelize.define('ClassTransfer', {
  fromClass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fromSection: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  toClass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  toSection: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transferDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

ClassTransfer.belongsTo(Student, { foreignKey: 'studentId' });
Student.hasMany(ClassTransfer, { foreignKey: 'studentId' });

module.exports = ClassTransfer;