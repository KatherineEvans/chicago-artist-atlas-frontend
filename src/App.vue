<template>
  <NavBar />
  <AlertNotification></AlertNotification>
  <router-view />
  <FooterBar />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import AlertNotification from "./components/AlertNotification.vue";
// import SignUpOptions from "./views/Authentication/SignUpOptions.vue";
import axios from "axios";

export default {
  components: {
    NavBar,
    FooterBar,
    AlertNotification,
    // SignUpOptions
  },
  data: function () {
    return {
      isLoggedIn: !!localStorage.authToken,
      newSessionParams: {},
      errors: [],
    };
  },
  mounted: function () {
    this.isLoggedIn = !!localStorage.authToken;
  },
  watch: {
    "$store.state.sessions.authToken": function () {
      if (this.$store.state.sessions.authToken) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    },
    $route: function () {
      this.isLoggedIn = !!localStorage.authToken;
    },
  },
  methods: {
    login: function () {
      axios
        .post("/users/sign_in.json", { user: this.newSessionParams })
        .then((response) => {
          localStorage.setItem("authToken", response.headers.authorization);
          axios.defaults.headers.common["Authorization"] = response.headers.authorization;
          this.$store.commit("sessions/setAuthToken", response.headers.authorization);
          // Store user name to recall later
          // localStorage.setItem("userName")
        })
        .catch((error) => {
          this.errors = error;
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  overflow-x: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.ltblue {
  background-color: #e6f4f7 !important;
}

.content {
  position: absolute;
  z-index: 1000;
  top: 80vh;

  background: rgb(44, 123, 153);
  height: 100vh;
  width: 100vw;

  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
