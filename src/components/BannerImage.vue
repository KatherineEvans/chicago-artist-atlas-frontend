<template>
  <div class="container-fluid" style="padding: 0px">
    <img class="overlay" src="../assets/logo-text.png" />
    <img :src="imageUrl" :alt="timeOfDay" />
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      timeOfDay: "evening",
    };
  },
  watch: {
    imageUrl() {
      console.log("hi");
    },
  },
  computed: {
    imageUrl() {
      let now = new Date();
      let hours = now.getHours();
      if (hours >= 6 && hours <= 14) {
        return require("../assets/morning.svg");
      } else if (hours >= 15 && hours <= 18) {
        return require("../assets/afternoon.svg");
      } else {
        return require("../assets/evening.svg");
      }
    },
  },
  methods: {},
};
</script>
<style>
img {
  width: 100%;
  position: relative;
}

.overlay {
  position: absolute;
  top: 80px;
  right: 50px;
  max-height: 200px;
  max-width: 275px;
  width: 100%;
  z-index: 5;
}
@media only screen and (max-width: 800px) {
  .overlay {
    display: none !important;
  }
}
</style>
