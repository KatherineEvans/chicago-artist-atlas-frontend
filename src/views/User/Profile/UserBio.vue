<template>
  <form v-on:submit="saveProfile">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Bio</h2>

        <p class="mt-1 text-base leading-6 text-gray-600">
          We would love to get to know you better! Please take a moment to share some key details about yourself. Your
          information will always be treated with
          <strong class="underline">utmost care and confidentiality</strong>
          and used solely to enhance your user experience and connect you to roles and productions that fit your unique
          self!
        </p>
        <div class="loading-spinner-container" v-if="isLoading">
          <div class="loading-spinner m-auto">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-else class="mt-6 flex flex-wrap">
          <div class="w-full md:w-1/2 pt-3 px-3">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Headshot:</label>
            <div class="mb-3 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center mx-auto">
                <img v-if="imgFile" :src="imgFile" class="max-h-52 m-auto" />
                <PhotoIcon v-else class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload Photo</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" @change="handleSetFile" />
                  </label>
                  <!-- <p class="pl-1">or drag and drop</p> -->
                </div>
                <p class="text-xs leading-5 text-gray-600">PNG, JPG, JPEG up to 5MB</p>
                <p class="text-sm text-red-600 font-medium mx-3 mt-2" v-if="fileTooBig">
                  Oops! Looks like the photo you uploaded was a little too big. Please resize or upload a different
                  photo.
                </p>
                <p class="text-sm text-red-600 font-medium mx-3 mt-2" v-if="fileTypeWrong">
                  File type unsupported, please upload a PNG, JPG, or a JPEG.
                </p>
              </div>
            </div>
            <div class="w-full pt-2 pb-3">
              <label for="headline" class="flex block text-sm font-medium leading-6 text-gray-900">Headline:</label>
              <div class="mt-2">
                <input
                  type="text"
                  v-model="profile.headline"
                  name="headline"
                  id="headline"
                  placeholder="Actor Extraordinaire"
                  autocomplete="address-level2"
                  class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="pl-1">
              <label for="pronouns" class="block text-sm font-medium leading-6 text-gray-900 mb-0">
                Pronouns:
                <!-- <span class="ml-auto italic text-gray-400">select all that apply</span> -->
              </label>
              <p class="m-0 text-sm leading-6 italic text-gray-400">Select all that apply</p>
              <RadioButton
                id="pronouns"
                @update-checkbox="updateCheckbox"
                optionsName="Pronouns"
                :options="pronounOptions"
                colNumberClass="grid-cols-2"
              ></RadioButton>
            </div>
          </div>
          <div class="w-full md:w-1/2 grid flex flex-wrap">
            <div class="flex-wrap flex">
              <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
                <label for="manager" class="flex block text-sm font-medium leading-6 text-gray-900">Manager:</label>
                <div class="mt-2">
                  <input
                    type="text"
                    v-model="profile.manager"
                    name="manager"
                    id="manager"
                    autocomplete="address-level2"
                    class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
                <label for="agency" class="flex block text-sm font-medium leading-6 text-gray-900">Agency:</label>
                <div class="mt-2">
                  <input
                    type="text"
                    v-model="profile.agency"
                    name="agency"
                    id="agency"
                    autocomplete="address-level2"
                    class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
                <label for="unionStatus" class="flex block text-sm font-medium leading-6 text-gray-900 mb-1">
                  Union Status:
                </label>
                <DropdownSelect
                  id="unionStatus"
                  @set-selected="unionStatus.selected = $event"
                  width="w-50 pr-2"
                  :selectedData="profile.union_status"
                  :dropdownData="unionStatus"
                  name="union_status"
                ></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
                <label for="age" class="block text-sm font-medium leading-6 text-gray-900">Age:</label>
                <DropdownSelect
                  id="age"
                  @set-selected="age.selected = $event"
                  :selectedData="profile.age"
                  width="w-50 pr-2"
                  :dropdownData="age"
                  name="age"
                ></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
                <label for="gender" class="flex block text-sm font-medium leading-6 text-gray-900">Gender:</label>
                <DropdownSelect
                  id="gender"
                  @set-selected="gender.selected = $event"
                  :selectedData="profile.gender"
                  width="w-50 pr-2"
                  :dropdownData="gender"
                  name="gender"
                ></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
                <label for="ethnicity" class="flex block text-sm font-medium leading-6 text-gray-900">Ethnicity:</label>
                <DropdownSelect
                  id="ethnicity"
                  @set-selected="ethnicity.selected = $event"
                  :selectedData="profile.ethnicity"
                  width="w-50 pr-2"
                  :dropdownData="ethnicity"
                  name="ethnicity"
                ></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/3 pt-2 px-3 pb-2">
                <label for="height" class="block text-sm font-medium leading-6 text-gray-900 mb-1">Height (ft):</label>
                <DropdownSelect
                  id="height"
                  @set-selected="height.selected = $event"
                  :selectedData="profile.height"
                  width="w-50 pr-2"
                  :dropdownData="height"
                  name="height"
                ></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/3 pt-2 px-3 pb-2">
                <label for="hair_color" class="block text-sm font-medium leading-6 text-gray-900">Hair Color:</label>
                <DropdownSelect
                  id="hair_color"
                  @set-selected="hairColor.selected = $event"
                  :selectedData="profile.hair_color"
                  width="w-50 pr-2"
                  :dropdownData="hairColor"
                  name="hair_color"
                ></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/3 pt-2 px-3 pb-2">
                <label for="eye_color" class="block text-sm font-medium leading-6 text-gray-900">Eye Color:</label>
                <DropdownSelect
                  id="eye_color"
                  @set-selected="eyeColor.selected = $event"
                  :selectedData="profile.eye_color"
                  width="w-50 pr-2"
                  :dropdownData="eyeColor"
                  name="eye_color"
                ></DropdownSelect>
              </div>
              <div class="w-full grid flex flex-wrap flex pt-2">
                <div class="col-span-full px-3">
                  <label for="bio" class="block text-sm font-medium leading-6 text-gray-900 mb-0">About:</label>
                  <p class="m-0 text-sm leading-6 italic text-gray-400">Write a few sentences about yourself!</p>
                  <div class="mt-2">
                    <textarea
                      v-model="profile.bio"
                      id="bio"
                      name="bio"
                      rows="3"
                      style="min-height: 200px"
                      class="block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 flex items-center justify-between gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <span>
        <button type="submit" class="px-3 py-2 text-sm font-semibold underline">Save</button>
        <a
          href="/user/profile/talents"
          class="ml-3 rounded-md bg-indigo-600 pl-2 pr-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline hover:no-underline"
        >
          Save and Next
        </a>
      </span>
    </div>
  </form>
