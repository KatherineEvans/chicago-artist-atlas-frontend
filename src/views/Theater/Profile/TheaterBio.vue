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
          <div class="mt-6 flex flex-wrap">
            <!-- LOGO -->
            <div class="w-full md:w-1/2 pt-3 px-3">
              <label for="cover-photo" class="block text-base font-medium leading-6 text-gray-900">Logo:</label>
              <div class="mb-3 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center mx-auto">
                  <img v-if="theater.image_url" :src="theater.image_url" class="max-h-52 m-auto" />
                  <PhotoIcon v-else class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div class="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload Photo</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" @change="handleSetFile" />
                    </label>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">PNG, JPG, JPEG up to 5MB</p>
                  <p class="text-sm text-red-600 font-medium mx-3 mt-2" v-if="theater.logoFileTooBig">
                    Oops! Looks like the photo you uploaded was a little too big. Please resize or upload a different
                    photo.
                  </p>
                  <p class="text-sm text-red-600 font-medium mx-3 mt-2" v-if="theater.logoFileTypeWrong">
                    File type unsupported, please upload a PNG, JPG, or a JPEG.
                  </p>
                </div>
              </div>
              <div class="flex-wrap flex">
                <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
                  <label for="castingDirector" class="flex block text-base font-medium leading-6 text-gray-900">Casting Director:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      v-model="theater.casting_director"
                      name="castingDirector"
                      id="castingDirector"
                      class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
                  <label for="castingEmail" class="flex block text-base font-medium leading-6 text-gray-900">Casting Email:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      v-model="theater.casting_email"
                      name="castingEmail"
                      id="castingEmail"
                      class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 pt-3 px-3">
              <!-- MISSION -->
              <div class="w-full pb-3">
                <label for="mission" class="flex block text-base font-medium leading-6 text-gray-900">Mission:</label>
                <div class="mt-2">
                  <textarea
                      v-model="theater.mission"
                      id="mission"
                      name="mission"
                      rows="5"
                      class="textarea block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
              </div>
              <div >
                <!-- ABOUT ME -->
                <div class="w-full pt-0">
                  <div class="col-span-full">
                    <label for="profile" class="block text-base font-medium leading-6 text-gray-900 mb-0">Profile:</label>
                    <p class="m-0 text-sm leading-6 italic text-gray-400">Write a few sentences about your theater</p>
                    <div class="mt-2">
                      <textarea
                        v-model="theater.notes"
                        id="profile"
                        name="profile"
                        rows="5"
                        class="textarea block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-wrap flex">
                <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
                  <label for="musicDirector" class="flex block text-base font-medium leading-6 text-gray-900">Music Director:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      v-model="theater.music_director"
                      name="musicDirector"
                      id="musicDirector"
                      class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
                  <label for="choreographer" class="flex block text-base font-medium leading-6 text-gray-900">Choreographer:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      v-model="theater.choreographer"
                      name="choreographer"
                      id="choreographer"
                      class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full pt-3 px-3 md:px-6">
              <!-- THEATRE TYPE -->
              <div class="w-full pl-1 mt-2 h-full content-between">
                <label
                  for="options"
                  class="block text-base font-medium leading-6 text-gray-900 mb-0 flex justify-between"
                >
                  <span>Theatre Type:</span>
                  <span class="ml-auto italic text-gray-400">select all that apply</span>
                </label>
                <RadioButton
                  class="pl-1"
                  id="options"
                  typeName="options"
                  @update-checkbox="updateCheckbox"
                  optionsName="options"
                  :options="options"
                  colNumberClass="grid-cols-2 md:grid-cols-4"
                  :checkedArray="checked"
                ></RadioButton>
              </div>
            </div>
          </div>
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
import axios from "axios";
import { mapStores } from 'pinia';
import { PhotoIcon } from "@heroicons/vue/24/solid";
import { useAlertStore } from '../../../stores/useAlertStore.js';
import RadioButton from "../../../form_elements/RadioButton.vue";

export default {
  components: { PhotoIcon, RadioButton },
  data: function () {
    return {
        isLoading: false,
        theater: {
          logo: null,
          mission: null,
          name: null,
        },
        logoFileTooBig: false,
        logoFileTypeWrong: false,
        logoFile: false,
        logoUpload: false,
        maxBytes: false,
        checked: [],
        options: [
          {
            id: 1,
            name: "Avant Garde",
            value: false,
          },
          {
            id: 2,
            name: "Ballet",
            value: false,
          },
          {
            id: 3,
            name: "Children's Theatre",
            value: false,
          },
          {
            id: 4,
            name: "Classical",
            value: false,
          },
          {
            id: 5,
            name: "Comedy",
            value: false,
          },
          {
            id: 6,
            name: "Dance",
            value: false,
          },
          {
            id: 7,
            name: "Musicals",
            value: false,
          },
          {
            id: 8,
            name: "Plays",
            value: false,
          },
          {
            id: 9,
            name: "Readings",
            value: false,
          },
          {
            id: 10,
            name: "Theatre by Young Performers",
            value: false,
          }
        ]
    };
  },
  mounted() {
    this.getTheater();
  },
  methods: {
    getTheater() {
      axios.get(`/theaters/${localStorage.getItem("theaterId")}`).then((response) => {
        this.theater = response.data;
        this.options.forEach((option) => {
          if(response.data.season_type.includes(option.name)) {
            this.checked.push(option.id);
          }
        });
        console.log(this.checked);
      });
    },
    saveTheaterProfile() {
      let seasonType = []
      this.options.forEach(option => {
        if(this.checked.includes(option.id)) {
          seasonType.push(option.name);
        }
      });
      this.theater.season_type = seasonType.join(', ');
      axios.put(`/theaters/${this.theater.id}`, this.theater).then((response) => {
        this.theater = response.data;
        let message = {
            title: "Successfully Saved!",
            body: "Your theater information has been successfully saved.",
            icon: "success",
          };
          useAlertStore().setMessage(message);
      }).catch(error => {
        let message = {
            title: "Whoops!",
            body: "Looks like something went wrong. Please try again. If error persists, email info@chiartistatlas.com",
            icon: "failure",
          };
          useAlertStore().setMessage(message);
      })
    },
    updateCheckbox(data){
      console.log(data);
      if (this.checked.includes(data.id)) {
        this.checked = this.checked.filter(item => item != data.id);
      } else {
        this.checked.push(data.id);
      }
      console.log(this.checked, 'checked');
    },
    handleSetFile(event, type) {
      if (event.target.files.length > 0) {
        this.theater.logoFileTooBig = false;
        this.theater.logoFileTypeWrong = false;
        this.theater.logoFile = null;
        this.theater.logoUpload = event.target.files[0];
        if (event.target.files[0].type.includes("image")) {
          if (event.target.files[0].size > this.theater.maxBytes) {
            this.theater.logoFileTooBig = true;
          } else {
            let reader = new FileReader();
            reader.onload = (event) => {
              this.theater.logoFile = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
          }
        } else {
          this.theater.logoFileTypeWrong = true;
        }
      }
    }
  }
};
</script>
