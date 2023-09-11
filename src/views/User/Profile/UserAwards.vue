<template>
  <form v-on:submit="saveAward($event)">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Awards</h2>

        <p class="mt-1 text-base leading-6 text-gray-600">
          We believe in celebrating achievements, and we know you've earned your fair share of accolades. It's time to
          showcase your well-deserved recognition! Share the awards you've won, whether they're prestigious honors,
          industry accolades, or local acknowledgments. We're excited to hear about the moments that made you feel proud
          and accomplished.
        </p>

        <div class="mt-10 flex flex-wrap md:divide-x lg:divide-x">
          <div class="w-full lg:w-1/2 px-3 order-2 lg:order-1 pt-3 lg:pt-0">
            <div class="w-full grid flex flex-wrap">
              <div class="flex-wrap flex">
                <div class="w-full lg:w-1/2 p-3">
                  <label for="institution" class="block text-base font-medium leading-6 text-gray-900">
                    Award Name:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="institution"
                      id="institution"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-3">
                  <label for="degree" class="block text-base font-medium leading-6 text-gray-900">Year Received:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="degree"
                      id="degree"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-3">
                  <label for="city" class="block text-base font-medium leading-6 text-gray-900">
                    Organization / Production:
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div class="w-full lg:w-1/2 p-3">
                  <label for="state" class="block text-base font-medium leading-6 text-gray-900">Website:</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      autocomplete="address-level2"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full grid flex flex-wrap flex">
              <div class="col-span-full px-3">
                <label for="about" class="block text-base font-medium leading-6 text-gray-900">Note:</label>
                <div class="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p class="mt-1 text-sm leading-6 text-gray-600 italic">More to tell? Go for it!</p>
              </div>
            </div>
            <button type="submit" class="text-sm float-right text-blue-700 font-bold">+ Add Award</button>
          </div>
          <div
            class="w-full lg:w-1/2 grid flex flex-wrap order-1 lg:order-2 border-b lg:border-0 pb-3"
            :class="awards.length > 0 ? '' : 'justify-center content-center'"
          >
            <div class="loading-spinner-container" v-if="isLoading">
              <div class="loading-spinner m-auto">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div v-else>
              <div v-if="awards.length > 0" class="px-4 mx-1">
                <div class="rounded-md p-2 border mb-3" v-for="award in awards" :key="award.id">
                  <div class="relative">
                    <div class="text-lg font-bold pt-2 mx-3">
                      {{ award.name }}
                      <span v-if="award.year">- {{ award.year }}</span>
                    </div>
                    <div class="absolute right-0 top-0">
                      <button
                        type="button"
                        class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        @click="removeAward(award.id)"
                      >
                        <span class="sr-only">Close</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div class="flex ml-3" :class="award.note ? '' : 'mb-3'">
                    <div class="text-base font-medium mr-2 italic">{{ award.organization }}</div>
                  </div>
                  <div class="text-base font-normal ml-3 mb-3 mt-3" v-if="award.note">{{ award.note }}</div>
                </div>
              </div>
              <div v-else>
                <h4 class="text-gray-400 italic text-center">No Awards Added</h4>
                <img
                  src="https://res.cloudinary.com/dzlaaytu7/image/upload/v1688505115/iStock-1490723483_jjdmdb.jpg"
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
          href="/user/profile/performances"
          class="mr-3 rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 no-underline hover:no-underline"
        >
          Back
        </a>
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      </span>
      <span>
        <button
          class="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline no-underline hover:no-underline"
        >
          Save
        </button>
      </span>
    </div>
  </form>
</template>

<script>
import { XMarkIcon } from "@heroicons/vue/24/outline";
import axios from "axios";

export default {
  components: { XMarkIcon },
  data: function () {
    return {
      awards: [],
      isLoading: true,
    };
  },
  mounted() {
    this.getAwards();
  },
  methods: {
    removeAward(id) {
      axios.delete(`/awards/${id}.json`).then((response) => {
        this.awards = this.awards.filter((a) => a.id !== id);
      });
    },
    saveAward(event) {
      event.preventDefault();
      let data = new FormData(event.target);
      axios
        .post("/awards.json", data)
        .then((response) => {
          this.awards.push(response.data);
          event.target.reset();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAwards() {
      axios
        .get("/awards.json")
        .then((response) => {
          this.awards = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("error loading profile", error.response.data.status.message);
        });
    },
  },
};
</script>
