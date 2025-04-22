# What are the Learning / Error things in this project

### app.whenReady() throwing error

TypeError: app.whenReady(...).then(...) is not a function typically occurs when attempting to use .then() on a method or property that doesn't return a Promise.

Starting from Electron v14, the app.whenReady() method does return a Promise. If you're using an older version of Electron (e.g., v13 or below), app.whenReady() might not support Promises and requires using a callback-based approach or event listeners.

```bash
npx electron --version
```

### some enhancement

```
npm install --save-dev nodemon
```

app.on('ready', () => {}) // electon 14 and below callback based approach
app.whenReady().then // newer promise based approach.

### how flow works in electron

- controller will have the sequelize functions for crud
- main.js will have ipcMain.handle which will call these function and make a handler so that these can be made into api's by preload
- Preload will make a api bridge to expose these to vue page using a api created by it.

### Associations dependency problem

circular imports causing probmle, does not recoginse that it's sequlieze model. Define all the associations in associations.js

### controllers to check complex validation of data and using external api's.

### electron starting problem

error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory
first update and upgrade
sudo apt install libnss3-dev
sudo apt install libasound2

### could not be cloned

vue's proxy object cannot be direcly sent to electron, use spread and objctify to send
