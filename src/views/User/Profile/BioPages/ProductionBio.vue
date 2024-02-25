<template>
  <div class="mt-6 flex flex-wrap">
    <div class="w-full md:w-1/2 grid flex flex-wrap">
      <div class="flex-wrap flex">
        <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
          <label for="techManager" class="flex block text-base font-medium leading-6 text-gray-900">Manager:</label>
          <div class="mt-2">
            <input
              type="text"
              v-model="userStore.profile.tech_manager"
              name="techManager"
              id="techManager"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
          <label for="techAgent" class="flex block text-base font-medium leading-6 text-gray-900">Agent:</label>
          <div class="mt-2">
            <input
              type="text"
              v-model="userStore.profile.tech_agent"
              name="techAgent"
              id="techAgent"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 grid flex flex-wrap">
      <div class="flex-wrap flex">
        <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
          <label for="website" class="flex block text-base font-medium leading-6 text-gray-900">Website:</label>
          <div class="mt-2">
            <input
              type="text"
              v-model="userStore.profile.tech_website"
              name="website"
              id="website"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
          <label for="portfolio" class="flex block text-base font-medium leading-6 text-gray-900">Portfolio:</label>
          <div class="mt-2">
            <input
              type="text"
              v-model="userStore.profile.portfolio_url"
              name="portfolio"
              id="portfolio"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mt-6 flex flex-wrap">
      <div
        class="border-b last:border-0 w-full px-1 lg:px-3"
        v-for="(talents, category) in userStore.techTalents"
        :key="category"
      >
        <div class="border-gray-900/10 py-3">
          <label :for="category" class="block text-base font-bold leading-6 text-gray-900 mb-0 mt-3">
            {{ category }}
          </label>
          <p class="m-0 text-sm leading-6 italic text-gray-400">Select all that apply</p>
          <RadioButton
            colNumberClass="grid-cols-2 lg:grid-cols-3 space-y-5 grid"
            @update-checkbox="userStore.updateTechTalentCheckbox"
            :optionsName="category"
            :checkedArray="userStore.userTechTalents"
            :options="talents"
            typeName="talents"
          ></RadioButton>
        </div>
        <div class="w-full pt-2 pb-3 mb-2">
          <div class="mb-3" v-if="userStore.otherUserTechTalents[category]">
            <span
              v-for="talent in userStore.otherUserTechTalents[category]"
              :key="talent"
              class="inline-flex items-center gap-x-0.5 rounded-md bg-blue-50 px-3 py-1 text-base font-medium text-blue-600 ring-1 ring-inset ring-blue-500/10 mr-3"
            >
              {{ talent }}
              <button
                @click="userStore.removeTechTalent(category, talent)"
                type="button"
                class="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-blue-500/20"
              >
                <span class="sr-only">Remove</span>
                <svg viewBox="0 0 14 14" class="h-3.5 w-3.5 stroke-blue-600/50 group-hover:stroke-blue-600/75">
                  <path d="M4 4l6 6m0-6l-6 6" />
                </svg>
                <span class="absolute -inset-1" />
              </button>
            </span>
          </div>
          <label for="otherTalents" class="flex block text-base font-medium leading-6 text-gray-900 mb-0 mt-2">
            Other - {{ category }}:
          </label>
          <p class="m-0 text-sm leading-6 italic text-gray-400">Separate with a comma</p>
          <div class="mt-2">
            <input
              type="text"
              name="otherTalents"
              id="otherTalents"
              @input="userStore.updateTechTalentText($event, category)"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapStores } from 'pinia';
  import { useUserStore } from '../../../../stores/useUserStore.js';
  import RadioButton from "../../../../form_elements/RadioButton.vue";
  import axios from "axios";
  
  export default {
    components: { RadioButton },
    data: function () {
      return {
      }
    },
    computed: {
      ...mapStores(useUserStore),
    },
    methods: {
    }
  };
  </script>
