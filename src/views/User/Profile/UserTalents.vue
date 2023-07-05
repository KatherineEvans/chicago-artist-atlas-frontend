<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Talents</h2>

        <p class="mt-1 text-base leading-6 text-gray-600">
          We know you're talented, and we want to celebrate your artistic brilliance. Share your theatrical gifts with
          us and let the spotlight shine on your achievements. Whether you're an actor, director, playwright, or
          involved in any other aspect of the theater world, we invite you to showcase your expertise.
        </p>

        <div class="mt-10 flex flex-wrap">
          <div class="w-full md:w-1/2 p-3">
            <div class="w-full lg:w-1/2 p-3">
              <p class="text-base">I can sing!</p>
            </div>
            <div class="w-full lg:w-1/2 p-3">
              <p class="text-base">I can dance!</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 grid flex flex-wrap">
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

    <div class="mt-10 flex justify-between gap-x-6">
      <span>
        <a
          href="/user/profile/bio"
          class="mr-3 rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 no-underline hover:no-underline"
        >
          Back
        </a>
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      </span>
      <span>
        <button type="submit" class="text-sm font-semibold leading-6 text-gray-900">Save</button>
        <a
          href="/user/profile/training"
          class="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline no-underline hover:no-underline"
        >
          Next
        </a>
      </span>
    </div>
  </form>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
