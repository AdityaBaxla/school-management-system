const {DataTypes, Model} = require('sequelize')

const sequelize = require('../sequelize')
const Student = require('./Student')

class Class extends Model {
    static number_of_students(){
        return Student.count() // change to number of student in that class
    }

}

Class.init({
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    standard : DataTypes.STRING(5),
    section : DataTypes.STRING(2),

})

