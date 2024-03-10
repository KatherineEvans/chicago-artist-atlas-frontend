<template>
  <div class="mt-6 flex flex-wrap">
    <div class="w-full md:w-1/2 grid flex flex-wrap">
      <div class="flex-wrap flex">
        <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
          <label for="manager" class="flex block text-base font-medium leading-6 text-gray-900">Manager:</label>
          <div class="mt-2">
            <input
              type="text"
              v-model="userStore.profile.manager"
              name="manager"
              id="manager"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
          <label for="agency" class="flex block text-base font-medium leading-6 text-gray-900">Agency:</label>
          <div class="mt-2">
            <input
              type="text"
              v-model="userStore.profile.agency"
              name="agency"
              id="agency"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
          <label for="unionStatus" class="flex block text-base font-medium leading-6 text-gray-900 mb-1">
            Union Status:
          </label>
          <DropdownSelect
            id="unionStatus"
            @set-selected="userStore.unionStatus.selected = $event"
            width="w-50 pr-2"
            :selectedData="userStore.profile.union_status"
            :dropdownData="userStore.unionStatus"
            name="union_status"
          ></DropdownSelect>
        </div>
        <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
          <label for="ethnicity" class="flex block text-base font-medium leading-6 text-gray-900">Website:</label>
          <div class="mt-2">
            <input
                type="text"
                v-model="userStore.profile.professional_website"
                name="website"
                id="website"
                class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
          </div>
        </div>
        <div class="w-full pt-2 px-3 pb-2">
          <label class="block text-base font-medium leading-6 text-gray-900 mb-2 flex justify-between">
            <span>Upload Resume:</span>
            <span v-if="userStore.profile?.resume_url">
              <a target="_blank" :href="userStore.profile.resume_url" class="underline font-bold text-blue-700">View Resume</a>
            </span>
          </label>
          <input class="px-3 py-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none" id="file_input" type="file" @change="handleSetFile">
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 grid flex flex-wrap">
      <div class="flex-wrap flex">    
        <div class="w-full lg:w-1/4 pt-2 px-3 pb-2">
          <label for="age_low" class="block text-base font-medium leading-6 text-gray-900 mb-3">Age Low:</label>
          <input
            type="text"
            v-model="userStore.profile.age_low"
            name="age_low"
            id="age_low"
            class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div class="w-full lg:w-1/4 pt-2 px-3 pb-2">
          <label for="age_high" class="block text-base font-medium leading-6 text-gray-900 mb-3">Age High:</label>
          <input
            type="text"
            v-model="userStore.profile.age_high"
            name="age_high"
            id="age_high"
            class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
          <label for="height" class="block text-base font-medium leading-6 text-gray-900 mb-1">Height (ft):</label>
          <DropdownSelect
            id="height"
            @set-selected="userStore.profile.height = $event"
            :selectedData="userStore.profile.height"
            width="w-50 pr-2"
            :dropdownData="userStore.heightOptions"
            name="height"
          ></DropdownSelect>
        </div>
        <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
          <label for="hair_color" class="block text-base font-medium leading-6 text-gray-900">Hair Color:</label>
          <DropdownSelect
            id="hair_color"
            @set-selected="userStore.profile.hair_color = $event"
            :selectedData="userStore.profile.hair_color"
            width="w-50 pr-2"
            :dropdownData="userStore.hairColorOptions"
            name="hair_color"
          ></DropdownSelect>
        </div>
        <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
          <label for="eye_color" class="block text-base font-medium leading-6 text-gray-900">Eye Color:</label>
          <DropdownSelect
            id="eye_color"
            @set-selected="userStore.profile.eye_color = $event"
            :selectedData="userStore.profile.eye_color"
            width="w-50 pr-2"
            :dropdownData="userStore.eyeColorOptions"
            name="eye_color"
          ></DropdownSelect>
        </div>
        <div class="w-full pt-2 px-3 pb-2">
          <label for="ethnicity" class="flex block text-base font-medium leading-6 text-gray-900">Link to Acting Reel:</label>
          <div class="mt-2">
            <input
                type="text"
                v-model="userStore.profile.acting_reel_url"
                name="acting_reel_url"
                id="acting_reel"
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
  import DropdownSelect from "../../../../form_elements/DropdownSelect.vue";
  import axios from "axios";
  
  export default {
    components: { DropdownSelect },
    data: function () {
      return {};
    },
    computed: {
      ...mapStores(useUserStore),
    },
    methods: {
      handleSetFile(event, type) {
        if (event.target.files.length > 0) {
          this.userStore.resumeFileTooBig = false;
          this.userStore.resumeFileTypeWrong = false;
          this.userStore.resumeUpload = event.target.files[0];

          if (event.target.files[0].type.includes("image")) {
            this.userStore.resumeFileTypeWrong = true;
          }
        }
      },
      
    },
  };
  </script>
  
