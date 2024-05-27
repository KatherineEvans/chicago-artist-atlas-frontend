<template>
  <div>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-10">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Theater Profile</h2>

        <p class="mt-1 text-base leading-6 text-gray-600">
            We're excited to learn more about what makes your theater company shine. Care to give us the scoop? Tell us about your unique business style, the passion driving your mission, and the shows that make your stage come alive. We're all ears and can't wait to hear your story!
        </p>
        <div class="loading-spinner-container" v-if="isLoading">
          <div class="loading-spinner m-auto">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-else>
          <!-- <GeneralBio v-if="userStore.currentTab === 'General'"/>
          <ArtistBio v-if="userStore.currentTab === 'Artist'"/>
          <ProductionBio v-if="userStore.currentTab === 'Production Tech'"/> -->
        </div>
      </div>
    </div>

    <div class="mt-10 flex items-center justify-end gap-x-6">
      <span>
        <button type="button" @click="saveTheaterProfile()" class="ml-3 rounded-md bg-indigo-600 pl-3 pr-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline hover:no-underline">Save</button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
// import { useUserStore } from '../../../stores/useUserStore.js';
// import { BuildingOfficeIcon, UserIcon, StarIcon } from '@heroicons/vue/20/solid'
// import ArtistBio from "./BioPages/ArtistBio.vue";
// import GeneralBio from "./BioPages/GeneralBio.vue";
// import ProductionBio from "./BioPages/ProductionBio.vue";

export default {
//   components: { ArtistBio, ProductionBio, GeneralBio },
  data: function () {
    return {
        isLoading: false
    };
  },
  mounted() {
    // this.userStore.getUserProfile();
    // this.userStore.getAdditionalInfo();
    // this.userStore.getCurrentUser();
    // this.userStore.getTechTalents();
  },
  computed: {
    // ...mapStores(useUserStore),
  },
  methods: {
    saveTheaterProfile() {
        console.log('saved!')
    }
  }
};
</script>
