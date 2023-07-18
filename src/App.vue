<template>
  <NavBar :isLoggedIn="isLoggedIn" />
  <AlertNotification></AlertNotification>
  <router-view class="min-h-screen" v-if="isLoggedIn" />
  <div v-else class="container-fluid home mx-auto text-center">
    <div class="row ltblue py-3 px-4">
      <div class="col-8 m-auto my-3">
        <h2>
          <strong>Chicago Artist Atlas Closed Beta</strong>
        </h2>
        <p style="font-size: 16px">
          We combine vital information in an easily navigated, one-stop-shop with original content from experts in our
          community to guide you on your journey.
        </p>
      </div>
    </div>
    <div class="row pb-5 px-5 m-auto">
      <form v-on:submit.prevent="login()">
        <div class="card mt-5 py-3 px-5">
          <h1>Login</h1>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div class="input-group row mb-3">
            <label>Email:</label>
            <input class="form-control" type="email" v-model="newSessionParams.email" />
          </div>
          <div class="input-group row mb-3">
            <label>Password:</label>
            <input class="form-control" type="password" v-model="newSessionParams.password" />
          </div>
          <input
            style="max-width: 150px; background-color: #0b0b35; border-color: #0b0b35; color: white"
            class="btn btn-primary my-4 mx-auto"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  </div>
  <FooterBar />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
import AlertNotification from "./components/AlertNotification.vue";
import axios from "axios";

export default {
  components: {
    NavBar,
    FooterBar,
    AlertNotification,
  },
  data: function () {
    return {
      isLoggedIn: false,
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
          this.isLoggedIn = true;
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
