<template>
  <div class="row ltblue py-3 px-4 text-center">
    <div class="col-8 m-auto my-4">
      <h2 class="mb-4">
        <strong>{{ title }}</strong>
      </h2>
      <p style="font-size: 16px">
        Let's launch your career! With this dashboard, you can create the prefect artist's resume, save and submit it
        for auditions, and build an eye-catching profile with your photos and performances. Keep track of all your
        important performances and auditions so you never miss a beat!
      </p>
    </div>
  </div>
  <div class="relative min-h-screen md:flex">
    <!-- mobile menu bar -->
    <div class="bg-blue-600 text-blue-100 flex justify-between md:hidden">
      <!-- logo -->
      <a href="#" class="block p-4 text-white font-extrabold text-lg text-white no-underline">First Last</a>
      <!-- mobile menu button -->
      <button @click="showNav = !showNav" class="mobile-menu-button text-lg px-4 focus:bg-blue-800">
        <i class="fa-solid fa-bars" style="color: #ffffff"></i>
      </button>
    </div>
    <!-- sidebar -->
    <div
      class="sidebar divide-y w-64 bg-blue-950 text-blue-100 space-y-6 px-3 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0"
    >
      <!-- profile pic -->
      <div class="py-3">
        <svg
          class="w-24 h-24 p-3 bg-white rounded-full m-auto mt-4 mb-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
        <div class="font-extrabold text-2xl text-center text-white">First Last</div>
      </div>
      <!-- nav -->
      <nav class="px-0">
        <a
          class="text-white flex items-center block py-3 px-4 hover:no-underline no-underline text-lg hover:bg-blue-900 rounded transition duration-200"
          :key="link.name"
          v-for="link in navigation"
          :href="link.href"
        >
          <i class="mr-2" :class="link.icon"></i>
          <span>{{ link.name }}</span>
        </a>
      </nav>
    </div>
    <!-- content -->
    <div class="flex-1 p-10 text-2xl font-bold">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Artist Dashboard",
      showNav: false,
      navigation: [
        { name: "Profile", href: "/user/profile", current: true, icon: "fa-regular fa-user" },
        { name: "Auditions", href: "/user/auditions", current: false, icon: "fa-solid fa-star" },
        { name: "Resume", href: "/user/resume", current: false, icon: "fa-regular fa-file-lines" },
        { name: "Calendar", href: "/user/calendar", current: false, icon: "fa-solid fa-calendar-days" },
        { name: "Account", href: "/user/account", current: false, icon: "fa-solid fa-gear" },
      ],
    };
  },
  watch: {
    showNav(newVal) {
      let sidebar = document.getElementsByClassName("sidebar");
      if (newVal) {
        sidebar[0].classList.remove("-translate-x-full");
      } else {
        sidebar[0].classList.add("-translate-x-full");
      }
    },
  },
  computed: {},
  methods: {},
};
</script>
