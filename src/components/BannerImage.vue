<template>
  <div>
    <img class="overlay" :src="logoUrl" />
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
  watch: {},
  created() {
    let now = new Date();
    let hours = now.getHours();
    if (hours >= 6 && hours <= 14) {
      // this.imageUrl = require("../assets/hero/morning/morning-banner.jpg");
      this.imageUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1685903849/morning-banner_o1yk9m.jpg";
      this.logoUrl = require("../assets/hero/morning/morning-logo.png");
    } else if (hours >= 15 && hours <= 18) {
      // this.imageUrl = require("../assets/hero/afternoon/afternoon-banner.jpg");
      this.imageUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1685903864/afternoon-banner_twgiwt.jpg";
      this.logoUrl = require("../assets/hero/afternoon/afternoon-logo.png");
    } else {
      // this.imageUrl = require("../assets/hero/evening/evening-banner.jpg");
      this.imageUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1685903872/evening-banner_y5mvdg.jpg";
      this.logoUrl = require("../assets/hero/evening/evening-logo.png");
    }
  },
  computed: {
    // logoUrl() {
    //   let now = new Date();
    //   let hours = now.getHours();
    //   if (hours >= 6 && hours <= 14) {
    //     return require("../assets/hero/morning/morning-logo.png");
    //   } else if (hours >= 15 && hours <= 18) {
    //     return require("../assets/hero/afternoon/afternoon-logo.png");
    //   } else {
    //     return require("../assets/hero/evening/evening-logo.png");
    //   }
    // },
    // imageUrl() {
    //   let now = new Date();
    //   let hours = now.getHours();
    //   if (hours >= 6 && hours <= 14) {
    //     return require("../assets/hero/morning/morning-banner.jpg");
    //   } else if (hours >= 15 && hours <= 18) {
    //     return require("../assets/hero/afternoon/afternoon-banner.jpg");
    //   } else {
    //     return require("../assets/hero/evening/evening-banner.jpg");
    //   }
    // },
  },
  methods: {},
};
</script>
<style scoped>
/* img {
  width: 100%;
  position: relative;
} */

.overlay {
  position: absolute;
  top: 50px;
  right: 50px;
  max-height: 350px;
  /* max-width: 275px;
  width: 100%; */
}
@media only screen and (max-width: 1026px) {
  .overlay {
    position: absolute;
    top: 50px;
    right: 50px;
    max-height: 250px;
  }
}

@media only screen and (max-width: 850px) {
  .overlay {
    position: absolute;
    top: 30px;
    right: 30px;
    max-height: 250px;
  }
}

@media only screen and (max-width: 668px) {
  /* .overlay {
    display: none !important;
  } */
  .overlay {
    position: absolute;
    top: 0px;
    right: 0px;
    max-height: 250px;
  }
}

@media only screen and (max-width: 576px) {
  .overlay {
    position: absolute;
    top: 25px;
    right: 0px;
    max-height: 150px;
  }
}

@media only screen and (max-width: 400px) {
  .overlay {
    display: none !important;
  }
}
</style>
