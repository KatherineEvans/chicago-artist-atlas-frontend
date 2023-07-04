<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Trainings</h2>

        <p class="mt-1 text-base leading-6 text-gray-600">
          You've dedicated countless hours to honing your craft, and now it's time to showcase your hard-earned skills.
          We're eager to learn about the training that has shaped you as an artist and helped you reach new heights.
          Share the workshops, classes, mentors, and experiences that have influenced your artistic journey. This is
          your moment to shine!
        </p>

        <div class="mt-10 flex flex-wrap md:divide-x lg:divide-x">
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
          <div class="w-full md:w-1/2 grid flex flex-wrap">
            <img
              src="https://res.cloudinary.com/dzlaaytu7/image/upload/v1688246190/iStock-1449282058_1_udwnjo.jpg"
              class="w-100 mx-auto mt-2"
              alt="Calender Under Construction"
              style="max-width: 400px"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 flex justify-between gap-x-6">
      <span>
        <a
          href="/user/profile/talents"
          class="mr-3 rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 no-underline hover:no-underline"
        >
          Back
        </a>
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      </span>
      <span>
        <button type="submit" class="text-sm font-semibold leading-6 text-gray-900">Save</button>
        <a
          href="/user/profile/performances"
          class="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline no-underline hover:no-underline"
        >
          Next
        </a>
      </span>
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
