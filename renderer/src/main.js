import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './utils/router.js'

createApp(App).use(router).mount('#app')
