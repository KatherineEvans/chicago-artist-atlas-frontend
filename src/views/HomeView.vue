<template>
  <BannerImage />
  <div class="home mx-auto text-center">
    <div class="row bg-sky-100 py-3 px-4">
      <div class="col-8 m-auto my-3">
        <h4>
          <strong>Atlas is the ultimate destination for Chicago theatre artists and makers.</strong>
        </h4>
        <p style="font-size: 16px">
          We combine vital information in an easily navigated, one-stop-shop with original content from experts in our
          community to guide you on your journey.
        </p>
      </div>
    </div>
    <!-- CURRENT RESOURCES -->
    <div class="row no-gutters my-2 py-4 mx-auto">
      <div class="col-12">
        <h3 class="mb-4">Atlas Directories</h3>
        <div class="row mb-3">
          <div class="mx-auto col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12">
            <p style="font-size: 16px">Explore opportunities in the Chicago Theater community!</p>
          </div>
        </div>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/theater-directory" class="shadow2 h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/shore.png" alt="" />
          <div class="card-body">
            <div class="card-title">
              <h5>Theater Directory</h5>
              <div>
                <p style="font-size: 14px">
                  Explore the wide and varried landscape of Chicago theater with our comprehensive directory.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/auditions" class="h-100 card mx-auto text-center shadow2">
          <img class="m-auto pb-2 pt-4" src="../assets/night.png" alt="" />
          <div class="card-body">
            <div class="card-title">
              <h5>Auditions</h5>
              <div>
                <p style="font-size: 14px">
                  Navigate available theater, television, and film auditions in the Chicagoand area.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/classes" class="shadow2 h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/wheel.png" alt="" />
          <div class="card-body">
            <div class="card-title">
              <h5>Classes</h5>
              <div>
                <p style="font-size: 14px">
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
    <div class="row my-3 pt-3 pb-4 mx-auto bg-sky-100 mb-0">
      <h3 class="py-3">Atlas Resources</h3>
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
      <div class="mx-auto col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/resources" class="shadow2 h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/bean.png" alt="" />
          <div class="card-body">
            <div class="card-title">
              <h5>Inclusivity Resources</h5>
              <div>
                <p style="font-size: 14px">
                  A collection of resources centered around diverse experiences, including: BIPOC, LGBTQA+,
                  Female-Identifying, and ADA resources.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/resources" class="shadow2 h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/lion.png" alt="" />
          <div class="card-body">
            <div class="card-title">
              <h5>Eco & Sustainability Resources</h5>
              <div>
                <p style="font-size: 14px">
                  A collection of resources focused on improved sustainability and addressing ecological issues in the
                  theater community.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="mx-auto col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/resources" class="shadow2 h-100 card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/park.png" alt="" />
          <div class="card-body">
            <div class="card-title">
              <h5>Theater Resources</h5>
              <div>
                <p style="font-size: 14px">
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
.card-title {
  font-size: 14px;
}
.card-text {
  text-align: left;
}

.shadow2 {
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
