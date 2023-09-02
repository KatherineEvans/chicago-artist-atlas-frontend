// Import 'store' files
import { createStore } from "vuex";
import auditions from "./auditions/index.js";
import users from "./users/index.js";
import sessions from "./sessions/index.js";
import alerts from "./alerts/index.js";

export default createStore({
  modules: {
    alerts,
    auditions,
    users,
    sessions,
  },
});
