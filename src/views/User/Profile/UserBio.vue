<template>
  <div>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-10">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Bio</h2>

        <p class="mt-1 text-base leading-6 text-gray-600">
          We would love to get to know you better! Please take a moment to share some key details about yourself. Your
          information will always be treated with the
          <strong class="underline">utmost care and confidentiality</strong>
          and used solely to enhance your user experience and connect you to roles and productions that fit your unique
          self!
        </p>
        <div>
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 mt-3" @change="userStore.currentTab = $event.target.value">
              <option v-for="tab in tabs" :key="tab.name" :selected="tab.name === userStore.currentTab">{{ tab.name }}</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <div class="border-b border-gray-200">
              <nav class="pb-0 pl-0 -mb-px flex space-x-8" aria-label="Tabs">
                <div v-for="tab in tabs" :key="tab.name" @click="userStore.currentTab = tab.name" :class="[tab.name === userStore.currentTab ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'group inline-flex items-center border-b-2 py-4 pl-3 pr-4 text-sm font-medium']" :aria-current="tab.name === userStore.currentTab ? 'page' : undefined">
                  <component :is="tab.icon" :class="[userStore.currentTab === tab.name ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-0.5 mr-2 h-5 w-5']" aria-hidden="true" />
                  <span>{{ tab.name }}</span>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="loading-spinner-container" v-if="userStore.isLoading">
          <div class="loading-spinner m-auto">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-else>
          <GeneralBio v-if="userStore.currentTab === 'General'"/>
          <ArtistBio v-if="userStore.currentTab === 'Artist'"/>
          <ProductionBio v-if="userStore.currentTab === 'Production Tech'"/>
        </div>
      </div>
    </div>

    <div class="mt-10 flex items-center justify-end gap-x-6">
      <span>
        <button type="button" @click="userStore.saveProfile(false)" class="ml-3 rounded-md bg-indigo-600 pl-3 pr-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline hover:no-underline">Save</button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useUserStore } from '../../../stores/useUserStore.js';
import { BuildingOfficeIcon, UserIcon, StarIcon } from '@heroicons/vue/20/solid'
import ArtistBio from "./BioPages/ArtistBio.vue";
import GeneralBio from "./BioPages/GeneralBio.vue";
import ProductionBio from "./BioPages/ProductionBio.vue";

export default {
  components: { ArtistBio, ProductionBio, GeneralBio },
  data: function () {
    return {
      next: false,
      tabs: [
        { name: "General", icon: UserIcon },
        { name: "Artist", icon: StarIcon },
        { name: "Production Tech", icon: BuildingOfficeIcon },
      ],
    };
  },
  mounted() {
    this.userStore.getUserProfile();
    this.userStore.getAdditionalInfo();
    this.userStore.getCurrentUser();
    this.userStore.getTechTalents();
  },
  computed: {
    ...mapStores(useUserStore),
  },
};
</script>
