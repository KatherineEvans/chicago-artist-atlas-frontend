<template>
  <div class="container-fluid">
    <div class="row bg-blue-50 py-3 px-4 text-center">
      <div class="col-8 m-auto my-3">
        <div class="text-3xl font-bold mb-3">Auditions</div>
        <p class="text-lg">
          ATLAS strives to deliver accurate, timely, and transparent audition information for Chicago and the greater
          Chicagoland area. Theatres and creative who would like to post an audition, please fill out the form here!
        </p>
      </div>
    </div>
    <div class="container main">
      <div class="row my-2 py-2 no-gutters">
        <!-- SEARCH / FILTER BAR -->
        <div class="d-flex flex-row-reverse p-4">
          <div>
            <label for="union-status" class="mr-2 sm:text-sm sm:leading-6">Union Status:</label>
            <Menu id="union-status" as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Any
                  <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <button
                        class="w-100 text-left"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2']"
                      >
                        Non-Equity
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        class="w-100 text-left"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2']"
                      >
                        Equity
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <div class="flex flex-1 items-center justify-center pr-3 lg:ml-6 lg:justify-end">
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="sr-only">Search Production or Company</label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Search Production or Company"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- AUDITIONS -->
        <div class="row my-2 py-2 pl-4">
          <AuditionCard
            v-for="audition in auditions"
            v-bind:key="audition.id"
            :audition="audition"
            :currentAuditionId="{ currentAuditionId }"
            @expand-audition="expandAudition(audition)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import AuditionCard from "./AuditionCard.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

export default {
  components: {
    AuditionCard,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
    MagnifyingGlassIcon,
  },
  data: function () {
    return {
      title: "Audition Board",
      auditions: [],
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
  watch: {},
  created: function () {
    this.getAuditions("/auditions");
  },
  methods: {
    expandAudition(audition) {
      if (this.currentAuditionId == audition.id) {
        document.querySelectorAll(`.audition` + audition.id).forEach((item) => {
          item.classList.add("hide");
        });
        this.currentAuditionId = null;
      } else {
        if (this.currentAuditionId != null && this.currentAuditionId != audition.id) {
          document.querySelectorAll(`.audition` + this.currentAuditionId).forEach((item) => {
            item.classList.add("hide");
          });
          this.currentAuditionId = audition.id;
          "audition" + audition.id;
          document.querySelectorAll(`.audition` + audition.id).forEach((item) => {
            item.classList.remove("hide");
          });
        } else {
          this.currentAuditionId = audition.id;
          "audition" + audition.id;
          document.querySelectorAll(`.audition` + audition.id).forEach((item) => {
            item.classList.remove("hide");
          });
        }
      }
    },
    getAuditions(link) {
      axios
        .get(link)
        .then((response) => {
          this.auditions = response.data;
          console.log(this.auditions);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
