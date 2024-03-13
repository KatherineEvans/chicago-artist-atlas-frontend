<template>
  <div>
    <img class="overlay" :src="logoUrl" />
    <ProgressiveImage
      :src="imageUrl"
      :placeholder-src="imageUrl"
      :alt="timeOfDay"
      style="vertical-align: text-bottom; overflow-x: hidden"
    />
  </div>
</template>
<script>
import { ProgressiveImage } from "vue-progressive-image";
import AfternoonSvg from "@/assets/hero/afternoon/afternoon.svg";
export default {
  components: { ProgressiveImage },
  data: function () {
    return {
      timeOfDay: "evening",
      AfternoonSvg,
      imageUrl: "",
      placeholderImageUrl: "",
    };
  },
  watch: {},
  created() {
    let now = new Date();
    let hours = now.getHours();
    if (hours >= 6 && hours <= 14) {
      // morning
      this.imageUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1685903849/morning-banner_o1yk9m.jpg";
      this.logoUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1710363055/morning-beta-logo-slim_ejkejd.png";
      this.placeholderImageUrl =
        "https://res.cloudinary.com/dzlaaytu7/image/upload/v1691520519/morning-banner_lkatc9.jpg";
    } else if (hours >= 15 && hours <= 18) {
      // afternoon
      this.imageUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1685903864/afternoon-banner_twgiwt.jpg";
      this.logoUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1710363055/afternoon-beta-logo-slim_fb0dez.png";
      this.placeholderImageUrl =
        "https://res.cloudinary.com/dzlaaytu7/image/upload/v1691520518/afternoon-banner_x7flpb.jpg";
    } else {
      // evening
      this.imageUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1685903872/evening-banner_y5mvdg.jpg";
      this.logoUrl = "https://res.cloudinary.com/dzlaaytu7/image/upload/v1710363055/evening-beta-logo-slim_vxezbx.png";
      this.placeholderImageUrl =
        "https://res.cloudinary.com/dzlaaytu7/image/upload/v1691520518/evening-banner_nthodg.jpg";
    }
  },
  methods: {},
};
</script>
<style scoped>
.overlay {
  position: absolute;
  top: 115px;
  right: 50px;
  max-height: 185px;
  z-index: 1;
}

@media only screen and (max-width: 1325px) {
  .overlay {
    position: absolute;
    top: 110px;
    right: 30px;
    max-height: 150px;
  }
}

@media only screen and (max-width: 1026px) {
  .overlay {
    position: absolute;
    top: 85px;
    right: 30px;
    max-height: 150px;
  }
}

@media only screen and (max-width: 850px) {
  .overlay {
    position: absolute;
    top: 85px;
    right: 20px;
    max-height: 100px;
  }
}

@media only screen and (max-width: 668px) {
  .overlay {
    position: absolute;
    top: 90px;
    right: 10px;
    max-height: 85px;
  }
}

@media only screen and (max-width: 576px) {
  .overlay {
    position: absolute;
    top: 85px;
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
