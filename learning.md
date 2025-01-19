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
