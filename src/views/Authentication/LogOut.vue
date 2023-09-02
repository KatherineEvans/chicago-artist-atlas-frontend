<script>
import axios from "axios";

export default {
  created() {
    this.$router.push("/");
    this.$store.dispatch("sessions/logoutUser").then(() => {
      this.$store.commit("sessions/setAuthToken", null);
      localStorage.clear();
      axios.defaults.headers.common["Authorization"] = null;
    });
  },
};
</script>

<template>
  <div class="logout"></div>
</template>
