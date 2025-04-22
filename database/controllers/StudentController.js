const Student = require("../models/Student");

// Create a new student
async function createStudent(data) {
  return await Student.create(data);
}

// Get all students
async function getAllStudents() {
  return await Student.findAll({ raw: true });
}

// Get a student by ID
async function getStudentById(id) {
  return await Student.findByPk(id);
}

// Update a student
async function updateStudent(id, data) {
  const student = await Student.findByPk(id);
  if (!student) throw new Error("Student not found");
  return await student.update(data);
}

// Delete a student
async function deleteStudent(id) {
  const student = await Student.findByPk(id);
  if (!student) throw new Error("Student not found");
  return await student.destroy();
}

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
