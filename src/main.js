import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store/index.js";
// import routes from "./router/index.js";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import PrimeVue from "primevue/config";
import Lara from "@/presets/index.js";
import "vue-progressive-image/dist/style.css";
import "./assets/styles/index.css";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://chi-artist-atlas-backend.herokuapp.com";

axios.defaults.headers.common = {
  "X-Requested-With": "XMLHttpRequest",
};

axios.defaults.headers.common["Authorization"] = localStorage.getItem("authToken");
createApp(App)
  .use(store)
  .use(router)
  .use(pinia)
  .use(PrimeVue, {
    unstyled: true,
    pt: Lara,
  })
  .mount("#app");
