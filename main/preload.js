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
  fee: {
    create: (data) => ipcRenderer.invoke("fee:create", data),
    getAll: () => ipcRenderer.invoke("fee:readAll"),
    get: (id) => ipcRenderer.invoke("fee:readOne", id),
    update: (id, data) => ipcRenderer.invoke("fee:update", id, data),
    delete: (id) => ipcRenderer.invoke("fee:delete", id),
  },

  // Payment CRUD
});
