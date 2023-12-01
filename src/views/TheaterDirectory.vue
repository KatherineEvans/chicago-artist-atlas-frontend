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
      <div class="grid grid-cols-2 lg:grid-cols-4 justify-center p-4 gap-6 mb-6">
        <div class="col-span-1">
          <label for="equity" class="mr-2 sm:text-sm sm:leading-6 font-bold">Equity</label>
          <select
            id="equity"
            name="equity"
            v-model="equity"
            @change="trackValue"
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
            v-model="seasonType"
            @change="trackValue"
            class="w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option :value="null" selected>Any</option>
            <option v-for="season in seasonTypes" :key="season" :value="season">{{ season }}</option>
          </select>
        </div>
        <div class="col-span-2">
          <div>
            <label for="search" class="mr-2 sm:text-sm sm:leading-6 font-bold">Search by Theater</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                v-model="searchTerm"
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
        <div class="loading-spinner-container" v-if="isLoading">
          <div class="loading-spinner m-auto">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div v-if="noTheatersToDisplay" class="text-center m-6">
          <p class="text-xl">
            We're sorry! It looks like you picked a combination of search terms that returned zero results!
          </p>
          <p class="text-xl">
            Try a different combination, or if you believe this is a mistake, please
            <a href="mailto:info@chiartistatlas.com?subject=Theatre Directory">reach out</a>
            to the Atlas team.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 sm:px-4" v-else>
          <div class="col-span-1">
            <div
              v-for="theater in theaters"
              v-bind:key="theater.id"
              class="border rounded border-grey-400 text-left mb-3 p-3"
              :class="theater.id === currentTheater.id ? activeClass : ''"
            >
              <div class="card-body" v-on:click="setCurrentTheater(theater)">
                <div class="mb-2">
                  <h5 class="card-title d-inline">{{ theater.name }}</h5>
                  <a target="_blank" :href="theater.website" class="hover-text float-right card-link">
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
                  :class="currentPage == 1 ? 'hidden' : ''"
                  @click="currentPage--"
                  class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  <ArrowLongLeftIcon class="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Previous
                </div>
              </div>
              <div class="md:-mt-px md:flex">
                <div
                  @click="currentPage = startingPage"
                  :class="
                    currentPage == startingPage
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  "
                  class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
                >
                  {{ startingPage }}
                </div>
                <div
                  @click="currentPage = middlePage"
                  :class="
                    currentPage == middlePage
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  "
                  class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
                >
                  {{ middlePage }}
                </div>
                <div
                  @click="currentPage = endingPage"
                  :class="
                    currentPage == endingPage
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  "
                  class="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
                >
                  {{ endingPage }}
                </div>
              </div>
              <div class="-mt-px flex w-0 flex-1 justify-end">
                <div
                  href="#"
                  @click="currentPage++"
                  :class="currentPage == totalPages ? 'hidden' : ''"
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
                  <h4 class="font-bold text-xl">{{ currentTheater?.name }}</h4>
                  <h6 v-if="currentTheater?.address?.full_address" class="text-lg">
                    {{ currentTheater?.address?.full_address }}
                  </h6>
                  <h6 v-else class="text-lg"><em>Various Addresses</em></h6>
                </div>
                <div class="py-3 px-4 text-base">
                  <p v-if="currentTheater.mission" class="card-text mb-3">
                    {{ currentTheater.mission }}
                  </p>
                  <div class="grid grid-cols-1 md:grid-cols-3 justify-center pb-3 gap-6">
                    <div class="col-span-1">
                      <img
                        v-if="currentTheater.image_url"
                        :src="currentTheater.image_url"
                        :alt="currentTheater.name"
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
                            {{ currentTheater?.union_status }}
                          </p>
                        </div>
                        <div class="mb-2">
                          <p>
                            <strong>Season Type:</strong>
                            {{ currentTheater?.season_type }}
                          </p>
                        </div>
                        <div class="mb-2">
                          <i v-if="currentTheater.phone" class="fa-solid fa-phone mr-2"></i>
                          <span v-if="currentTheater.phone">{{ currentTheater.phone }}</span>
                        </div>
                        <div class="mb-2">
                          <i v-if="currentTheater.contact_email" class="fa-solid fa-envelope mr-2"></i>
                          <i v-if="currentTheater.contact_form" class="fa-solid fa-message mr-2"></i>
                          <span v-if="currentTheater.contact_email">
                            <a :href="'mailto:' + currentTheater.contact_email">{{ currentTheater.contact_email }}</a>
                          </span>
                          <span v-if="currentTheater.contact_form" target="_blank">
                            <a :href="currentTheater.contact_form">Contact Form</a>
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
</template>

