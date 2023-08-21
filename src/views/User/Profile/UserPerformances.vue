<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Performances</h2>

        <p class="mt-1 text-base leading-6 text-gray-600">
          We want to hear all about the captivating performances you've been a part of, in the spotlight or behind the
          scenes! From grand stages to intimate venues, your artistic contributions have left a lasting impression.
          Share the exhilarating moments, unforgettable characters, and mesmerizing stories that you've helped bring to
          life. Whether it's theatre, film, dance, or any other productions, we're eager to learn about the stages
          you've graced and the audiences you've moved. Let your experiences take center stage!
        </p>

        <div class="mt-10 flex flex-wrap md:divide-x lg:divide-x">
          <div class="w-full md:w-1/2 p-3">
            <div class="w-full grid">
              <div class="flex-wrap flex">
                <div class="w-full lg:w-1/2 p-2">
                  <label for="title" class="block text-base font-medium leading-6 text-gray-900">Title:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-2">
                  <label for="role" class="block text-base font-medium leading-6 text-gray-900">Role:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="role"
                      id="role"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-2">
                  <label for="theaterCompany" class="block text-base font-medium leading-6 text-gray-900">
                    Theatre Company:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="theaterCompany"
                      id="theaterCompany"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-2">
                  <label for="url" class="block text-base font-medium leading-6 text-gray-900">URL:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="url"
                      id="url"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-2">
                  <label for="director" class="block text-base font-medium leading-6 text-gray-900">Director:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="director"
                      id="director"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-2">
                  <label for="musicalDirector" class="block text-base font-medium leading-6 text-gray-900">
                    Musical Director:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="musicalDirector"
                      id="musicalDirector"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-2">
                  <label for="openingNight" class="block text-base font-medium leading-6 text-gray-900">
                    Opening Night:
                  </label>
                  <div class="mt-2">
                    <VueDatePicker
                      input-class-name="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      v-model="openingNight"
                      :enable-time-picker="false"
                      ref="dpo"
                    >
                      <template #action-buttons>
                        <p
                          class="ml-3 rounded-md bg-indigo-600 p-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline no-underline hover:no-underline"
                          @click="selectOpeningDate"
                        >
                          Select
                        </p>
                      </template>
                    </VueDatePicker>
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-2">
                  <label for="closingNight" class="block text-base font-medium leading-6 text-gray-900">
                    Closing Night:
                  </label>
                  <div class="mt-2">
                    <VueDatePicker
                      input-class-name="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      :enable-time-picker="false"
                      v-model="closingNight"
                      ref="dpc"
                    >
                      <template #action-buttons>
                        <p
                          class="ml-3 rounded-md bg-indigo-600 p-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline no-underline hover:no-underline"
                          @click="selectClosingDate"
                        >
                          Select
                        </p>
                      </template>
                    </VueDatePicker>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full grid flex flex-wrap flex">
              <div class="col-span-full px-2">
                <label for="description" class="block text-base font-medium leading-6 text-gray-900">
                  Description:
                </label>
                <div class="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p class="mt-1 text-sm leading-6 text-gray-600 italic">Tell us a little more about your performance</p>
              </div>
            </div>
            <button class="text-sm float-right text-blue-700 font-bold">+ Add Performance</button>
          </div>
          <div class="w-full md:w-1/2 grid flex flex-wrap justify-center content-center">
            <h4 class="text-gray-400 italic text-center">No Performances Added</h4>
            <img
              src="https://res.cloudinary.com/dzlaaytu7/image/upload/v1688246189/iStock-1438367331_i5itmw.jpg"
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
          href="/user/profile/training"
          class="mr-3 rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 no-underline hover:no-underline"
        >
          Back
        </a>
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      </span>
      <span>
        <button type="submit" class="text-sm font-semibold leading-6 text-gray-900">Save</button>
        <a
          href="/user/profile/awards"
          class="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline no-underline hover:no-underline"
        >
          Next
        </a>
      </span>
    </div>
  </form>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  components: { VueDatePicker },
  data: function () {
    return {
      openingNight: new Date(),
      closingNight: new Date(),
    };
  },
  watch: {},
  computed: {},
  methods: {
    selectClosingDate() {
      this.$refs.dpc.selectDate();
    },
    selectOpeningDate() {
      this.$refs.dpo.selectDate();
    },
  },
};
</script>
