<template>
  <div class="overflow-hidden bg-white shadow-md sm:rounded-lg p-0 mb-8">
    <div class="bg-blue-50">
      <div class="px-4 py-6 sm:px-6">
        <h3 class="text-base font-semibold leading-7 text-gray-900">Production</h3>
        <p class="m-0 max-w-2xl text-2xl leading-6 text-gray-500">{{ audition.name_of_show }}</p>
      </div>
    </div>
    <div class="px-2">
      <dl class="grid grid-cols-1 sm:grid-cols-3">
        <div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Company</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.name_of_company }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Pay Scale</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.pay_scale }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Union Status</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.union_status }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Director</dt>
          <dd v-if="audition.director" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ audition.director }}
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <i class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Musical Director</dt>
          <dd v-if="audition.musical_director" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ audition.musical_director }}
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <i class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Choreographer</dt>
          <dd v-if="audition.choreographer" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ audition.choreographer }}
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <i class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Rehearsal Start Date</dt>
          <dd v-if="audition.rehearsal_startdate" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ formatDate(audition.rehearsal_startdate) }}
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Previews Start Date</dt>
          <dd v-if="audition.previews_startdate" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ formatDate(audition.previews_startdate) }}
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <i class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-4 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Opening Night</dt>
          <dd v-if="audition.show_startdate" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ formatDate(audition.show_startdate) }}
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <i class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div v-if="audition.show_description" class="border-t border-gray-100 px-4 py-4 sm:col-span-3 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Description</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ audition.show_description }}
          </dd>
        </div>

        <div class="hide border-t border-gray-100 px-4 py-4 sm:col-span-3 sm:px-0" :class="'audition' + audition.id">
          <dt class="text-sm leading-6 text-gray-900">Cast Breakdown</dt>
          <div class="mt-2 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div
              v-for="character in audition.characters"
              :key="character.id"
              class="space-x-3 rounded-lg border border-gray-300 bg-white p-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <div class="min-w-0 flex-1">
                <div class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-base font-bold text-gray-900">{{ character.name }}</p>
                  <p class="truncate text-small text-gray-500">
                    <span class="font-medium">Gender:</span>
                    {{ character.gender }} /
                    <span class="font-medium">Age:</span>
                    {{ character.age }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="grid grid-cols-1 sm:grid-cols-2 mt-1">
            <div v-for="character in audition.characters" v-bind:key="character.id" class="sm:col-span-1">
              <div class="card mx-3 mb-3">
                <div
                  class="character-card card-header collapsed"
                  :id="`heading-${character.id}`"
                  data-toggle="collapse"
                  :data-target="`#collapse-${character.id}`"
                  aria-expanded="true"
                  :aria-controls="`#collapse-${character.id}`"
                >
                  <div class="character-title mb-0">
                    <div class="mr-auto">
                      <strong>{{ character.name }}</strong>
                      -
                      {{ character.age }}
                    </div>
                    <div class="ml-auto">Gender: {{ character.gender }}</div>
                    <div>
                      <i class="ml-3 fa-solid fa-caret-down"></i>
                    </div>
                  </div>
                </div>

                <div :id="`collapse-${character.id}`" class="collapse" :aria-labelledby="`heading-${character.id}`">
                  <div class="card-body">
                    <div class="row mb-2">
                      <div class="col-10">
                        <p>
                          <span class="strong">Character Description:</span>
                          {{ character.description }}
                        </p>
                      </div>
                      <div class="col-2">
                        <i @click="heart = false" class="fa-solid fa-heart fa-lg" v-if="heart"></i>
                        <i @click="heart = true" class="fa-regular fa-heart fa-lg" v-else></i>
                      </div>
                    </div>
                    <div class="row mb-2">
                      <p>
                        <span class="strong">Character Skills:</span>
                        {{ character.skills }}
                      </p>
                    </div>
                    <div class="row mb-2">
                      <p>
                        <span class="strong">Character Warnings:</span>
                        {{ character.warnings }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="hide border-t border-gray-100 px-4 py-4 sm:col-span-3 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Show Warnings</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.show_warnings }}</dd>
        </div>
        <div class="hide border-t border-gray-100 px-4 py-4 sm:col-span-3 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Additional Notes</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.additional_notes }}</dd>
        </div>

        <div class="border-t border-gray-100 px-4 py-4 sm:col-span-3 sm:px-0">
          <div class="d-flex flex-row-reverse">
            <button class="btn btn-link pt-0" style="text-decoration: none" @click="$emit('expandAudition', audition)">
              More Details
            </button>
            <button class="btn btn-link pt-0" style="text-decoration: none">Save Audition</button>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  props: ["audition"],
  data: function () {
    return {
      currentAuditionId: null,
      heart: false,
    };
  },
  computed: {
    formatDate() {
      return (value) => {
        return moment(String(value)).format("MM/DD/YYYY");
      };
    },
  },
  methods: {
    addToFavorites() {},
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
