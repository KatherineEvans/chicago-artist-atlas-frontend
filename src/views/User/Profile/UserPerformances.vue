<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Performances</h2>

        <p class="mt-1 text-sm leading-6 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius eros ex, a lacinia eros sodales nec.
          Donec eget magna hendrerit, rhoncus sem a, tempus ante. Morbi luctus consectetur purus molestie vulputate.
        </p>

        <div class="mt-10 flex flex-wrap">
          <div class="w-full md:w-1/2 p-3">
            <label for="cover-photo" class="block text-base font-medium leading-6 text-gray-900">Headshot</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
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
          </div>
          <div class="w-full md:w-1/2 grid flex flex-wrap flex">
            <div class="flex-wrap flex">
              <div class="w-full lg:w-1/2 p-3">
                <label for="pronouns" class="block text-base font-medium leading-6 text-gray-900">Pronouns:</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="pronouns"
                    id="pronouns"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 p-3">
                <label for="gender" class="block text-base font-medium leading-6 text-gray-900">Gender:</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 p-3">
                <label for="age" class="block text-base font-medium leading-6 text-gray-900">Age:</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="age"
                    id="age"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 p-3">
                <label for="height" class="block text-base font-medium leading-6 text-gray-900">Height:</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="height"
                    id="height"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 p-3">
                <label for="hair-color" class="block text-base font-medium leading-6 text-gray-900">Hair Color:</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="hair-color"
                    id="hair-color"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2 p-3">
                <label for="eye_color" class="block text-base font-medium leading-6 text-gray-900">Eye Color:</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="eye_color"
                    id="eye_color"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full grid flex flex-wrap flex">
            <div class="col-span-full px-3">
              <label for="about" class="block text-base font-medium leading-6 text-gray-900">About</label>
              <div class="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button
        type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
</template>

<script>
import { PhotoIcon } from "@heroicons/vue/24/solid";

export default {
  components: { PhotoIcon },
  data: function () {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
