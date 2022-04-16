<template>
  <div class="home">
    <img src="../assets/morning.svg" />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data: function () {},
  created() {},
  mounted() {},
  computed: {
    imageUrl() {
      let now = new Date();
      let hours = now.getHours();
      if (hours >= 6 && hours <= 14) {
        console.log(hours, "morning");
        return "../assets/morning.svg";
      } else if (hours >= 15 && hours <= 18) {
        console.log(hours, "afternoon");
        return "../assets/afternoon.svg";
      } else {
        console.log(hours, "evening");
        return "../assets/evening.svg";
      }
    },
  },
  methods: {},
};
</script>
