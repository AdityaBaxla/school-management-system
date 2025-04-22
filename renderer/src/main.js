import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './utils/router.js'


import ApiPlugin from '@/plugins/api.js' // injected this.api to call api's from components

const app = createApp(App);
app.use(router);
app.use(ApiPlugin);
app.mount('#app')
