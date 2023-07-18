<template>
  <NavBar :isLoggedIn="isLoggedIn" />
  <AlertNotification></AlertNotification>
  <router-view class="min-h-screen" v-if="isLoggedIn" />
  <div v-else class="container-fluid home mx-auto text-center">
    <div class="row ltblue py-3 px-4">
      <div class="col-8 m-auto my-3">
        <h2 class="text-2xl font-bold">Chicago Artist Atlas - Closed Beta</h2>
        <p class="mt-3" style="font-size: 16px">
          We combine vital information in an easily navigated, one-stop-shop with original content from experts in our
          community to guide you on your journey.
        </p>
      </div>
    </div>
    <div class="row p-5 m-auto container text-left">
      <p class="mx-5 mb-4 text-lg">
        Welcome! We're so glad you're here and excited to have you join us on the first leg of this journey as a
        <em>beta tester!</em>
      </p>
      <p class="mx-5 text-base">
        We've been hard at work to develop this site as a one-stop-shop for Chicago theatremakers to find jobs and
        audition postings, resources, classes, and community without the tedious digging around of the past. Chicago
        Artist Atlas,
        <strong>Atlas</strong>
        for short, aims to be streamlined and fun for users so more time can be spent on craft and creativity. We hope
        you will keep this in mind as you navigate and explore the site, and encourage you to keep track of your
        thoughts and reactions.
      </p>
      <p class="mx-5 text-base">
        You are one of the
        <strong>first</strong>
        to use this 'work-in-progress', and we greatly appreciate your feedback to help us make it even better for our
        full launch this fall!
        <br />
        Go ahead and create a profile and take a look around! We hope you like what you see.
      </p>
      <p class="mx-5 text-base italic">
        (Please note, this is a closed, invite only beta test! If you're interested in being one of the first users of
        Chicago Artist Atlas,
        <a href="mailto:info@chiartistatlas.com?subject=I'm Interested in Beta Testing">let us know</a>
        !)
      </p>
      <p class="mx-5 mt-4 text-base">Cheers,</p>
      <p class="mx-5 text-base font-bold">Anna, Elise, and Katherine</p>
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
      // console.log(this.$store.state.sessions.authToken);
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
