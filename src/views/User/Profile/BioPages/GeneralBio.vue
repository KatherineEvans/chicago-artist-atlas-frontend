<template>
  <form v-on:submit="saveProfile">
    <div class="mt-6 flex flex-wrap">
      <!-- HEADSHOT -->
      <div class="w-full md:w-1/2 pt-3 px-3">
        <label for="cover-photo" class="block text-base font-medium leading-6 text-gray-900">Headshot:</label>
        <div class="mb-3 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div class="text-center mx-auto">
            <img v-if="userStore.headshotFile" :src="userStore.headshotFile" class="max-h-52 m-auto" />
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
            <p class="text-sm text-red-600 font-medium mx-3 mt-2" v-if="userStore.headshotFileTooBig">
              Oops! Looks like the photo you uploaded was a little too big. Please resize or upload a different
              photo.
            </p>
            <p class="text-sm text-red-600 font-medium mx-3 mt-2" v-if="userStore.headshotFileTypeWrong">
              File type unsupported, please upload a PNG, JPG, or a JPEG.
            </p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 pt-3 px-3">
        <!-- HEADLINE -->
        <div class="w-full pb-3">
          <label for="headline" class="flex block text-base font-medium leading-6 text-gray-900">Headline:</label>
          <div class="mt-2">
            <input
              type="text"
              v-model="userStore.profile.headline"
              name="headline"
              id="headline"
              placeholder="Actor Extraordinaire"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div >
          <!-- ABOUT ME -->
          <div class="w-full pt-0">
            <div class="col-span-full">
              <label for="bio" class="block text-base font-medium leading-6 text-gray-900 mb-0">About:</label>
              <p class="m-0 text-sm leading-6 italic text-gray-400">Write a few sentences about yourself!</p>
              <div class="mt-2">
                <textarea
                  v-model="userStore.profile.bio"
                  id="bio"
                  name="bio"
                  rows="3"
                  class="textarea block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 flex flex-wrap">
      <div class="w-full md:w-1/2 pt-3 px-3 md:px-6">
        <!-- ETHNICITY -->
        <div class="w-full pl-1 px-3 mt-2">
          <!-- <span class="flex flex-wrap md:h-full md:content-between md:pb-2"> -->
            <!-- <span class="w-full"> -->
              <label for="ethnicity" class="block text-base font-medium leading-6 text-gray-900 mb-0 flex justify-between">
                <span>Ethnicity:</span>
                <span class="ml-auto italic text-gray-400">select all that apply</span>
              </label>
              <RadioButton
                class="pl-1"
                id="ethnicity"
                typeName="ethnicity"
                @update-checkbox="updateCheckbox"
                optionsName="Ethnicity"
                :options="userStore.ethnicityOptions"
                :checkedArray="userStore.ethnicitiesChecked"
                colNumberClass="grid-cols-2"
              ></RadioButton>
              <div class="my-3">
                <span
                  v-for="ethnicity in userStore.otherUserEthnicities"
                  :key="ethnicity.id"
                  class="inline-flex items-center gap-x-0.5 rounded-md bg-blue-50 px-3 py-1 text-base font-medium text-blue-600 ring-1 ring-inset ring-blue-500/10 mr-3"
                >
                  {{ ethnicity }}
                  <button
                    @click="removeItem('ethnicity', ethnicity)"
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
            <!-- </span> -->
            <!-- <span class="w-full"> -->
              <label for="otherEthnicities" class="flex block text-base font-medium leading-6 text-gray-900 mb-0 mt-6">
                Other - Ethnicity:
              </label>
              <p class="m-0 text-sm leading-6 italic text-gray-400">Separate with a comma</p>
              <div class="mt-2">
                <input
                  type="text"
                  name="otherEthnicities"
                  id="otherEthnicities"
                  @input="updateText($event, 'ethnicity')"
                  class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            <!-- </span> -->
          <!-- </span> -->
          </div>
      </div>
      <div class="w-full md:w-1/2 pt-3 px-3 md:px-6">
        <!-- GENDER -->
        <div class="w-full pl-1 px-3 mt-2">
          <label for="gender" class="block text-base font-medium leading-6 text-gray-900 mb-0 flex justify-between">
            <span>Gender:</span>
            <span class="ml-auto italic text-gray-400">select all that apply</span>
          </label>
          <RadioButton
            class="pl-1"
            id="gender"
            typeName="gender"
            @update-checkbox="updateCheckbox"
            optionsName="Gender"
            :options="userStore.genderOptions"
            :checkedArray="userStore.gendersChecked"
            colNumberClass="grid-cols-2"
          ></RadioButton>
          <div class="my-3">
            <span
              v-for="gender in userStore.otherUserGenders"
              :key="gender"
              class="inline-flex items-center gap-x-0.5 rounded-md bg-blue-50 px-3 py-1 text-base font-medium text-blue-600 ring-1 ring-inset ring-blue-500/10 mr-3"
            >
              {{ gender }}
              <button
                @click="removeItem('gender', gender)"
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
          <label for="otherGenders" class="flex block text-base font-medium leading-6 text-gray-900 mb-0 mt-6">
            Other - Gender:
          </label>
          <p class="m-0 text-sm leading-6 italic text-gray-400">Separate with a comma</p>
          <div class="mt-2">
            <input
              type="text"
              name="otherGenders"
              id="otherGenders"
              @input="updateText($event, 'gender')"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div class="w-full pt-3 px-3 md:px-6">
        <!-- PRONOUNS -->
        <div class="w-full pl-1 mt-2 h-full content-between">
          <label
            for="pronouns"
            class="block text-base font-medium leading-6 text-gray-900 mb-0 flex justify-between"
          >
            <span>Pronouns:</span>
            <span class="ml-auto italic text-gray-400">select all that apply</span>
          </label>
          <RadioButton
            class="pl-1"
            id="pronouns"
            typeName="pronouns"
            @update-checkbox="updateCheckbox"
            optionsName="Pronouns"
            :options="userStore.pronounOptions"
            colNumberClass="grid-cols-2 md:grid-cols-4"
            :checkedArray="userStore.pronounsChecked"
          ></RadioButton>
          <!-- OTHER PRONOUNS -->
          <div class="mb-3 mt-6">
            <span
              v-for="pronoun in userStore.otherUserPronouns"
              :key="pronoun"
              class="inline-flex items-center gap-x-0.5 rounded-md bg-blue-50 px-3 py-1 text-base font-medium text-blue-600 ring-1 ring-inset ring-blue-500/10 mr-3"
            >
              {{ pronoun }}
              <button
                @click="removeItem('pronoun', pronoun)"
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
          <!-- OTHER PRONOUNS INPUT -->
          <label for="otherPronouns" class="flex block text-base font-medium leading-6 text-gray-900 mb-0 mt-6">
            Other - Pronouns:
          </label>
          <p class="m-0 text-sm leading-6 italic text-gray-400">Separate with a comma</p>
          <div class="mt-2">
            <input
              type="text"
              name="otherPronouns"
              id="otherPronouns"
              @input="updateText($event, 'pronoun')"
              class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapStores } from 'pinia';
