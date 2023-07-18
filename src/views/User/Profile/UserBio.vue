<template>
  <form>
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

        <div class="mt-10 flex flex-wrap">
          <div class="w-full md:w-1/2 p-3">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Headshot:</label>
            <div class="mb-3 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            <label for="pronouns" class="block text-sm font-medium leading-6 text-gray-900 mb-0">
              Pronouns:
              <!-- <span class="ml-auto italic text-gray-400">select all that apply</span> -->
            </label>
            <p class="m-0 text-sm leading-6 italic text-gray-400">Select all that apply</p>
            <RadioButton
              @update-checkbox="updateCheckbox"
              optionsName="Pronouns"
              :options="pronounOptions"
              colNumberClass="grid-cols-2"
            ></RadioButton>
          </div>
          <div class="w-full md:w-1/2 grid flex flex-wrap flex">
            <div class="flex-wrap flex">
              <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
                <label for="gender" class="flex block text-sm font-medium leading-6 text-gray-900 mb-1">
                  Union Status:
                </label>
                <DropdownSelect width="w-50 pr-2" :dropdownData="unionStatus"></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/2 pt-3 px-3 pb-2">
                <label for="gender" class="flex block text-sm font-medium leading-6 text-gray-900">Agency:</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    autocomplete="address-level2"
                    class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
                <label for="gender" class="flex block text-sm font-medium leading-6 text-gray-900">
                  Gender:
                  <span class="ml-auto italic text-gray-400">(always private)</span>
                </label>
                <DropdownSelect width="w-50 pr-2" :dropdownData="gender"></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/2 pt-2 px-3 pb-2">
                <label for="age" class="block text-sm font-medium leading-6 text-gray-900">Age:</label>
                <DropdownSelect width="w-50 pr-2" :dropdownData="age"></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/3 pt-2 px-3 pb-2">
                <label for="height" class="block text-sm font-medium leading-6 text-gray-900 mb-1">Height (ft):</label>
                <DropdownSelect width="w-50 pr-2" :dropdownData="height"></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/3 pt-2 px-3 pb-2">
                <label for="hair-color" class="block text-sm font-medium leading-6 text-gray-900">Hair Color:</label>
                <DropdownSelect width="w-50 pr-2" :dropdownData="hairColor"></DropdownSelect>
              </div>
              <div class="w-full lg:w-1/3 pt-2 px-3 pb-2">
                <label for="eye_color" class="block text-sm font-medium leading-6 text-gray-900">Eye Color:</label>
                <DropdownSelect width="w-50 pr-2" :dropdownData="eyeColor"></DropdownSelect>
              </div>
              <div class="w-full grid flex flex-wrap flex pt-2">
                <div class="col-span-full px-3">
                  <label for="about" class="block text-sm font-medium leading-6 text-gray-900 mb-0">About:</label>
                  <p class="m-0 text-sm leading-6 italic text-gray-400">Write a few sentences about yourself!</p>
                  <div class="mt-2">
                    <textarea
                      id="about"
                      name="about"
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
          class="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline hover:no-underline"
        >
          Next
        </a>
      </span>
    </div>
  </form>
</template>

<script>
import { PhotoIcon } from "@heroicons/vue/24/solid";
import DropdownSelect from "../../../form_elements/DropdownSelect.vue";
import RadioButton from "../../../form_elements/RadioButton.vue";

export default {
  components: { PhotoIcon, RadioButton, DropdownSelect },
  data: function () {
    return {
      unionStatus: {
        selected: "Equity",
        options: ["Equity", "Non Equity", "SAG-AFTRA"],
      },
      height: {
        selected: "5' 6\"",
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
        selected: "Brown",
        options: ["Blue", "Brown", "Green", "Gray", "Hazel", "Amber", "Red", "Other"],
      },
      hairColor: {
        selected: "Brown",
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
        selected: "28-32",
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
        selected: "Female",
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
    };
  },
  watch: {},
  computed: {},
  methods: {
    updateCheckbox(option, index) {
      console.log(option, index);
      this.pronounOptions.data.splice(index, 1, option);
      // console.log(this.pronounOptions.data);
    },
  },
};
</script>
