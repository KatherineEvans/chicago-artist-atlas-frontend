<template>
  <BannerImage />
  <div class="home mx-auto text-center">
    <div class="bg-blue-50 p-4 md:p-2 sm:p-2">
      <div class="m-auto my-3">
        <p class="text-2xl font-bold mb-1">Atlas is the ultimate destination for Chicago theatre artists and makers.</p>
        <p style="font-size: 16px">
          We combine vital information in an easily navigated, one-stop-shop with original content from experts in our
          community to guide you on your journey.
        </p>
      </div>
    </div>
    <!-- CURRENT RESOURCES -->
    <div class="row no-gutters my-2 py-10 mx-auto mt-0">
      <div class="col-12">
        <p class="text-2xl font-bold">Atlas Directories</p>
        <div class="row mb-3">
          <div class="mx-auto col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12">
            <p style="font-size: 16px">Explore opportunities in the Chicago Theater community!</p>
          </div>
        </div>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/directory" class="drop-shadow-md h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/shore.png" alt="" />
          <div class="card-body">
            <div class="card-title mb-1">
              <p class="text-lg font-bold mb-1">Theater Directory</p>
              <div>
                <p class="mb-2">
                  Explore the wide and varried landscape of Chicago theater with our comprehensive directory.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/auditions" class="h-100 card mx-auto text-center drop-shadow-md">
          <img class="m-auto pb-2 pt-4" src="../assets/night.png" alt="" />
          <div class="card-body">
            <div class="card-title mb-1">
              <p class="text-lg font-bold mb-1">Auditions</p>
              <div>
                <p class="mb-2">Navigate available theater, television, and film auditions in the Chicagoand area.</p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/classes" class="drop-shadow-md h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/wheel.png" alt="" />
          <div class="card-body">
            <div class="card-title mb-1">
              <p class="text-lg font-bold mb-1">Classes</p>
              <div>
                <p class="mb-2">
                  Delve into Atlas's exceptional classes for creatives, and perfect your craft with lessons from
                  industry leaders and experts.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <!-- COMING SOON -->
    <div class="py-10 row mx-auto bg-blue-50 mb-0">
      <p class="text-2xl font-bold">Atlas Resources</p>
      <div class="row mb-3">
        <div class="mx-auto col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12">
          <p style="font-size: 16px">
            Here at Atlas, we're focused on providing our users with the latest resources on topics that matter -
            inclusivity, diversity, sustainability, and the business of theater! We strive to continually improve and
            grow our resource respository to best serve the Chicago theater community.
          </p>
          <a style="text-decoration: underline" href="/resources">View all resources</a>
        </div>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/resources" class="drop-shadow-md h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/bean.png" alt="" />
          <div class="card-body">
            <div class="card-title mb-1">
              <p class="text-lg font-bold mb-1">Inclusivity Resources</p>
              <div>
                <p class="mb-2">
                  A collection of resources centered around diverse experiences, including: BIPOC, LGBTQA+,
                  Female-Identifying, and ADA resources.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/resources" class="drop-shadow-md h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/lion.png" alt="" />
          <div class="card-body">
            <div class="card-title mb-1">
              <p class="text-lg font-bold mb-1">Eco & Sustainability Resources</p>
              <div>
                <p class="mb-2">
                  A collection of resources focused on improved sustainability and addressing ecological issues in the
                  theater community.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/resources" class="drop-shadow-md h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/park.png" alt="" />
          <div class="card-body">
            <div class="card-title mb-1">
              <p class="text-lg font-bold mb-1">Theater Resources</p>
              <div>
                <p class="mb-2">
                  Keep your theatre company in the know with this collection of resources focused on theater production
                  and the business side of art.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BannerImage from "@/components/BannerImage.vue";
export default {
  components: { BannerImage },
  data: function () {
    return {
      lightBlueDiv: "light-blue-div",
      activeLinks: [
        {
          name: "Theater Directory",
          link: "/theater-directory",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: "../assets/bean.png",
        },
        {
          name: "Directory",
          link: "/resources",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: "../assets/bean.png",
        },
        {
          name: "MasterClasses",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          link: "/resources",
          img: "../assets/bean.png",
        },
        {
          name: "Contact",
          link: "/resources",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          img: "../assets/bean.png",
        },
      ],
    };
  },
  mounted() {
    if (this.$route.query.reset_token) {
      this.$store.commit("sessions/setPasswordResetToken", this.$route.query.reset_token);
    }
  },
};
</script>
<style scoped>
img {
  max-width: 125px;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
a:hover {
  color: #2c3e50;
}
.card {
  max-width: 350px !important;
}
.card-text {
  text-align: left;
}
</style>
