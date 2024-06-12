<template>
  <div>
    <div class="space-y-12">
      <div class="pb-10">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Theater Professionals</h2>

        <p class="mt-1 text-base leading-6 text-gray-600">
            Find your star! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="loading-spinner-container" v-if="isLoading">
          <div class="loading-spinner m-auto">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-else>
          <div class="grid grid-cols-1 lg:grid-cols-4 justify-center p-4 gap-6 mb-4">
            <div class="col-span-1">
              <label for="equity" class="mr-2 sm:text-sm sm:leading-6 font-bold">Equity</label>
              <select
                id="equity"
                name="equity"
                v-model="equity"
                class="w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option selected :value="null">Any</option>
                <option value="Equity">Equity</option>
                <option value="Non-Equity">Non-Equity</option>
                <option value="AGMA">AGMA</option>
              </select>
            </div>
            <div class="col-span-1 lg:col-span-2">
              <div>
                <label for="search" class="mr-2 sm:text-sm sm:leading-6 font-bold">Search</label>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    v-model="searchTerm"
                    class="block w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search by Name, Email, Talent"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div class="col-span-1">
              <button
                type="button"
                @click="advancedFilters = !advancedFilters"
                class="rounded-md bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-100 mt-9 w-full">
                <i class="fa-solid fa-filter"></i>
                Advanced Filters
              </button>
            </div>
          </div>
          <TransitionRoot :show="advancedFilters">
              <TransitionChild enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div v-if="advancedFilters" class="bg-blue-50 relative py-6 px-1 rounded-md">
                  <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="advancedFilters = false">
                      <span class="sr-only">Close</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div>
                    <div class="grid grid-cols-1 lg:grid-cols-3 justify-center p-4 gap-6 mb-6">
                      <div class="col-span-1">
                        <label for="gender" class="mr-2 sm:text-sm sm:leading-6 font-bold">Gender</label>
                        <select
                          id="gender"
                          name="gender"
                          v-model="gender"
                          class="w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option selected :value="null">Any</option>
                          <option value="Equity">Equity</option>
                          <option value="Non-Equity">Non-Equity</option>
                          <option value="AGMA">AGMA</option>
                        </select>
                      </div>
                      <div class="col-span-1">
                        <label for="ageRange" class="mr-2 sm:text-sm sm:leading-6 font-bold">Age Range</label>
                        <select
                          id="ageRange"
                          name="ageRange"
                          v-model="ageRange"
                          class="w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option selected :value="null">Any</option>
                          <option value="Equity">Equity</option>
                          <option value="Non-Equity">Non-Equity</option>
                          <option value="AGMA">AGMA</option>
                        </select>
                      </div>
                      <div class="col-span-1">
                        <label for="ethnicity" class="mr-2 sm:text-sm sm:leading-6 font-bold">Ethnicity</label>
                        <select
                          id="ethnicity"
                          name="ethnicity"
                          v-model="ethnicity"
                          class="w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option selected :value="null">Any</option>
                          <option value="Equity">Equity</option>
                          <option value="Non-Equity">Non-Equity</option>
                          <option value="AGMA">AGMA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
            </TransitionChild>
          </TransitionRoot>
          <div class="mx-auto max-w-7xl px-6 text-center lg:px-6 mb-12">
            <ul role="list" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
              <li v-for="person in people" :key="person.name" class="rounded-xl px-6 py-6 border-2 border-gray-100">
                  <img class="mx-auto h-48 w-48 rounded-full md:h-40 md:w-40" :src="person.imageUrl" alt="" />
                  <h4 class="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h4>
                  <h5 class="text-base text-gray-400 italic">{{ person.pronouns }}</h5>
                  <p class="text-sm leading-6 text-gray-500 mt-3">{{ person.role }}</p>
                  <ul role="list" class="mt-6 flex justify-center gap-x-6">
                    <li>
                      <div class="text-base underline">Age:</div>
                      <div :href="person.xUrl" class="text-gray-400 text-base">
                        {{ person.ageRange }}
                      </div>
                    </li>
                    <li>
                      <div class="text-base underline">Ethnicity:</div>
                      <div class="text-gray-400 text-base">
                        {{ person.ethnicity }}
                      </div>
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="mt-5 rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">
                    View Profile
                  </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapStores } from 'pinia';
  import { TransitionChild, TransitionRoot } from '@headlessui/vue'
  import { XMarkIcon } from '@heroicons/vue/24/outline'
  
  export default {
    components: {
      TransitionChild, TransitionRoot, XMarkIcon
    },
    data: function () {
      return {
          isLoading: false,
          advancedFilters: false,
          searchTerm: '',
          equity: null,
          ethnicity: null,
          gender: null,
          ageRange: null,
          people: [
            {
              name: 'Leonard Krasner',
              role: 'Senior Stage/Set Designer, Electrician',
              imageUrl:
                'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
              ageRange: '30-45',
              pronouns: 'He/Him',
              ethnicity: 'African American',
            },
            {
              name: 'Lily Gladstone',
              role: 'Actor, Oscar Winner, Boss*ss B*tch',
              imageUrl:
                'https://res.cloudinary.com/dzlaaytu7/image/upload/v1716852248/Lily_xbgokh.png',
              ageRange: '30-40',
              pronouns: 'They/Them',
              ethnicity: 'Native American',
            },
            {
              name: 'Natasha Lyonne',
              role: 'Actor, 5x Emmy Nominated, Girl Boss',
              imageUrl:
                'https://res.cloudinary.com/dzlaaytu7/image/upload/v1716852248/Natasha_zskgzi.png',
              ageRange: '35-45',
              pronouns: 'She/Her, They/Them',
              ethnicity: 'White',
            },
            {
              name: 'Greta Lee',
              role: 'Actor, Director, Writer, Queen',
              imageUrl:
                'https://res.cloudinary.com/dzlaaytu7/image/upload/v1716852248/Gretta_ch9gsr.png',
              ageRange: '25-35',
              pronouns: 'She/Her',
              ethnicity: 'Asian / Pacific Islander',
            },
          ]
      };
    },
    mounted() {
      
    },
  }
</script>