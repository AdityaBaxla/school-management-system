import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import RouterTest from "../components/RouterTest.vue";
import StudentsView from "../views/StudentsView.vue";
import FeesView from "@/views/FeesView.vue";
import FeesDataView from "@/views/FeesDataView.vue";
import StudentsViewOld from "@/views/StudentViewOld.vue";

const routes = [
  { path: "/", component: Home, redirect: "/students" },
  { path: "/home", component: Home },
  { path: "/students", component: StudentsView },
  { path: "/router", component: RouterTest },
  { path: "/fees", component: FeesView },
  { path: "/fees-data", component: FeesDataView },
  { path: "/old-students", component: StudentsViewOld },
];

const router = new createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
