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
                  class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="w-full grid flex flex-wrap flex pt-2">
              <div class="col-span-full">
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
              <div class="w-full lg:w-1/4 pt-2 px-3 pb-2">
                <label for="age_low" class="block text-sm font-medium leading-6 text-gray-900">Age Low:</label>
                <DropdownSelect
                  id="age_low"
                  @set-selected="age.selected = $event"
                  :selectedData="profile.age_low"
                  width="w-50 pr-2"
                  :dropdownData="age"
                  name="age_low"
                ></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/4 pt-2 px-3 pb-2">
                <label for="age_high" class="block text-sm font-medium leading-6 text-gray-900">Age High:</label>
                <DropdownSelect
                  id="age_high"
                  @set-selected="age.selected = $event"
                  :selectedData="profile.age_high"
                  width="w-50 pr-2"
                  :dropdownData="age"
                  name="age_high"
                ></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
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
              <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
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
              <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
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
              <div class="w-full pl-1 px-3 mt-2">
                <label for="gender" class="block text-sm font-medium leading-6 text-gray-900 mb-0 flex justify-between">
                  <span>Gender:</span>
                  <span class="ml-auto italic text-gray-400">select all that apply</span>
                </label>
                <RadioButton
                  class="pl-1"
                  id="gender"
                  typeName="gender"
                  @update-checkbox="updateCheckbox"
                  optionsName="Gender"
                  :options="genderOptions"
                  :checkedArray="genderChecked"
                  colNumberClass="grid-cols-2"
                ></RadioButton>
                <div class="my-3">
                  <span
                    v-for="gender in otherGender"
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
                <label for="otherGenders" class="flex block text-sm font-medium leading-6 text-gray-900 mb-0 mt-3">
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
              <div class="w-full pl-1 px-3 mt-2">
                <label
                  for="pronouns"
                  class="block text-sm font-medium leading-6 text-gray-900 mb-0 flex justify-between"
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
                  :options="pronounOptions"
                  colNumberClass="grid-cols-2"
                  :checkedArray="pronounChecked"
                ></RadioButton>
                <div class="my-3">
                  <span
                    v-for="pronoun in otherPronouns"
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
                <label for="otherPronouns" class="flex block text-sm font-medium leading-6 text-gray-900 mb-0 mt-3">
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
        </div>
      </div>
    </div>

    <div class="mt-10 flex items-center justify-end gap-x-6">
      <span>
        <button type="submit" @click="next = false" class="px-3 py-2 text-sm font-semibold underline">Save</button>
        <button
          type="submit"
          @click="next = true"
          class="ml-3 rounded-md bg-indigo-600 pl-2 pr-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline hover:no-underline"
        >
          Save and Next
        </button>
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
  components: { PhotoIcon, DropdownSelect, RadioButton },
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
        { id: 10, name: "No Response", value: false },
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
            console.log(response.data);
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
              console.log(this.genderChecked);
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
        console.log(response);
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
        console.log(response);
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
        console.log(this.pronounOptions);
      }
      if (type === "gender") {
        this.genderOptions.map((go) => (go.name === option.name ? (go.value = index) : null));
        console.log(this.genderOptions);
      }
    },
  },
};
</script>
