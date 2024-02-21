<template>
  <div class="mt-6 flex flex-wrap">
    <div class="w-full md:w-1/2 grid flex flex-wrap">
      <div class="flex-wrap flex">
        <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
          <label for="techManager" class="flex block text-base font-medium leading-6 text-gray-900">Manager:</label>
          <div class="mt-2">
            <input
              type="text"
              v-model="profile.tech_manager"
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
              v-model="profile.tech_agent"
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
              v-model="profile.tech_website"
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
              v-model="profile.portfolio_url"
              name="portfolio"
              id="portfolio"
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
  import axios from "axios";
  
  export default {
    data: function () {
      return {
        next: false,
        isLoading: true,
        imgFile: null,
        imgUpload: null,
        maxBytes: 5242880,
        fileTooBig: false,
        fileTypeWrong: false,
        keepPrivate: false,
        genderChecked: [],
        pronounChecked: [],
        otherGender: [],
        otherPronouns: [],
        profile: {
          id: null,
          bio: null,
          age_low: "18-22",
          age_high: "33-37",
          keep_private: false,
          union_status: "Equity",
          ethnicity: "Multiple ethnicity / Other",
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
        pronounOptions: [
          {
            id: 1,
            name: "She, Her, Hers",
            value: false,
          },
          {
            id: 2,
            name: "He, Him, His",
            value: false,
          },
          {
            id: 3,
            name: "They, Them, Their",
            value: false,
          },
          {
            id: 4,
            name: "Ze, Zir, Zirs",
            value: false,
          },
          {
            id: 5,
            name: "Ze, Hir, Hirs",
            value: false,
          },
          {
            id: 6,
            name: "Prefer not to share",
            value: false,
          },
        ],
        genderOptions: [
          { id: 1, name: "Male", value: false },
          { id: 2, name: "Female", value: false },
          { id: 3, name: "Transgender", value: false },
          { id: 4, name: "Demigender", value: false },
          { id: 5, name: "Agender", value: false },
          { id: 6, name: "Nonbinary", value: false },
          { id: 7, name: "Genderqueer", value: false },
          { id: 8, name: "Two-Spirit", value: false },
          { id: 10, name: "Prefer not to share", value: false },
        ],
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
      };
    },
    mounted() {
      this.getProfile();
    },
    methods: {
      removeItem(type, item) {
        if (type === "gender") {
          this.otherGender = this.otherGender.filter((g) => g != item);
        }
        if (type === "pronoun") {
          this.otherPronouns = this.otherPronouns.filter((p) => p != item);
        }
      },
      updateText(event, type) {
        if (event.target.value.includes(",")) {
          if (type === "gender") {
            this.otherGender.push(event.target.value.slice(0, -1));
          }
          if (type === "pronoun") {
            this.otherPronouns = [event.target.value.slice(0, -1)];
          }
          event.target.value = "";
        }
      },
      getProfile() {
        axios
          .get("/profile.json")
          .then((response) => {
            if (response.data) {
              this.profile = response.data;
              this.imgFile = response.data.headshot_url;
              if (response.data.pronouns) {
                let data = JSON.parse(response.data.pronouns);
                this.pronounOptions = data;
                data.forEach((pronoun) => {
                  if (pronoun.value) {
                    this.pronounChecked.push(pronoun.id);
                  }
                });
              }
              if (response.data.gender) {
                let data = JSON.parse(response.data.gender);
                this.genderOptions = data;
                data.forEach((gender) => {
                  if (gender.value) {
                    this.genderChecked.push(gender.id);
                  }
                });
              }
              if (response.data.other_gender) {
                this.otherGender = JSON.parse(response.data.other_gender);
              }
              if (response.data.other_pronouns) {
                this.otherPronouns = JSON.parse(response.data.other_pronouns);
              }
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
        data.append("gender", JSON.stringify(this.genderOptions));
        data.append("other_pronouns", JSON.stringify(this.otherPronouns));
        data.append("other_gender", JSON.stringify(this.otherGender));
  
        this.profile.id ? this.updateProfile(data) : this.createProfile(data);
      },
      updateProfile(data) {
        axios.patch(`/profiles/${this.profile.id}.json`, data).then((response) => {
          localStorage.setItem("headshotUrl", response.data.headshot_url);
          this.$store.commit("users/setProfile", response.data);
          if (this.next) {
            this.$router.push("/user/profile/talents");
          } else {
            this.alertMessage();
          }
        });
      },
      createProfile(data) {
        axios.post("/profiles.json", data).then((response) => {
          localStorage.setItem("headshotUrl", response.data.headshot_url);
          this.$store.commit("users/setProfile", response.data);
          if (this.next) {
            this.$router.push("/user/profile/talents");
          } else {
            this.alertMessage();
          }
        });
      },
      alertMessage() {
        this.$store.commit("alerts/setMessage", {
          title: "Successfully Saved!",
          body: "Your Artist Bio has been successfully saved.",
          icon: "success",
          isVisible: true,
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
      updateCheckbox(option, index, type) {
        if (type === "pronouns") {
          this.pronounOptions.map((po) => (po.name === option.name ? (po.value = index) : null));
        }
        if (type === "gender") {
          this.genderOptions.map((go) => (go.name === option.name ? (go.value = index) : null));
        }
      },
    },
  };
  </script>
