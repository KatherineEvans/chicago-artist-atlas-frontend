<template>
  <NavBar />
  <BannerImage />
  <router-view />
  <FooterBar />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import BannerImage from "./components/BannerImage.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  components: {
    NavBar,
    BannerImage,
    FooterBar,
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
</style>
