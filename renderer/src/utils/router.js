import { createMemoryHistory, createRouter } from "vue-router"
import Home from '../components/Home.vue'
import RouterTest from '../components/RouterTest.vue'

const routes = [
    {path : '/', component : Home},
    {path : '/router', component : RouterTest},

]


const router = new createRouter({
    history : createMemoryHistory(),
    routes
})

export default router