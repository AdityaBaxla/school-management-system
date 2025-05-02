import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import router from "./utils/router.js";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

// // 2nd import
// import "primevue/resources/themes/lara-light-indigo/theme.css";
// import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import ApiPlugin from "@/plugins/api.js"; // injected this.api to call api's from components

import Button from "primevue/button";

const app = createApp(App);
app.use(router);
app.use(ApiPlugin);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "light",
      cssLayer: false,
    },
  },
});
app.component("Button", Button);
app.mount("#app");