</template>

<script>
import { PhotoIcon } from "@heroicons/vue/24/solid";
import DropdownSelect from "../../../form_elements/DropdownSelect.vue";
import RadioButton from "../../../form_elements/RadioButton.vue";
import axios from "axios";

export default {
  components: { PhotoIcon, RadioButton, DropdownSelect },
  data: function () {
    return {
      isLoading: true,
      imgFile: null,
      imgUpload: null,
      maxBytes: 5242880,
      fileTooBig: false,
      fileTypeWrong: false,
      keepPrivate: false,
      profile: {
        id: null,
        bio: null,
        age: null,
        keep_private: false,
        union_status: "Equity",
        ethnicity: null,
        pronouns: null,
        gender: "Female",
        height: "5' 7\"",
        eye_color: "Brown",
        hair_color: "Brown",
        vocal_range: null,
        performance_type: null,
        agency: null,
        manager: null,
        professional_website: null,
        headshot_url: null,
        resume_url: null,
      },
      unionStatus: {
        selected: "Equity",
        options: ["Equity", "Non Equity", "SAG-AFTRA"],
      },
      height: {
        options: [
          "3' 0\"",
          "3' 1\"",
          "3' 2\"",
          "3' 3\"",
          "3' 4\"",
          "3' 5\"",
          "3' 6\"",
          "3' 7\"",
          "3' 8\"",
          "3' 9\"",
          "3' 10\"",
          "3' 11\"",
          "4' 0\"",
          "4' 1\"",
          "4' 2\"",
          "4' 3\"",
          "4' 4\"",
          "4' 5\"",
          "4' 6\"",
          "4' 7\"",
          "4' 8\"",
          "4' 9\"",
          "4' 10\"",
          "4' 11\"",
          "5' 0\"",
          "5' 1\"",
          "5' 2\"",
          "5' 3\"",
          "5' 4\"",
          "5' 5\"",
          "5' 6\"",
          "5' 7\"",
          "5' 8\"",
          "5' 9\"",
          "5' 10\"",
          "5' 11\"",
          "6' 0\"",
          "6' 1\"",
          "6' 2\"",
          "6' 3\"",
          "6' 4\"",
          "6' 5\"",
          "6' 6\"",
          "6' 7\"",
          "6' 8\"",
          "6' 9\"",
          "6' 10\"",
          "6' 11\"",
          "7' 0\"",
          "7' 1\"",
          "7' 2\"",
          "7' 3\"",
          "7' 4\"",
          "7' 5\"",
          "7' 6\"",
          "7' 7\"",
          "7' 8\"",
          "7' 9\"",
          "7' 10\"",
          "7' 11\"",
        ],
      },
      eyeColor: {
        options: ["Blue", "Brown", "Green", "Gray", "Hazel", "Amber", "Red", "Other"],
      },
      hairColor: {
        options: [
          "Blonde",
          "Brown",
          "Red",
          "Black",
          "Gray",
          "White",
          "Bald",
          "Blue",
          "Purple",
          "Green",
          "Orange",
          "Yellow",
          "Rainbow",
          "Other",
        ],
      },
      age: {
        options: ["18-22", "23-27", "28-32", "33-37", "38-42", "43-47", "48-52", "53-57", "58-65", "Above 65"],
      },
      pronounOptions: {
        srTitle: "Pronouns",
        data: [
          {
            name: "She, Her, Hers",
            value: false,
          },
          {
            name: "He, Him, His",
            value: false,
          },
          {
            name: "They, Them, Their",
            value: false,
          },
          {
            name: "Ze, Zir, Zirs",
            value: false,
          },
          {
            name: "Ze, Hir, Hirs",
            value: false,
          },
          {
            name: "Prefer not to share",
            value: false,
          },
        ],
      },
      gender: {
        options: [
          "Male",
          "Female",
          "Transgender",
          "Demigender",
          "Agender",
          "Nonbinary",
          "Genderqueer",
          "Two-Spirit",
          "Other",
          "No Response",
        ],
      },
      ethnicity: {
        options: [
          "American Indian or Alaskan Native",
          "Asian / Pacific Islander",
          "Black or African American",
          "Hispanic",
          "White / Caucasian",
          "Multiple ethnicity / Other",
        ],
      },
      pronouns: [],
    };
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      axios
        .get("/profile.json")
        .then((response) => {
          this.profile = response.data.profiles[0];
          console.log("Headshot", response.data.profiles[0].headshot_url);
          this.imgFile = response.data.profiles[0].headshot_url;
          if (response.data.profiles[0].pronouns) {
            let data = JSON.parse(response.data.profiles[0].pronouns);
            this.pronounOptions = data;
          }
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("error loading profile", error.response.data.status.message);
        });
    },
    saveProfile() {
      event.preventDefault();
      let data = new FormData(event.target);
      data.append("image_upload", this.imgUpload);
      data.append("image_file", this.imgFile);
      data.append("pronouns", JSON.stringify(this.pronounOptions));

      this.profile.id ? this.updateProfile(data) : this.createProfile(data);
    },
    updateProfile(data) {
      axios.patch(`/profiles/${this.profile.id}.json`, data).then((response) => {
        console.log(response);
        this.$store.commit("users/setProfile", response.data);
      });
    },
    createProfile(data) {
      console.log("create", data);
      axios.post("/profiles.json", data).then((response) => {
        console.log(response);
        this.$store.commit("users/setProfile", response.data);
      });
    },
    handleSetFile(event) {
      if (event.target.files.length > 0) {
        this.fileTooBig = false;
        this.fileTypeWrong = false;
        this.imgFile = null;
        this.imgUpload = null;
        this.imgUpload = event.target.files[0];
        if (event.target.files[0].type.includes("image")) {
          if (event.target.files[0].size > this.maxBytes) {
            this.fileTooBig = true;
          } else {
            let reader = new FileReader();
            reader.onload = (event) => {
              this.imgFile = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
          }
        } else {
          this.fileTypeWrong = true;
        }
      }
    },
    updateCheckbox(option, index) {
      this.pronounOptions.data.splice(index, 1, option);
    },
  },
};
</script>
