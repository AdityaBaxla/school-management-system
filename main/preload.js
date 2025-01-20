const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  test : () => ipcRenderer.invoke('test'),

  // exposing apis for student
  // Student CRUD
  createStudent: (data) => ipcRenderer.invoke('student:create', data),
  getAllStudents: () => ipcRenderer.invoke('student:readAll'),
  getStudentById: (id) => ipcRenderer.invoke('student:readOne', id),
  updateStudent: (id, data) => ipcRenderer.invoke('student:update', id, data),
  deleteStudent: (id) => ipcRenderer.invoke('student:delete', id),

  // Fee CRUD

  // Payment CRUD
})
