const { app, BrowserWindow } = require('electron');
const path = require('path');

// database 

const sequelize = require('../database/sequelize');
const Student = require('../database/models/Student');

let mainWindow;

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, '../node_modules/.bin/electron'),
});


app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // If using a preload script
    },
  });

  if (process.env.NODE_ENV === 'development') {
    // Load the Vite dev server
    mainWindow.loadURL('http://localhost:5173');
  } else {
    // Load the built Vue app in production
    mainWindow.loadFile(path.join(__dirname, '../renderer/dist/index.html')); 
  }
});



(async () => {
  try {
    // Sync models with the database
    await sequelize.sync({ alter: true }); // `alter` ensures the database schema matches models
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
})();
