<template>
  <div>
    <div class="bg-blue-50 px-10 py-8 mx-auto text-center">
      <p class="text-2xl md:text-3xl font-bold mb-2">Auditions</p>
      <p class="text-lg max-w-3xl mx-auto">
        Atlas strives to deliver accurate, timely, and transparent audition information for Chicago and the greater
        Chicagoland area. Theatres and creative who would like to post an audition, stay tuned for our Audition builder!
      </p>
    </div>
    <div class="px-2 md:px-6 lg:px-10">
      <!-- SEARCH / FILTER BAR -->
      <div class="row my-2 py-2 no-gutters px-2 md:px-6 lg:px-10">
        <div class="grid grid-cols-12 justify-end px-4 lg:gap-6">
          <div class="col-span-12 lg:col-span-9 ml-auto mt-auto">
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="flex block text-base font-medium leading-6 text-gray-900 mb-1">Search:</label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  v-model="searchTerm"
                  class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Production or Company"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-3 pt-3 lg:pt-0">
            <label for="unionStatus" class="flex block text-base font-medium leading-6 text-gray-900 mb-1">
              Union Status:
            </label>
            <DropdownSelect
              id="unionStatus"
              @set-selected="equity = $event"
              width="w-50 pr-2"
              :selectedData="equity"
              :dropdownData="unionStatuses"
              name="union_status"
            ></DropdownSelect>
          </div>
        </div>
      </div>
      <div class="row my-2 py-2 no-gutters h-screen" v-if="isLoading">
        <div class="loading-spinner-container">
          <div class="loading-spinner m-auto">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div v-else class="row my-2 py-2 no-gutters px-2 md:px-6 lg:px-10">
        <!-- AUDITIONS -->
        <div class="row lg:pl-4">
          <AuditionCard
            v-for="audition in filteredAuditions"
            v-bind:key="audition.id"
            :audition="audition"
            :savedRoles="savedRoles"
            :currentAuditionId="{ currentAuditionId }"
            @expand-audition="expandAudition(audition)"
            @add-to-saved-roles="addToSavedRoles"
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
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import DropdownSelect from "../../form_elements/DropdownSelect.vue";

export default {
  components: {
    AuditionCard,
    MagnifyingGlassIcon,
    DropdownSelect,
  },
  data: function () {
    return {
      first: 1,
      current: 1,
      title: "Audition Board",
      searchTerm: null,
      auditions: [],
      currentAuditionId: null,
      heart: false,
      isLoading: true,
      savedRoles: [],
      equity: null,
      unionStatuses: [null, "Equity", "Non Equity", "SAG-AFTRA"]
    };
  },
  watch: {},
  mounted: function () {
    this.getAuditions("/auditions");
    this.getUserAuditions();
  },
  computed: {
    second() {
      if (this.current >= this.last) {
        return null;
      }
      return this.current + 1;
    },
    third() {
      if (this.current + 1 >= this.last) {
        return null;
      }
      return this.current + 2;
    },
    last() {
      return  Math.ceil(this.filteredAuditions.length / 10);
    },
    filteredAuditions() {
      let auditions = [...this.auditions];

      //filter theaters
      if (this.equity) {
        // auditions = auditions.filter((audition) => audition.union_status && audition.union_status == state.equity);
      }

      if (this.searchTerm) {
        // auditions = auditions.filter(
        //   (audition) => audition.name && audition.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        // );
      }

      //  Pull/show correct number of theaters
      let paginatedAuditions = auditions.slice((this.current - 1) * 10, this.current * 10);

      return paginatedAuditions;
    }
  },
  methods: {
    addToSavedRoles(id) {
      this.savedRoles.push(id);
    },
    getUserAuditions() {
      axios.get("/user_roles.json?type=pluck").then((response) => {
        this.savedRoles = response.data;
      });
    },
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
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
