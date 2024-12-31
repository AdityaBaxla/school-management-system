const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  folio_number : {
    type : DataTypes.NUMBER,
    unique : true,
  },
  admission_number : {
    type : DataTypes.STRING,
    unique : true,
  },
  class : {
    // add constrain with regex
    type : DataTypes.STRING,
    unique : true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});

module.exports = Student;
