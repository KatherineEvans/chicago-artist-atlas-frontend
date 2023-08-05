<template>
  <div class="container-fluid">
    <div class="row bg-blue-50 py-3 px-4 text-center">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 m-auto my-3">
        <h2 class="text-3xl font-bold">Business Resources for Artists</h2>
        <p style="font-size: 16px">
          Here at Atlas, we're focused on providing our users with the latest resources on topics that matter -
          inclusivity, diversity, sustainability, and the business of theater! We strive to continually improve and grow
          our resource respository to best serve the Chicago theater community.
        </p>
        <p style="font-size: 16px">
          Are there resources you don't see here?
          <a href="mailto:info@chiartistatlas.com?subject=Inclusivity Resources">Let us know!</a>
        </p>
      </div>
    </div>
    <div class="container pb-5 px-5 m-auto"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      resources: [],
    };
  },
  mounted() {
    this.getResources();
  },
  methods: {
    getResources() {
      axios.get("/resources.json?primary_filter=Business%20for%20Actors").then((response) => {
        this.resources = response.data;
      });
    },
  },
};
</script>
