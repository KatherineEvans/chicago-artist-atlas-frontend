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
      <div
        v-for="link in activeLinks"
        v-bind:key="link.name"
        class="col p-2"
        v-on:mouseover="active = link"
        v-on:mouseleave="active = {}"
      >
        <div class="card mx-auto text-center" :class="{ ltblue: active.name === link.name }" style="width: 18rem">
          <img :src="link.img" alt="" />
          <div class="card-body">
            <p class="card-title">
              <strong>{{ link.name }}</strong>
            </p>
            <p class="card-text">{{ link.description }}.</p>
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
      active: {},
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
<style>
.ltblue {
  background-color: #e6f4f7 !important;
}
</style>
