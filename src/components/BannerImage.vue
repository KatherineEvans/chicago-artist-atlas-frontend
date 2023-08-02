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
      // morning
      this.imageUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1685903849/morning-banner_o1yk9m.jpg";
      this.logoUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1686364904/morning-logo-slim_pohsxp.png";
    } else if (hours >= 15 && hours <= 18) {
      // afternoon
      this.imageUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1685903864/afternoon-banner_twgiwt.jpg";
      this.logoUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1686364806/afternoon-logo-slim_qqyzyz.png";
    } else {
      // evening
      this.imageUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1685903872/evening-banner_y5mvdg.jpg";
      this.logoUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1686364873/evening-logo-slim_n4l8i9.png";
    }
  },
  methods: {},
};
</script>
<style scoped>
.overlay {
  position: absolute;
  top: 95px;
  right: 50px;
  max-height: 150px;
}
@media only screen and (max-width: 1026px) {
  .overlay {
    position: absolute;
    top: 75px;
    right: 30px;
    max-height: 125px;
  }
}

@media only screen and (max-width: 850px) {
  .overlay {
    position: absolute;
    top: 75px;
    right: 20px;
    max-height: 100px;
  }
}

@media only screen and (max-width: 668px) {
  .overlay {
    position: absolute;
    top: 80px;
    right: 10px;
    max-height: 85px;
  }
}

@media only screen and (max-width: 576px) {
  .overlay {
    position: absolute;
    top: 75px;
    right: 5px;
    max-height: 75px;
  }
}

@media only screen and (max-width: 400px) {
  .overlay {
    display: none !important;
  }
}
</style>
