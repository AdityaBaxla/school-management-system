// src/plugins/api.js
import api from '@/services/api'
export default {
  install(app) {
    app.config.globalProperties.$api = api
  }
}

