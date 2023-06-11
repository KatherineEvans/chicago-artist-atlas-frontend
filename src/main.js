import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store/index.js";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://chi-artist-atlas-backend.herokuapp.com";

var jwt = localStorage.getItem("auth_token");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

createApp(App).use(store).use(router).mount("#app");
