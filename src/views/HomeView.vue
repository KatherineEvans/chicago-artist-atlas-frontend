<template>
  <BannerImage />
  <div class="home mx-auto text-center">
    <div class="bg-blue-50 p-4 md:p-2 sm:p-2">
      <div class="m-auto my-3">
        <p class="text-2xl md:text-3xl font-bold mb-1">
          Atlas is the ultimate destination for Chicago theatre artists and makers.
        </p>
        <p class="text-lg">
          We combine vital information in an easily navigated, one-stop-shop with original content from experts in our
          community to guide you on your journey.
        </p>
      </div>
    </div>
    <!-- CURRENT RESOURCES -->
    <div class="row no-gutters my-2 py-10 mx-auto mt-0">
      <div class="col-12">
        <p class="text-xl md:text-2xl lg:text-3xl font-bold mb-3">Atlas Directories</p>
        <div class="row mb-3">
          <div class="mx-auto col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12">
            <p class="text-lg">Explore opportunities in the Chicago Theater community!</p>
          </div>
        </div>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/auditions" class="h-100 card mx-auto text-center drop-shadow-md">
          <img class="m-auto pb-2 pt-4" src="../assets/illustrations/auditions.png" alt="" />
          <div class="card-body">
            <div class="mb-1">
              <p class="text-xl font-bold mb-1">Auditions</p>
              <div>
                <p class="mb-2 text-base">
                  Navigate available theater, television, and film auditions in the Chicagoand area.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/directory" class="drop-shadow-md h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/illustrations/directories.png" alt="" />
          <div class="card-body">
            <div class="mb-1">
              <div class="text-xl font-bold mb-1">Theaters</div>
              <div>
                <p class="mb-2 text-base">
                  Explore the wide and varried landscape of Chicago theater with our comprehensive directory.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/classes" class="drop-shadow-md h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/illustrations/classes.png" alt="" />
          <div class="card-body">
            <div class="mb-1">
              <p class="text-xl font-bold mb-1">Classes</p>
              <div>
                <p class="mb-2 text-base">
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
      <p class="text-3xl font-bold">Atlas Resources</p>
      <div class="row mb-3">
        <div class="mx-auto col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12">
          <p class="text-lg">
            Here at Atlas, we're focused on providing our users with the latest resources on topics that matter -
            inclusivity, diversity, sustainability, and the business of theater! We strive to continually improve and
            grow our resource respository to best serve the Chicago theater community.
          </p>
          <!-- <a style="text-decoration: underline" href="/resources">View all resources</a> -->
        </div>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/resources" class="drop-shadow-md h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/illustrations/identity.png" alt="" />
          <div class="card-body">
            <div class="mb-1">
              <p class="text-xl font-bold mb-1">Identity Resources</p>
              <div>
                <p class="mb-2 text-base">
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
          <img class="m-auto pb-2 pt-4" src="../assets/illustrations/business.png" alt="" />
          <div class="card-body">
            <div class="mb-1">
              <p class="text-xl font-bold mb-1">Business Resources for Artist</p>
              <div>
                <p class="mb-2 text-base">
                  Enhance your theater career with our extensive repository of practical tools and knowledge geared
                  towards your business in show business.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/resources" class="drop-shadow-md h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/illustrations/lifehacks.png" alt="" />
          <div class="card-body">
            <div class="mb-1">
              <p class="text-xl font-bold mb-1">#LifeHacks</p>
              <div>
                <p class="mb-2 text-base">
                  Uncover innovative #LifeHacks designed to streamline your daily routine and boost productivity. We aim
                  to empower you with simple yet effective strategies for success!
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
  max-width: 150px;
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
