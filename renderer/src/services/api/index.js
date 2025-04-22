// src/services/api/index.js

// Import two adapters:
import electronApi from './electron.js'
import httpApi     from './http.js'

// Detect whether we’re running in Electron
const isElectron = true

// Export whichever implementation applies:
const api = isElectron ? electronApi : httpApi

export default api