<script>
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
      title: "Theatre Directory",
      noTheatersToDisplay: false,
      theaters: [],
      currentTheater: {},
      totalPages: 26,
      startingPage: 1,
      middlePage: 2,
      endingPage: 3,
      currentPage: 1,
      activeClass: "active",
      isLoading: true,
      seasonType: null,
      equity: null,
      searchTerm: null,
      seasonTypes: [
        "Plays",
        "Musicals",
        "Comedy",
        "Classical",
        "Opera",
        "Ballet",
        "Children's Theater",
        "Avant Garde",
        "Theatre by Young Performers",
      ],
    };
  },
  watch: {
    searchTerm() {
      this.noTheatersToDisplay = false;
      this.isLoading = true;
      this.getTheaters(
        `/theaters?page_number=1&equity=${this.equity}&season=${this.seasonType}&search=${this.searchTerm}`
      );
    },
    equity() {
      this.noTheatersToDisplay = false;
      this.isLoading = true;
      this.getTheaters(
        `/theaters?page_number=1&equity=${this.equity}&season=${this.seasonType}&search=${this.searchTerm}`
      );
    },
    seasonType() {
      this.noTheatersToDisplay = false;
      this.isLoading = true;
      this.getTheaters(
        `/theaters?page_number=1&equity=${this.equity}&season=${this.seasonType}&search=${this.searchTerm}`
      );
    },
    currentPage(newPage) {
      // REVIEW THIS LOGIC - IT'S WACK
      if (newPage > this.endingPage) {
        this.startingPage = newPage;
        this.middlePage = newPage + 1;
        this.endingPage = newPage + 2;
      }

      if (newPage < this.startingPage) {
        this.endingPage = newPage;
        this.middlePage = newPage - 1;
        this.startingPage = newPage - 2;
      }
      this.getTheaters(
        `/theaters?page_number=${newPage}&equity=${this.equity}&season=${this.seasonType}&search=${this.searchTerm}`
      );
    },
  },
  created: function () {
    this.getTheaters("/theaters");
  },
  methods: {
    getTheaters(link) {
      axios.get(link).then((response) => {
        if (response.data.length > 0) {
          this.theaters = response.data;
          this.currentTheater = this.theaters[0];
          let addressesForTooltip = [];
          let addressArray = [];
          this.theaters.forEach((theater) => {
            if (theater.address) {
              addressesForTooltip.push({
                name: theater.name,
                address: theater.address.full_address,
              });
              addressArray.push(theater.address.full_address);
            }
          });
          let addresses = addressArray.join(";");

          axios
            .get(
              `https://api.mapbox.com/geocoding/v5/mapbox.places-permanent/${addresses}.json?access_token=${process.env.VUE_APP_MAP_KEY}&limit=1`
            )
            .then((response) => {
              let centerArray = null;
              if (response.data && !response.data.length) {
                centerArray = [response.data.features[0]?.center];
              } else {
                centerArray = response.data.map((address) => {
                  if (address?.features[0]?.center) {
                    return address.features[0].center;
                  }
                  return;
                });
              }
              this.setMap(centerArray[0], centerArray, addressesForTooltip, true);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          this.noTheatersToDisplay = true;
          this.isLoading = false;
        }
      });
    },
    setMap(center, data, addressesForTooltip, setDataForMap) {
      mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: 12,
      });

      if (setDataForMap) {
        // Create a marker and add it to the map
        for (let i = 0; i < data.length; i++) {
          addressesForTooltip[i]["location"] = data[i];
          addressesForTooltip[i]["html"] = `<h3>${addressesForTooltip[i].name}</h3>`;
          if (data[i]) {
            addressesForTooltip[i]["html"] =
              addressesForTooltip[i]["html"] + `<p>${addressesForTooltip[i]?.address}</p>`;
          }
        }

        addressesForTooltip.forEach((place) => {
          if (place.location) {
            let popup = new mapboxgl.Popup({ offset: 25 }).setHTML(place.html);
            let marker = new mapboxgl.Marker()
              .setLngLat([place.location[0], place.location[1]])
              .setPopup(popup)
              .addTo(this.map);
          }
        });

        this.isLoading = false;
      }
    },
    setCurrentTheater(theater) {
      this.currentTheater = theater;
      if (theater?.address?.lat && theater?.address?.lng) {
        // this.setMap([theater.address.lat, theater.address.lng], null, null, null);
        const center = new mapboxgl.LngLat(theater.address.lng, theater.address.lat);
        this.map.setCenter(center);
      }
    },
  },
};
</script>

<style scoped>
.active {
  background-color: #f5f5f5;
}
.link-blue {
  color: #0d6efd !important;
}
#map {
  width: 100%;
  height: 500px;
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
