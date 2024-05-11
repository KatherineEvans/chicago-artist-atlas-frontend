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
        <div v-if="!paginatedTheaters.length" class="text-center mt-6 mb-12">
          <img class="director-chair" src="../../assets/director-chair.jpg">
          <p class="text-xl font-bold mb-2">
            Whoops, nothing to see here...
          </p>
          <p class="text-xl">
            It looks like your search returned zero results, try something different!
          </p>
        </div>
        <!-- AUDITIONS -->
        <div v-else>
          <div class="row lg:pl-4">
            <AuditionCard
              v-for="audition in paginatedTheaters"
              v-bind:key="audition.id"
              :audition="audition"
              :savedRoles="savedRoles"
              :currentAuditionId="{ currentAuditionId }"
              @expand-audition="expandAudition(audition)"
              @add-to-saved-roles="addToSavedRoles"
            />
          </div>
          <nav class="flex items-center justify-center sm:px-4 px-0">
            <div class="-mt-px mr-1 lg:mr-3">
              <div
                :class="current == 1 ? 'hidden' : ''"
                @click="previous()"
                class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                <ArrowLongLeftIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                Previous
              </div>
            </div>
            <div class="md:-mt-px md:flex">
              <div
                @click="scroll()"
                class="border-indigo-500 text-indigo-600 inline-flex items-center border-t-2 px-2 lg:px-4 pt-4 text-sm font-medium"
              >
                {{ current }}
              </div>
              <div
                v-if="second"
                @click="secondLink()"
                class="inline-flex items-center border-t-2 px-2 lg:px-4 pt-4 text-sm font-medium"
              >
                {{ second }}
              </div>
              <div
                v-if="third"
                @click="thirdLink()"
                class="inline-flex items-center border-t-2 px-2 lg:px-4 pt-4 text-sm font-medium"
              >
                {{ third }}
              </div>
            </div>
            <div class="-mt-px ml-1 lg:ml-3">
              <div
                href="#"
                @click="next()"
                :class="current == last ? 'hidden' : ''"
                class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              >
                Next
                <ArrowLongRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import AuditionCard from "./AuditionCard.vue";
import { MagnifyingGlassIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid";
import DropdownSelect from "../../form_elements/DropdownSelect.vue";

export default {
  components: {
    AuditionCard,
    MagnifyingGlassIcon,
    DropdownSelect,
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
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
      equity: "Any",
      unionStatuses: ["Any", "Equity", "Non-Equity", "SAG-AFTRA"]
    };
  },
  watch: {},
  mounted: function () {
    this.scroll();
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
      return  Math.ceil(this.filteredAuditions.length / 5);
    },
    filteredAuditions() {
      let auditions = [...this.auditions];
      //filter theaters
      if (this.equity) {
        if(this.equity != "Any") {
          auditions = auditions.filter((audition) => audition.union_status && audition.union_status == this.equity);
        }
      }

      if (this.searchTerm) {
        auditions = auditions.filter(
          (audition) => (audition.name_of_show && audition.name_of_show.toLowerCase().includes(this.searchTerm.toLowerCase())) || (audition.name_of_company && audition.name_of_company.toLowerCase().includes(this.searchTerm.toLowerCase()))
        );
      }

      //  Pull/show correct number of theaters
      return auditions;
    }, 
    paginatedTheaters() {
      return this.filteredAuditions.slice((this.current - 1) * 5, this.current * 5);
    }
  },
  methods: {
    scroll(){
      window.scrollTo(0, 0);
    },
    secondLink() {
      this.current = this.second;
      this.scroll();
    },
    thirdLink() {
      this.current = this.third;
      this.scroll();
    },
    previous() {
      this.current -= 1;
      window.scrollTo(0, 0)
    },
    next() {
      this.current += 1;
      this.scroll();
    },
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
<style>
  .director-chair {
    max-height: 200px;
    margin: auto;
  }
</style>
