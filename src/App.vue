<template>
  <NavBar :isLoggedIn="isLoggedIn" />
  <AlertNotification></AlertNotification>
  <router-view v-if="isLoggedIn" />
  <div v-else>
    <!-- <SignUpOptions></SignUpOptions> -->
    <div class="bg-blue-50 px-10 py-8 mx-auto text-center">
      <p class="text-2xl md:text-3xl font-bold mb-2">Chicago Artist Atlas</p>
      <p class="text-lg max-w-3xl mx-auto">
        We combine vital information in an easily navigated, one-stop-shop with original content from experts in our
        community to guide you on your journey.
      </p>
    </div>
    <div class="container p-5 m-auto text-left">
      <p class="mx-auto mb-6 text-lg font-bold text-center underline">
        Sign Up Now for the Open Beta of Chicago Artist Atlas!
      </p>
      <p class="text-lg">
        We're thrilled to announce the open beta of Chicago Artist Atlas, your ultimate destination for all things related to the Chicago performing arts scene. As we gear up for our full launch in the coming months, we're asking you to be among the first to experience our platform.
      </p>
      <p class="text-lg mt-2">
        During this beta phase, you'll have exclusive access to explore the site and provide us with valuable feedback. Your insights will play a crucial role in shaping the final version of Chicago Artist Atlas.
      </p>
      <p class="text-lg mt-2">
        Please note that while the beta version is free to access, some features will eventually transition to a monthly subscription-based "pro" account. By signing up for the beta, you'll also get the opportunity to become one of our valued customers when we officially launch at a discounted price!
      </p>
      <p class="text-lg mt-2">Thank you for joining us on this exciting journey! Let's make Chicago Artist Atlas the ultimate destination for theatremakers in the Windy City.</p>
      <p class="text-lg font-bold mt-4">Sign up now and be part of the future of Chicago theatre with Chicago Artist Atlas!
      </p>
      <div class="w-100 text-left mt-2">
        <p class="mt-4 text-lg">Cheers,</p>
        <p class="text-lg italic">Anna and Katherine</p>
      </div>
    </div>
  </div>
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
