const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  test: () => ipcRenderer.invoke("test"),

  // exposing apis for student
  // Student CRUD
  student: {
    create: (data) => ipcRenderer.invoke("student:create", data),
    getAll: () => ipcRenderer.invoke("student:readAll"),
    get: (id) => ipcRenderer.invoke("student:readOne", id),
    update: (id, data) => ipcRenderer.invoke("student:update", id, data),
    delete: (id) => ipcRenderer.invoke("student:delete", id),
  },

  // Fee CRUD

  // Payment CRUD
});
