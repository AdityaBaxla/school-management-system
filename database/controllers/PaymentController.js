const Payment = require('../models/Payment');
const { getFeeById } = require('./FeeController');

// Create a new payment
async function createPayment(data) {
  return await Payment.create(data);
}

// Get all students
async function getAllPayment() {
  return await Payment.findAll();
}

// Get a payment by ID
async function getPaymentById(id) {
  return await Payment.findByPk(id);
}

// Update a payment
async function updatePayment(id, data) {
  const payment = await Payment.findByPk(id);
  if (!payment) throw new Error('Payment not found');
  return await payment.update(data);
}

// Delete a payment
async function deletePayment(id) {
  const payment = await Payment.findByPk(id);
  if (!payment) throw new Error('Payment not found');
  return await payment.destroy();
}

module.exports = { createPayment, getAllPayment, getFeeById, updatePayment, deletePayment };
