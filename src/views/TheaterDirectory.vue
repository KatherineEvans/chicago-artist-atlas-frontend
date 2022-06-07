<template>
  <div class="container-fluid">
    <div class="row ltblue py-3 px-4 text-center">
      <div class="col-8 m-auto my-3">
        <h2>
          <strong>{{ title }}</strong>
        </h2>
        <p style="font-size: 16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est erat, ultricies at pharetra vel, volutpat
          ac urna.
        </p>
      </div>
    </div>
    <!-- <h1 class="text-center my-3">{{ title }}</h1> -->
    <div class="row my-4 mx-auto">
      <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mx-auto my-2">
        <div class="card text-left">
          <div class="card-body">
            <h5 class="card-title">Steppenwolf Theater</h5>
            <p class="card-subtitle mb-2 text-muted">1650 N Halsted St, Chicago, IL 60614</p>
            <p class="card-text">
              Steppenwolf Theatre Company is a Chicago theatre company founded in 1974 by Terry Kinney, Jeff Perry, and
              Gary Sinise in the Unitarian church on Half Day Road in Deerfield, Illinois and is now located in
              Chicago's Lincoln Park neighborhood on Halsted Street.
            </p>
            <a href="https://www.steppenwolf.org/" class="card-link">Visit Site</a>
            <!-- <a href="#" class="card-link">Another link</a> -->
          </div>
        </div>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12 mx-auto my-2">
        <div id="map" class="mx-auto"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Theater Directory",
    };
  },
  created: function () {
    this.setMap();
  },
  methods: {
    setMap() {
      console.log(process.env.VUE_APP_MAP_KEY);
      mapboxgl.accessToken = process.env.VUE_APP_MAP_KEY;
      const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
      mapboxClient.geocoding
        .forwardGeocode({
          query: "1650 N Halsted St, Chicago, IL 60614",
          autocomplete: false,
          limit: 1,
        })
        .send()
        .then((response) => {
          if (!response || !response.body || !response.body.features || !response.body.features.length) {
            console.error("Invalid response:");
            console.error(response);
            return;
          }
          const feature = response.body.features[0];

          const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: feature.center,
            zoom: 13,
          });

          // Create a marker and add it to the map.
          new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
        });
    },
  },
};
</script>

<style scoped>
#map {
  max-width: 600px;
  height: 600px;
}
</style>
