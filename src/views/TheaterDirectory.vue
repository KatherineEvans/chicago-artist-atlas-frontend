<template>
  <div>
    <div class="bg-blue-50 px-10 py-8 mx-auto text-center">
      <p class="text-2xl md:text-3xl font-bold mb-2">
        {{ title }}
      </p>
      <p class="text-lg max-w-3xl mx-auto">
        Atlas provides the most comprehensive directory of theatres, agencies, and classes in the city of Chicago. Use
        this tool to explore the vast layout of the who, what, and where that makes up Chicago’s performing arts scene.
      </p>
    </div>
    <!-- <div class="row bg-blue-50 py-3 px-4 text-center">
      <div class="col-8 m-auto my-3">
        <h2 class="text-3xl font-bold">{{ title }}</h2>
        <p style="font-size: 16px">
          Atlas provides the most comprehensive directory of theatres, agencies, and classes in the city of Chicago. Use
          this tool to explore the vast layout of the who, what, and where that makes up Chicago’s performing arts
          scene.
        </p>
      </div>
    </div> -->
    <!-- SEARCH / FILTER BAR -->
    <div class="px-2 md:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 justify-center p-4 gap-6 mb-6">
        <div class="col-span-1">
          <label for="equity" class="mr-2 sm:text-sm sm:leading-6 font-bold">Equity</label>
          <select
            id="equity"
            name="equity"
            v-model="theaterStore.equity"
            class="w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option selected :value="null">Any</option>
            <option value="Equity">Equity</option>
            <option value="Non-Equity">Non-Equity</option>
            <option value="AGMA">AGMA</option>
          </select>
        </div>
        <div class="col-span-1">
          <label for="seasonType" class="mr-2 sm:text-sm sm:leading-6 font-bold">Season Type</label>
          <select
            id="seasonType"
            name="seasonType"
            v-model="theaterStore.seasonType"
            class="w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option :value="null" selected>Any</option>
            <option v-for="season in theaterStore.seasonTypes" :key="season" :value="season">{{ season }}</option>
          </select>
        </div>
        <div class="col-span-1 lg:col-span-2">
          <div>
            <label for="search" class="mr-2 sm:text-sm sm:leading-6 font-bold">Search by Theater</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                v-model="theaterStore.searchTerm"
                class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search Production or Company"
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- <h1 class="text-center my-3">{{ title }}</h1> -->
      <div class="my-4">
        <div class="loading-spinner-container" v-if="theaterStore.isLoading">
          <div class="loading-spinner m-auto">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-else>
          <div v-if="theaterStore.noTheatersToDisplay" class="text-center mt-6 mb-12">
            <img class="empty-map" src="../assets/empty-map.jpg">
            <p class="text-xl font-bold mb-2">
              Whoops, nothing to see here...
            </p>
            <p class="text-xl">
              It looks like your search terms returned zero results, try a different combination of search terms!
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 sm:px-4" v-else>
            <div class="col-span-1">
              <div
                v-for="theater in theaterStore.formattedTheaters"
                v-bind:key="theater.id"
                class="border rounded border-grey-400 text-left mb-3 p-3 hover:bg-gray-100 hover:cursor-pointer"
                :class="theater.id === theaterStore.currentTheater.id ? activeClass : ''"
              >
                <div v-on:click="setCurrentTheater(theater)">
                  <div class="mb-2">
                    <h5 class="font-bold text-base inline">{{ theater.name }}</h5>
                    <a target="_blank" :href="theater.website" class="hover-text float-right card-link inline">
                      <i class="fa-solid fa-square-up-right"></i>
                      <span class="tooltip-text" id="top">Visit Site</span>
                    </a>
                  </div>
                  <p v-if="theater?.address?.full_address" class="card-subtitle mb-2 text-muted">
                    {{ theater.address.full_address }}
                  </p>
                  <p v-else><em>Various Addresses</em></p>
                  <div class="row">
                    <div class="col">
                      <i class="fa-solid fa-phone mr-2"></i>
                      <span v-if="theater.phone">{{ theater.phone }}</span>
                      <span v-else>-</span>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <i v-if="theater.contact_email" class="fa-solid fa-envelope mr-2"></i>
                      <i v-if="theater.contact_form" class="fa-solid fa-message mr-2"></i>
                      <span v-if="theater.contact_email">
                        <a :href="'mailto:' + theater.contact_email" class="break-all">{{ theater.contact_email }}</a>
                      </span>
                      <span v-if="theater.contact_form" target="_blank">
                        <a :href="theater.contact_form">Contact Form</a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <nav class="flex items-center justify-between sm:px-4 px-0">
                <div class="-mt-px flex w-0 flex-1">
                  <div
                    :class="theaterStore.current == 1 ? 'hidden' : ''"
                    @click="theaterStore.current -= 1"
                    class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    <ArrowLongLeftIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                  </div>
                </div>
                <div class="md:-mt-px md:flex">
                  <div
                    @click="theaterStore.current = startingPage"
                    class="border-indigo-500 text-indigo-600 inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
                  >
                    {{ theaterStore.current }}
                  </div>
                  <div
                    v-if="theaterStore.second"
                    @click="theaterStore.current = theaterStore.second"
                    class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
                  >
                    {{ theaterStore.second }}
                  </div>
                  <div
                    v-if="theaterStore.third"
                    @click="theaterStore.current = theaterStore.third"
                    class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
                  >
                    {{ theaterStore.third }}
                  </div>
                </div>
                <div class="-mt-px flex w-0 flex-1 justify-end">
                  <div
                    href="#"
                    @click="theaterStore.current += 1"
                    :class="theaterStore.current == theaterStore.last ? 'hidden' : ''"
                    class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Next
                    <ArrowLongRightIcon class="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </nav>
            </div>
            <div class="col-span-1 md:col-span-2 px-2">
              <div id="map" class="mx-auto mb-4 rounded-md"></div>
              <div class="mx-auto theater-highlight">
                <div class="border rounded-md">
                  <div class="bg-blue-950 text-white py-2 px-4 rounded-t">
                    <h4 class="font-bold text-xl">{{ theaterStore.currentTheater?.name }}</h4>
                    <h6 v-if="theaterStore.currentTheater?.address?.full_address" class="text-lg">
                      {{ theaterStore.currentTheater?.address?.full_address }}
                    </h6>
                    <h6 v-else class="text-lg"><em>Various Addresses</em></h6>
                  </div>
                  <div class="py-3 px-4 text-base">
                    <p v-if="theaterStore.currentTheater.mission" class="card-text mb-3">
                      {{ theaterStore.currentTheater.mission }}
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 justify-center pb-3 gap-6">
                      <div class="col-span-1">
                        <img
                          v-if="theaterStore.currentTheater.image_url"
                          :src="theaterStore.currentTheater.image_url"
                          :alt="theaterStore.currentTheater.name"
                          class="theater-highlight-img"
                        />
                        <img
                          v-else
                          class="theater-highlight-img"
                          src="https://www.monaco-chicago.com/images/1700-960/istock-155341582-73776d3d.jpg"
                        />
                      </div>
                      <div class="col-span-1 md:col-span-2">
                        <div>
                          <div class="mb-2">
                            <p class="mb-0">
                              <strong>Union Status:</strong>
                              {{ theaterStore.currentTheater?.union_status }}
                            </p>
                          </div>
                          <div class="mb-2">
                            <p>
                              <strong>Season Type:</strong>
                              {{ theaterStore.currentTheater?.season_type }}
                            </p>
                          </div>
                          <div class="mb-2">
                            <i v-if="theaterStore.currentTheater.phone" class="fa-solid fa-phone mr-2"></i>
                            <span v-if="theaterStore.currentTheater.phone">{{ theaterStore.currentTheater.phone }}</span>
                          </div>
                          <div class="row">
                            <div class="col">
                              <i v-if="theaterStore.currentTheater.contact_email" class="fa-solid fa-envelope mr-2"></i>
                              <i v-if="theaterStore.currentTheater.contact_form" class="fa-solid fa-message mr-2"></i>
                              <span v-if="theaterStore.currentTheater.contact_email">
                                <a :href="'mailto:' + theaterStore.currentTheater.contact_email" class="break-all">{{ theaterStore.currentTheater.contact_email }}</a>
                              </span>
                              <span v-if="theaterStore.currentTheater.contact_form" target="_blank">
                                <a :href="theaterStore.currentTheater.contact_form">Contact Form</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useTheaterStore } from '../stores/useTheaterStore.js';
import { MagnifyingGlassIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid";

import axios from "axios";

export default {
  components: {
    MagnifyingGlassIcon,
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
  },
  data: function () {
    return {
      map: null,
      title: 'Theater Directory',
      activeClass: "active",
    }
  },
  computed: {
    ...mapStores(useTheaterStore),
  },
  created: function () {
    this.theaterStore.getTheaters();
  },
  watch: {
    'theaterStore.formattedTheaters': {
      deep: true,
      handler(newVal) {
        if (newVal.length > 0) {
          this.theaterStore.noTheatersToDisplay = false;
          this.$nextTick(() => {
            this.setMap()
          });
        }
      }
    },
    'theaterStore.seasonType': function() {
      this.theaterStore.current = 1;
    },
    'theaterStore.equity': function() {
      this.theaterStore.current = 1;
    },
    'theaterStore.searchTerm': function() {
      this.theaterStore.current = 1;
    }
  },
  methods: {
    flyToTheater(coordinates) {
      this.map.flyTo({
        center: coordinates,
        zoom: 9,
      });
    },
    createPopUp(coordinates, theaterInfo) {
      const popUps = document.getElementsByClassName("mapboxgl-popup");
      /** Check if there is already a popup on the map and if so, remove it */
      if (popUps[0]) popUps[0].remove();

      const popup = new mapboxgl.Popup({ closeOnClick: true })
        .setLngLat(coordinates)
        .setHTML(theaterInfo)
        .addTo(this.map);
    },
    setMap() {
      let zoom = 12;
      let center = this.theaterStore.formattedTheaters.find((theater) => !!theater?.address?.lat);

      if (!center) {
        center = {
          address: {
            lat: '41.8781',
            lng: '-87.6298'
          }
        }
        zoom = 9;
      }

      mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [center.address.lng, center.address.lat],
        zoom: zoom,
      });

      for (let i = 0; i < this.theaterStore.formattedTheaters.length; i++) {
        if (this.theaterStore.formattedTheaters[i]?.address?.lng) {
          let tooltipHTML = `<h2 class="text-base font-bold mb-2">${this.theaterStore.formattedTheaters[i].name}</h2><h4 class="text-sm">${this.theaterStore.formattedTheaters[i].address.full_address}</h4><div class="text-sm">${this.theaterStore.formattedTheaters[i].phone}</div>`;
          let popup = new mapboxgl.Popup({ offset: 25 }).setHTML(tooltipHTML);
          let marker = new mapboxgl.Marker()
            .setLngLat([this.theaterStore.formattedTheaters[i].address.lng, this.theaterStore.formattedTheaters[i].address.lat])
            .setPopup(popup)
            .addTo(this.map);
        }
      }
      this.theaterStore.isLoading = false;
    },
    setCurrentTheater(theater) {
      this.theaterStore.currentTheater = theater;
      if (theater?.address?.lat && theater?.address?.lng) {
        let theaterInfo = `<h2 class="text-base font-bold mb-2">${theater.name}</h2><h4 class="text-sm">${theater.address.full_address}</h4><div class="text-sm">${theater.phone}</div>`;
        let coordinates = [theater.address.lng, theater.address.lat];
        this.flyToTheater(coordinates);
        this.createPopUp(coordinates, theaterInfo);
      }
    },
  },
};
</script>

<style scoped>
a {
  color: rgb(37 99 235);
}
#map {
  width: 100%;
  height: 500px;
}
.empty-map {
  max-height: 200px;
  margin: auto;
}
.card-link {
  font-size: 18px;
  color: #0b0b35;
}
.theater-highlight-img {
  width: 100%;
  /* max-width: 150px; */
  object-fit: cover;
}
.tooltip-text {
  visibility: hidden;
  position: absolute;
  z-index: 1;
  width: 100px;
  color: white;
  font-size: 14px;
  background-color: #192733;
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
}

.hover-text:hover .tooltip-text {
  visibility: visible;
}

#top {
  top: -40px;
  left: -50%;
}

#bottom {
  top: 25px;
  left: -50%;
}

#left {
  top: -8px;
  right: 120%;
}

#right {
  top: -8px;
  left: 120%;
}

.hover-text {
  position: relative;
  display: inline-block;
  font-family: Avenir;
  text-align: center;
}
</style>
