<template>
  <div class="container-fluid">
    <div class="row bg-blue-50 py-3 px-4 text-center">
      <div class="col-8 m-auto my-3">
        <h2 class="text-3xl font-bold">Auditions</h2>
        <p style="font-size: 16px">
          ATLAS strives to deliver accurate, timely, and transparent audition information for Chicago and the greater
          Chicagoland area. Theatres and creative who would like to post an audition, please fill out the form here!
        </p>
      </div>
    </div>
    <div class="container main">
      <div class="row my-2 py-2 no-gutters">
        <h4>Top Results</h4>
        <div class="row my-2 py-2 pl-4">
          <AuditionCard
            v-for="audition in auditions"
            v-bind:key="audition.id"
            :audition="audition"
            @expand-audition="expandAudition(audition)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import AuditionCard from "./AuditionCard.vue";

export default {
  components: { AuditionCard },
  data: function () {
    return {
      title: "Audition Board",
      auditions: [],
      currentAuditionId: null,
      heart: false,
    };
  },
  computed: {
    formatDate() {
      return (value) => {
        return moment(String(value)).format("MM/DD/YYYY");
      };
    },
  },
  watch: {},
  created: function () {
    this.getAuditions("/auditions");
  },
  methods: {
    expandAudition(audition) {
      if (this.currentAuditionId == audition.id) {
        document.querySelectorAll(`.audition` + audition.id).forEach((item) => {
          item.classList.add("hide");
        });
        this.currentAuditionId = null;
      } else {
        if (this.currentAuditionId != null && this.currentAuditionId != audition.id) {
          document.querySelectorAll(`.audition` + this.currentAuditionId).forEach((item) => {
            item.classList.add("hide");
          });
          this.currentAuditionId = audition.id;
          "audition" + audition.id;
          document.querySelectorAll(`.audition` + audition.id).forEach((item) => {
            item.classList.remove("hide");
          });
        } else {
          this.currentAuditionId = audition.id;
          "audition" + audition.id;
          document.querySelectorAll(`.audition` + audition.id).forEach((item) => {
            item.classList.remove("hide");
          });
        }
      }
    },
    getAuditions(link) {
      axios
        .get(link)
        .then((response) => {
          this.auditions = response.data;
          console.log(this.auditions);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
