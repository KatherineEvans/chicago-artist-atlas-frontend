<template>
  <div class="home mx-auto text-center">
    <div class="row ltblue py-3 px-4">
      <div class="col-8 m-auto my-3">
        <p>
          <strong>Atlas is the ultimate destination for Chicago theatre artists and makers.</strong>
        </p>
        <p>
          We combine vital information in an easily navigated, one-stop-shop with original content from experts in our
          community to guide you on your journey.
        </p>
      </div>
    </div>
    <!-- CURRENT RESOURCES -->
    <div class="row my-5 py-3 mx-auto">
      <div class="m-auto col-xl-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/theater-directory" class="card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/shore.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>Theater Directory</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </a>
      </div>
      <div class="m-auto col-xl-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/auditions" class="card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/night.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>Auditions</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </a>
      </div>
      <!-- <div class="m-auto col-xl-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <div class="card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/park.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>Master Classes</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div> -->
      <div class="m-auto col-xl-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <a href="/contact" class="card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/wheel.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>Contact</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </a>
      </div>
    </div>
    <!-- COMING SOON -->
    <div class="row my-5 py-3 mx-auto gr-bk">
      <h3 class="py-3">Coming Soon</h3>
      <h5>FREE RESOURCES!</h5>
      <div class="row">
        <div class="m-auto col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est erat, ultricies at pharetra vel,
            volutpat ac urna. Nullam placerat rhoncus aliquet. Integer semper hendrerit feugiat. In venenatis dui quis
            magna eleifend fermentum. Fusce vel lectus neque. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Duis volutpat diam consequat turpis molestie molestie. Proin semper facilisis dapibus. Suspendisse
            non placerat lectus, sed viverra felis. Sed maximus condimentum diam
          </p>
        </div>
      </div>
      <div class="m-auto col-xl-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <div class="card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/bean.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>BIPOC Resources</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="m-auto col-xl-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <div class="card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/lion.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>LGBTQA+ Resources</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="m-auto col-xl-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <div class="card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/park.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>Theater Resources</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <!-- <div class="m-auto col-xl-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2">
        <div class="card mx-auto text-center">
          <img class="m-auto pb-2 pt-4" src="../assets/wheel.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>Contact</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
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
.ltblue {
  background-color: #e6f4f7 !important;
}
img {
  max-width: 125px;
}
.gr-bk {
  background-color: lightgray;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
.card {
  max-width: 350px !important;
}
</style>
