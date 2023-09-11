<template>
  <form v-on:submit="savePerformance($event)">
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

        <div class="mt-10 flex flex-wrap lg:divide-x">
          <div class="w-full lg:w-1/2 px-3 order-2 lg:order-1 pt-3 lg:pg-0">
            <div class="w-full grid">
              <div class="flex-wrap flex">
                <div class="w-full lg:w-1/2 px-2 pb-2 pt-2 lg:pt-0">
                  <label for="title" class="block text-base font-medium leading-6 text-gray-900">Title:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 px-2 pb-2 pt-2 lg:pt-0">
                  <label for="role" class="block text-base font-medium leading-6 text-gray-900">Role:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="role"
                      id="role"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-2">
                  <label for="theater_group" class="block text-base font-medium leading-6 text-gray-900">
                    Theatre Company:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="theater_group"
                      id="theater_group"
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
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-2">
                  <label for="musical_director" class="block text-base font-medium leading-6 text-gray-900">
                    Musical Director:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="musical_director"
                      id="musical_director"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-2">
                  <label for="running_date_start" class="block text-base font-medium leading-6 text-gray-900">
                    Opening Night:
                  </label>
                  <div class="mt-2">
                    <VueDatePicker
                      input-class-name="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      name="running_date_start"
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
                  <label for="running_date_end" class="block text-base font-medium leading-6 text-gray-900">
                    Closing Night:
                  </label>
                  <div class="mt-2">
                    <VueDatePicker
                      input-class-name="block w-full rounded-md border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      :enable-time-picker="false"
                      v-model="closingNight"
                      name="running_date_end"
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
            <button type="submit" class="text-sm float-right text-blue-700 font-bold">+ Add Performance</button>
          </div>
          <div
            class="w-full lg:w-1/2 grid flex flex-wrap order-1 lg:order-2 border-b lg:border-0 pb-3"
            :class="performances.length > 0 ? '' : 'justify-center content-center'"
          >
            <div class="loading-spinner-container" v-if="isLoading">
              <div class="loading-spinner m-auto">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div v-else>
              <div class="px-4 mx-1" v-if="performances.length > 0">
                <div class="rounded-md border mb-3" v-for="performance in performances" :key="performance.id">
                  <div class="border-b border-gray-900/5 bg-gray-50 rounded-t">
                    <div class="relative">
                      <div class="text-xl font-bold pt-2 mx-3">{{ performance.role }}</div>
                      <div class="absolute right-0 top-0">
                        <button
                          type="button"
                          class="rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          @click="removePerformance(performance.id)"
                        >
                          <span class="sr-only">Close</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div class="ml-3 mb-2">
                      <a v-if="performance.url" :href="performance.url">
                        <div class="text-base font-medium mr-2 text-blue-700 hover:text-blue-700">
                          {{ performance.title }}
                        </div>
                      </a>
                      <div v-else class="text-base font-medium mr-2">{{ performance.title }}</div>
                      <div class="text-base font-normal mr-2 italic w-100">
                        Presented by: {{ performance.theater_group }}
                      </div>
                    </div>
                  </div>
                  <dl
                    v-if="performance.musical_director || performance.director"
                    class="divide-y divide-gray-100 px-3 py-2 text-sm leading-6"
                  >
                    <div v-if="performance.director" class="flex justify-between gap-x-4 py-3">
                      <dt class="text-gray-500 text-sm font-bold">Director</dt>
                      <dd class="text-gray-700 text-base">
                        <div>{{ performance.director }}</div>
                      </dd>
                    </div>
                    <div v-if="performance.musical_director" class="flex justify-between gap-x-4 py-3">
                      <dt class="text-gray-500 text-sm font-bold">Musical Director</dt>
                      <dd class="text-gray-700 text-base">
                        <div>{{ performance.musical_director }}</div>
                      </dd>
                    </div>
                    <div
                      v-if="performance.running_date_start || performance.running_date_end"
                      class="flex justify-between gap-x-4 py-3"
                    >
                      <dt class="text-gray-500 text-sm font-bold">Run Dates</dt>
                      <dd class="text-gray-700 text-base">
                        <div>
                          {{ formatDate(performance.running_date_start) }}
                          <span v-if="performance.running_date_end">
                            - {{ formatDate(performance.running_date_end) }}
                          </span>
                        </div>
                      </dd>
                    </div>
                  </dl>

                  <!-- <div class="ml-3 mb-3">
                    <div class="text-base font-normal">
                      {{ performance.director }}, {{ performance.musical_director }}
                    </div>
                  </div> -->
                  <!-- <div class="text-base font-normal ml-3 mb-3 mt-3" v-if="performance.description">
                    {{ performance.description }}
                  </div> -->
                </div>
              </div>
              <div v-else>
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
      </div>
    </div>

    <div class="mt-10 flex justify-between gap-x-6">
      <span>
        <a
          href="/user/profile/trainings"
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
import axios from "axios";
import moment from "moment";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  components: { VueDatePicker, XMarkIcon },
  data: function () {
    return {
      openingNight: new Date(),
      closingNight: new Date(),
      performances: [],
      isLoading: true,
    };
  },
  computed: {
    formatDate() {
      return (value) => {
        return moment(String(value)).format("ll");
      };
    },
  },
  mounted() {
    this.getPerformances();
  },
  methods: {
    removePerformance(id) {
      axios.delete(`/performances/${id}.json`).then((response) => {
        this.performances = this.performances.filter((p) => p.id !== id);
      });
    },
    savePerformance(event) {
      event.preventDefault();
      let data = new FormData(event.target);
      axios
        .post("/performances.json", data)
        .then((response) => {
          this.performances.push(response.data);
          event.target.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPerformances() {
      axios.get("/performances.json").then((response) => {
        console.log(response.data);
        this.performances = response.data;
        this.isLoading = false;
      });
    },
    selectClosingDate() {
      this.$refs.dpc.selectDate();
    },
    selectOpeningDate() {
      this.$refs.dpo.selectDate();
    },
  },
};
</script>
