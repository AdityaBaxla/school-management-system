const FeePayment = require("../models/FeePayment");
const { getFeeById } = require("./FeeController");

// Create a new payment
async function createPayment(data) {
  return await FeePayment.create(data);
}

// Get all students
async function getAllPayment() {
  return await FeePayment.findAll();
}

// Get a payment by ID
async function getPaymentById(id) {
  return await FeePayment.findByPk(id);
}

// Update a payment
async function updatePayment(id, data) {
  const payment = await FeePayment.findByPk(id);
  if (!payment) throw new Error("FeePayment not found");
  return await payment.update(data);
}

// Delete a payment
async function deletePayment(id) {
  const payment = await FeePayment.findByPk(id);
  if (!payment) throw new Error("FeePayment not found");
  return await payment.destroy();
}

module.exports = {
  createPayment,
  getAllPayment,
  getFeeById,
  updatePayment,
  deletePayment,
};
