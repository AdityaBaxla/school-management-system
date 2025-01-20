const Student = require("./models/Student")
const Fee = require("./models/Fee")
const Payment = require("./models/Payment")

// many to one
Student.hasMany(Payment);
Payment.belongsTo(Student);


// many to one
Fee.belongsTo(Student);
Student.hasMany(Fee);
