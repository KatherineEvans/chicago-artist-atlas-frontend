import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Amplify, * as AmplifyModules from "aws-amplify";
import { AmplifyPlugin } from "aws-amplify-vue";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

createApp(App).use(store).use(router).use(AmplifyPlugin, AmplifyModules).mount("#app");
