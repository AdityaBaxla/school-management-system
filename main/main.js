const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// database 

const sequelize = require('../database/sequelize');
const Student = require('../database/models/Student');

// controller
const studentController = require('./database/controllers/StudentController');
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

// creating function that handel invoke from preload.js
app.whenReady().then(() => {
  ipcMain.handle('test', () => {console.log('test ping') ; return 'test response'})

  // Student Controller Calling
  ipcMain.handle('student:create', async (_, data) => {
    return await studentController.createStudent(data);
  });
  
  ipcMain.handle('student:readAll', async () => {
    return await studentController.getAllStudents();
  });
  
  ipcMain.handle('student:readOne', async (_, id) => {
    return await studentController.getStudentById(id);
  });
  
  ipcMain.handle('student:update', async (_, id, data) => {
    return await studentController.updateStudent(id, data);
  });
  
  ipcMain.handle('student:delete', async (_, id) => {
    return await studentController.deleteStudent(id);
  });
})



(async () => {
  try {
    // Sync models with the database
    await sequelize.sync({ alter: true }); // `alter` ensures the database schema matches models
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
})();
