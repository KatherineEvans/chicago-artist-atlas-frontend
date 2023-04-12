import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import axios from "axios";

// Import 'store' files
import auditions from "./store/auditions/";
import users from "./store/users/";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default new Vuex.Store({
  modules: {
    auditions,
    users,
  },
  plugins: [],
});

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://chi-artist-atlas-backend.herokuapp.com";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

createApp(App).use(Vuex).use(router).mount("#app");
