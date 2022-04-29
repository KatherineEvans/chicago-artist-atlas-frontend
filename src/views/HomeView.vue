<template>
  <div class="home mx-auto">
    <div class="row ltblue py-3 px-4">
      <p>
        <strong>Atlas is the ultimate destination for Chicago theatre artists and makers.</strong>
      </p>
      <p>
        We combine vital information in an easily navigated, one-stop-shop with original content from experts in our
        community to guide you on your journey.
      </p>
    </div>
    <div class="row my-4 mx-auto">
      <div class="col p-2">
        <div class="card mx-auto text-center" style="width: 18rem">
          <img class="m-auto pb-2 pt-4" src="../assets/shore.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>Theater Directory</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="col p-2">
        <div class="card mx-auto text-center" style="width: 18rem">
          <img class="m-auto pb-2 pt-4" src="../assets/night.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>Directory</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="col p-2">
        <div class="card mx-auto text-center" style="width: 18rem">
          <img class="m-auto pb-2 pt-4" src="../assets/park.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>Master Classes</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div class="col p-2">
        <div class="card mx-auto text-center" style="width: 18rem">
          <img class="m-auto pb-2 pt-4" src="../assets/wheel.png" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>Contact</strong>
            </p>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
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
  max-width: 150px;
}
</style>
