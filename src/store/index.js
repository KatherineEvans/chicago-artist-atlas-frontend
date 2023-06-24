// Import 'store' files
import { createStore } from "vuex";
import auditions from "./auditions/index.js";
import users from "./users/index.js";
import sessions from "./sessions/index.js";

export default createStore({
  modules: {
    auditions,
    users,
    sessions,
  },
});
