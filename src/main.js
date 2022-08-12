import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { applyPolyfills, defineCustomElements } from "@aws-amplify/ui-components/loader";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://chi-artist-atlas-backend.herokuapp.com";

applyPolyfills().then(() => {
  defineCustomElements(window);
});

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

Amplify.configure(awsconfig);

createApp(App).use(store).use(router).mount("#app");
