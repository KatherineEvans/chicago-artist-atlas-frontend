<template>
  <div class="container-fluid" style="padding: 0px">
    <img src="../assets/afternoon.svg" :alt="timeOfDay" />
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      timeOfDay: "evening",
    };
  },
  computed: {
    imageUrl() {
      let now = new Date();
      let hours = now.getHours();
      if (hours >= 6 && hours <= 14) {
        return "../assets/morning.svg";
      } else if (hours >= 15 && hours <= 18) {
        return "../assets/afternoon.svg";
      } else {
        return "../assets/evening.svg";
      }
    },
  },
  methods: {},
};
</script>
