<template>
  <div class="container-fluid">
    <div class="row ltblue py-3 px-4 text-center">
      <div class="col-8 m-auto my-3">
        <h2>
          <strong>{{ title }}</strong>
        </h2>
        <p style="font-size: 16px">
          ATLAS provides the most comprehensive directory of theatres, agencies, and classes in the city of Chicago. Use
          this tool to explore the vast layout of the who, what, and where that makes up Chicago’s performing arts
          scene.
        </p>
      </div>
    </div>
    <!-- <h1 class="text-center my-3">{{ title }}</h1> -->
    <div class="row my-4 mx-auto">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mx-auto my-2">
        <div v-for="theater in theaters" v-bind:key="theater.id" class="card text-left mb-3">
          <div class="card-body" v-on:click="currentTheater = theater">
            <div class="mb-2">
              <h5 class="card-title d-inline">{{ theater.name }}</h5>
              <a target="_blank" :href="'http://' + theater.website" class="hover-text float-right card-link">
                <i class="fa-solid fa-square-up-right"></i>
                <span class="tooltip-text" id="top">Visit Site</span>
              </a>
            </div>
            <p class="card-subtitle mb-2 text-muted">{{ theater.address.full_address }}</p>
            <div class="row">
              <div class="col">
                <i class="fa-solid fa-phone mr-2"></i>
                (888) 123-4567
              </div>
            </div>
            <div class="row">
              <div class="col">
                <i class="fa-solid fa-envelope mr-2"></i>
                {{ theater.contact_email }}
              </div>
            </div>
          </div>
        </div>
        <div class="row py-3">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 mx-auto my-2">
        <div id="map" class="mx-auto mb-4"></div>
        <div class="mx-auto theater-highlight">
          <div class="card">
            <div class="row">
              <div class="col-3">
                <img
                  class="theater-highlight-img"
                  src="https://www.monaco-chicago.com/images/1700-960/istock-155341582-73776d3d.jpg"
                />
              </div>
              <div class="col-9">
                <div class="card-body">
                  <h4 class="card-title d-inline">{{ currentTheater?.name }}</h4>
                  <h6 class="card-subtitle my-2 text-muted">{{ currentTheater?.address?.full_address }}</h6>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor blandit urna eu cursus. Sed
                    urna sem, aliquam ut elit convallis, ornare congue sem.
                  </p>
                  <div class="row">
                    <div class="col">
                      <strong>Season Type:</strong>
                      {{ currentTheater?.season_type }}
                    </div>
                    <div class="col">
                      <strong>Union Status:</strong>
                      {{ currentTheater?.union_status }}
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
    };
  },
  created: function () {
    this.getTheaters();
  },
  methods: {
    getTheaters() {
      axios.get("/theaters").then((response) => {
        this.theaters = response.data;
        this.currentTheater = this.theaters[0];
        console.log(this.theaters);
        let address_array = this.theaters.map((theater) => {
          return theater?.address?.full_address;
        });
        let addresses = address_array.join(";");
        axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places-permanent/${addresses}.json?access_token=${process.env.VUE_APP_MAP_KEY}&limit=1`
          )
          .then((response) => {
            let centerArray = response.data.map((address) => {
              return address.features[0].center;
            });
            console.log(centerArray);
            this.setMap(centerArray);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },
    setMap(data) {
      mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: data[0],
        zoom: 10,
      });

      // Create a marker and add it to the map.
      data.forEach((place) => {
        let marker = new mapboxgl.Marker().setLngLat([place[0], place[1]]).addTo(map);
      });
    },
  },
};
</script>

<style scoped>
#map {
  max-width: 600px;
  height: 500px;
}
.theater-highlight {
  max-width: 600px;
}
.card-link {
  font-size: 18px;
  color: #0b0b35;
}
.theater-highlight-img {
  height: 100%;
  max-width: 150px;
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
