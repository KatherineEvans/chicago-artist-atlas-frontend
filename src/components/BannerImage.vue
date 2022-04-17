<template>
  <div class="container-fluid" style="padding: 0px">
    <img v-bind:src="imageUrl" :alt="timeOfDay" />
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      timeOfDay: "morning",
    };
  },
  computed: {
    imageUrl() {
      let now = new Date();
      let hours = now.getHours();
      if (hours >= 6 && hours <= 14) {
        console.log(hours, "morning");
        return "/assets/morning.svg";
      } else if (hours >= 15 && hours <= 18) {
        console.log(hours, "afternoon");
        return "/assets/afternoon.svg";
      } else {
        console.log(hours, "evening");
        return "/assets/evening.svg";
      }
    },
  },
  methods: {},
};
</script>
