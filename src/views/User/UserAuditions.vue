<template>
  <div>
    <div class="space-y-4">
      <div class="pb-3">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Saved Auditions</h2>
        <span v-if="!isLoading">
          <p v-if="auditionsExist" class="mt-1 text-lg leading-6 text-gray-600">Ready to take center stage?</p>
          <p v-else class="mt-1 text-lg leading-6 text-gray-600">
            It doesn't look like you have any saved auditions, let's change that! Visit the
            <a href="/auditions" class="no-underline hover:no-underline text-blue-700">auditions board</a>
          </p>
        </span>
      </div>
      <div class="loading-spinner-container" v-if="isLoading">
        <div class="loading-spinner m-auto">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div v-else>
        <div v-if="auditionsExist">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <UserAuditionCard
              v-for="audition in auditions.saved"
              :audition="audition"
              :key="audition.role.id"
              @remove-role="removeRole"
            />
          </div>
        </div>
        <img
          v-else
          src="https://res.cloudinary.com/dzlaaytu7/image/upload/v1688246189/iStock-1438367331_i5itmw.jpg"
          class="w-100 mx-auto mt-2"
          alt="Calender Under Construction"
          style="max-width: 550px"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import UserAuditionCard from "./UserAuditionCard";
export default {
  components: { UserAuditionCard },
  data: function () {
    return {
      auditions: [],
      isLoading: true,
    };
  },
  mounted() {
    this.getUserAuditions();
  },
  watch: {},
  computed: {
    auditionsExist() {
      if (
        this.auditions.saved.length > 0 ||
        this.auditions.submitted.length > 0 ||
        this.auditions.callbacks.length > 0 ||
        this.auditions.cast.length > 0
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    removeRole(removedAudition) {
      axios.delete(`/user_roles/${removedAudition.role.id}.json`).then((response) => {
        for (const audition in this.auditions) {
          this.auditions[audition].forEach((element) => {
            if (element.role.id == removedAudition.role.id) {
              let location = this.auditions[audition].indexOf(element);
              this.auditions[audition].splice(location, 1);
            }
          });
        }
      });
    },
    getUserAuditions() {
      axios.get("/user_roles.json").then((response) => {
        this.auditions = response.data;
        this.isLoading = false;
      });
    },
  },
};
</script>
<style></style>
