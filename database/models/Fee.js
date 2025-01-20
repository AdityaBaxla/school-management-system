const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');


const Fee = sequelize.define('Fee', {
  admissionFees: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  monthlyFees: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  fine: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  extra: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
},
);



module.exports = Fee;