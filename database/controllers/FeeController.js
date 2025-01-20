const Fee = require('../models/Fee');

// checking complex data validation should be here 

// Create a new fee
async function createFee(data) {
  return await Fee.create(data);
}

// Get all students
async function getAllFee() {
  return await Fee.findAll();
}

// Get a fee by ID
async function getFeeById(id) {
  return await Fee.findByPk(id);
}

// Update a fee
async function updateFee(id, data) {
  const fee = await Fee.findByPk(id);
  if (!fee) throw new Error('Fee not found');
  return await fee.update(data);
}

// Delete a fee
async function deleteFee(id) {
  const fee = await Fee.findByPk(id);
  if (!fee) throw new Error('Fee not found');
  return await fee.destroy();
}

module.exports = { createFee, getAllFee, getFeeById, updateFee, deleteFee };
