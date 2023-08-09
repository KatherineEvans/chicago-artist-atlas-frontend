import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store/index.js";
import "vue-progressive-image/dist/style.css";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://chi-artist-atlas-backend.herokuapp.com";

axios.defaults.headers.common = {
  "X-Requested-With": "XMLHttpRequest",
};

var token = localStorage.getItem("authToken");
if (token) {
  axios.defaults.headers.common["Authorization"] = `${token}`;
}

createApp(App).use(store).use(router).mount("#app");
