const { Sequelize } = require('sequelize');
const path = require('path');

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite'), // Path to SQLite file
  logging: false, // Disable logging
});

// importing associations

// require('./associations')

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to SQLite has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