import { useUserStore } from '../../../../stores/useUserStore.js';
import { PhotoIcon } from "@heroicons/vue/24/solid";
import { BuildingOfficeIcon, UserIcon, StarIcon } from '@heroicons/vue/20/solid'
import RadioButton from "../../../../form_elements/RadioButton.vue";
import axios from "axios";

export default {
  components: { PhotoIcon, RadioButton },
  data: function () {
    return {};
  },
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    updateCheckbox(option, index, type) {
      if (type === "pronouns") {
        this.userStore.pronounOptions.map((po) => (po.name === option.name ? (po.value = index) : null));
      }
      if (type === "gender") {
        this.userStore.gendersChecked.push(option.id)
      }
      if (type === "ethnicity") {
        this.userStore.ethnicitiesChecked.push(option.id)
      }
    },
    updateText(event, type) {
      if (event.target.value.includes(",")) {
        if (type == "gender") {
          this.userStore.otherUserGenders.push(event.target.value.slice(0, -1));
        }
        if (type == "pronoun") {
          this.userStore.otherUserPronouns.push(event.target.value.slice(0, -1));
        }
        if (type == "ethnicity") {
          this.userStore.otherUserEthnicities.push(event.target.value.slice(0, -1));
        }
        event.target.value = "";
      }
    },
    removeItem(type, item) {
      if (type === "gender") {
        this.userStore.otherUserGenders = this.userStore.otherUserGenders.filter((g) => g != item);
      }
      if (type === "pronoun") {
        this.userStore.otherUserPronouns = this.userStore.otherUserPronouns.filter((g) => g != item);
      }
      if (type === "ethnicity") {
        this.userStore.otherUserEthnicities = this.userStore.otherUserEthnicities.filter((g) => g != item);
      }
    },
    alertMessage() {
      this.$store.commit("alerts/setMessage", {
        title: "Successfully Saved!",
        body: "Your Artist Bio has been successfully saved.",
        icon: "success",
        isVisible: true,
      });
    },
    handleSetFile(event, type) {
      if (event.target.files.length > 0) {
        this.userStore.headshotFileTooBig = false;
        this.userStore.headshotFileTypeWrong = false;
        this.userStore.headshotFile = null;
        this.userStore.headshotUpload = event.target.files[0];
        if (event.target.files[0].type.includes("image")) {
          if (event.target.files[0].size > this.userStore.maxBytes) {
            this.userStore.headshotFileTooBig = true;
          } else {
            let reader = new FileReader();
            reader.onload = (event) => {
              this.userStore.headshotFile = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
          }
        } else {
          this.userStore.headshotFileTypeWrong = true;
        }
      }
    }
  },
};
</script>
<style>
  .textarea {
    height: 100% !important;
    resize: vertical;
    /* min-height: 100px; */
  }
</style>
