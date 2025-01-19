// each payment will be recorded here

const { Model, DataTypes } = require("sequelize");
const sequelize = require('../sequelize')
const Student = require('./Student')

class Payment extends Model {

}

Payment.init(
    {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        amount : {
            type : DataTypes.FLOAT,
            allowNull : false,
        },
        paymentDate : {
            type : DataTypes.DATE,
            defaultValue : DataTypes.NOW,
        },
        description : {
            type : DataTypes.STRING,
            allowNull : true,
        },
        // studentID : { // making relationship
        //     type : DataTypes.INTEGER,
        //     references : {
        //         model : 'Students', // name of the table, not model
        //         key: 'id',
        //     }
        // }
    },
    {
        sequelize,
        modelName : 'Payment',
        tableName: 'Payment',
        timestamps: true,
    }
)


module.exports = Payment;