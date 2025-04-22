import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import RouterTest from "../components/RouterTest.vue";
import StudentsView from "../views/StudentsView.vue";

const routes = [
  { path: "/", component: Home, redirect: '/students' },
  { path: "/students", component: StudentsView },
  { path: "/router", component: RouterTest },
];

const router = new createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
