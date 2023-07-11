<template>
  <div class="container-fluid">
    <div class="row ltblue py-3 px-4 text-center">
      <div class="col-8 m-auto my-3">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <p style="font-size: 16px">
          ATLAS provides the most comprehensive directory of theatres, agencies, and classes in the city of Chicago. Use
          this tool to explore the vast layout of the who, what, and where that makes up Chicago’s performing arts
          scene.
        </p>
      </div>
    </div>
    <!-- <h1 class="text-center my-3">{{ title }}</h1> -->
    <div class="row my-4 mx-auto">
      <div class="loading-spinner-container" v-if="isLoading">
        <div class="loading-spinner m-auto">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mx-auto my-2">
        <div
          v-for="theater in theaters"
          v-bind:key="theater.id"
          class="card text-left mb-3"
          :class="theater.id === currentTheater.id ? activeClass : ''"
        >
          <div class="card-body" v-on:click="currentTheater = theater">
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
                  <a :href="'mailto:' + theater.contact_email">{{ theater.contact_email }}</a>
                </span>
                <span v-if="theater.contact_form" target="_blank">
                  <a :href="theater.contact_form">Contact Form</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-3">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li :class="currentPage == 1 ? 'disabled' : ''" class="page-item link-blue">
                <a class="page-link" @click="currentPage--">Previous</a>
              </li>
              <li class="page-item link-blue" :class="currentPage == startingPage ? 'active' : ''">
                <a class="page-link" @click="currentPage = startingPage">{{ startingPage }}</a>
              </li>
              <li class="page-item link-blue" :class="currentPage == middlePage ? 'active' : ''">
                <a class="page-link" @click="currentPage = middlePage">{{ middlePage }}</a>
              </li>
              <li class="page-item link-blue" :class="currentPage == endingPage ? 'active' : ''">
                <a class="page-link" @click="currentPage = endingPage">{{ endingPage }}</a>
              </li>
              <li :class="currentPage == totalPages ? 'disabled' : ''" class="page-item link-blue">
                <a class="page-link" @click="currentPage++">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 mx-auto my-2">
        <div id="map" class="mx-auto mb-4"></div>
        <div class="mx-auto theater-highlight">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title d-inline mb-0">{{ currentTheater?.name }}</h4>
              <h6 v-if="currentTheater?.address?.full_address" class="card-subtitle card-subtitle-color mt-1">
                {{ currentTheater?.address?.full_address }}
              </h6>
              <h6 v-else class="card-subtitle card-subtitle-color mt-1"><em>Various Addresses</em></h6>
            </div>
            <div class="card-body">
              <div class="row">
                <p v-if="currentTheater.mission" class="card-text mb-3">
                  {{ currentTheater.mission }}
                </p>
              </div>
              <div class="row">
                <div class="col-4">
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
                <div class="col-8">
                  <div class="row">
                    <div class="row">
                      <p class="mb-0">
                        <strong>Union Status:</strong>
                        {{ currentTheater?.union_status }}
                      </p>
                    </div>
                    <div class="row">
                      <p>
                        <strong>Season Type:</strong>
                        {{ currentTheater?.season_type }}
                      </p>
                    </div>
                    <div>
                      <i v-if="currentTheater.phone" class="fa-solid fa-phone mr-2"></i>
                      <span v-if="currentTheater.phone">{{ currentTheater.phone }}</span>
                    </div>
                    <div>
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
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      title: "Theater Directory",
      theaters: [],
      currentTheater: {},
      totalPages: 28,
      startingPage: 1,
      middlePage: 2,
      endingPage: 3,
      currentPage: 1,
      activeClass: "active",
      isLoading: true,
    };
  },
  watch: {
    currentPage(newPage, oldPage) {
      // console.log(newPage);
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
      this.getTheaters(`/theaters?page_number=${newPage}`);
    },
  },
  created: function () {
    this.getTheaters("/theaters");
  },
  methods: {
    getTheaters(link) {
      axios.get(link).then((response) => {
        this.theaters = response.data;
        // console.log(this.theaters, "theaters");
        this.currentTheater = this.theaters[0];
        let addressesForTooltip = [];
        let addressArray = this.theaters.map((theater) => {
          addressesForTooltip.push({
            name: theater.name,
            address: theater?.address?.full_address,
          });
          return theater?.address?.full_address;
        });
        let addresses = addressArray.join(";");
        axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places-permanent/${addresses}.json?access_token=${process.env.VUE_APP_MAP_KEY}&limit=1`
          )
          .then((response) => {
            let centerArray = response.data.map((address) => {
              if (address?.features[0]?.center) {
                return address.features[0].center;
              }
              return;
            });
            this.setMap(centerArray, addressesForTooltip);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
    setMap(data, addressesForTooltip) {
      mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: data[0],
        zoom: 10,
      });

      // Create a marker and add it to the map.
      for (let i = 0; i < data.length; i++) {
        addressesForTooltip[i]["location"] = data[i];
        addressesForTooltip[i]["html"] = `<h3>${addressesForTooltip[i].name}</h3>`;
        if (data[i]) {
          addressesForTooltip[i]["html"] = addressesForTooltip[i]["html"] + `<p>${addressesForTooltip[i]?.address}</p>`;
        }
      }

      addressesForTooltip.forEach((place) => {
        if (place.location) {
          let popup = new mapboxgl.Popup({ offset: 25 }).setHTML(place.html);
          let marker = new mapboxgl.Marker()
            .setLngLat([place.location[0], place.location[1]])
            .setPopup(popup)
            .addTo(map);
        }
      });
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.card-header {
  background-color: #0b0b35;
  color: #fff;
}
.card-subtitle-color {
  color: #e6e6e6;
}
.card {
  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  /* border: solid 1px #e9ecef; */
  border: none;
}
.active {
  background-color: #f5f5f5;
}
.link-blue {
  color: #0d6efd !important;
}
.link-blue {
  color: red;
}
#map {
  max-width: 700px;
  height: 500px;
}
.theater-highlight {
  max-width: 700px;
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
.loading-spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(255, 255, 255);
}
.loading-spinner {
  display: inline-block;
  position: relative;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
}
.loading-spinner div {
  display: inline-block;
  position: absolute;
  border-radius: 8px;
  left: 8px;
  width: 16px;
  background: #0b0b35;
  animation: loading-spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.loading-spinner div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.loading-spinner div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.loading-spinner div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes loading-spinner {
  0% {
    top: 40px;
    height: 96px;
  }
  50%,
  100% {
    top: 55px;
    height: 65px;
  }
}
</style>
