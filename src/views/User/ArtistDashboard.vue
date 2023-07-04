<template>
  <!-- <div class="row ltblue py-3 px-4 text-center">
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
  </div> -->
  <div class="relative md:flex">
    <!-- MOBILE MENU BAR -->
    <div class="bg-white text-blue-900 flex justify-between md:hidden">
      <!-- USER NAME -->
      <div href="#" class="text-blue-900 block px-5 py-3 font-extrabold text-lg no-underline">First Last</div>
      <!-- MOBILE MENU BUTTON -->
      <button @click="showNav = !showNav" class="mobile-menu-button text-lg px-5 py-3">
        <i class="fa-solid fa-bars text-blue-900"></i>
      </button>
    </div>
    <!-- SIDEBAR -->
    <div
      class="sidebar divide-y w-64 bg-blue-950/95 text-blue-100 space-y-6 px-3 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0"
    >
      <!-- PROFILE PIC -->
      <div class="py-3">
        <svg
          class="w-24 h-24 p-3 bg-white rounded-full m-auto mt-4 mb-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
        <div class="font-extrabold text-2xl text-center text-white">First Last</div>
      </div>
      <!-- NAVIGATION -->
      <nav class="px-0">
        <ul class="p-0">
          <li :key="link.name" v-for="link in navigation">
            <a
              class="text-white flex items-center block py-3 px-4 hover:no-underline no-underline text-lg hover:bg-blue-800 rounded transition duration-200"
              v-if="!link.children"
              :href="link.href"
              :class="{ 'bg-blue-900': $route.name == link.routeName.toLowerCase() }"
            >
              <i class="mr-2" :class="link.icon"></i>
              <span>{{ link.name }}</span>
            </a>
            <Disclosure as="div" v-else :defaultOpen="navOpen" v-slot="navOpen">
              <DisclosureButton
                @click="rotate = !rotate"
                class="w-100 text-white flex items-center block py-3 px-4 hover:no-underline no-underline text-lg hover:bg-blue-800 rounded transition duration-200 font-bold"
              >
                <i class="mr-2" :class="link.icon"></i>
                {{ link.name }}
                <ChevronRightIcon
                  class="ml-auto"
                  :class="[rotate ? 'rotate-90 text-blue-100' : 'text-white', 'h-5 w-5 shrink-0']"
                  aria-hidden="true"
                />
              </DisclosureButton>
              <DisclosurePanel as="ul" class="mt-1 px-2">
                <li class="text-right" v-for="subLink in link.children" :key="subLink.name">
                  <DisclosureButton
                    as="a"
                    :href="subLink.href"
                    :class="
                      $route.name == subLink.routeName.toLowerCase() ? 'underline' : 'no-underline hover:no-underline'
                    "
                    class="text-white flex items-center block py-3 px-4 sub-nav-text ml-3 hover:bg-blue-800 rounded transition duration-200"
                  >
                    {{ subLink.name }}
                  </DisclosureButton>
                </li>
              </DisclosurePanel>
            </Disclosure>
          </li>
        </ul>
      </nav>
    </div>
    <!-- CONTENT -->
    <div class="flex-1 p-10 text-2xl font-bold">
      <div
        class="border border-gray-400 lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronRightIcon,
  },
  data: function () {
    return {
      title: "Artist Dashboard",
      showNav: false,
      navOpen: false,
      rotate: false,
      navigation: [
        {
          name: "Profile",
          routeName: "user-profile",
          href: "/user/profile",
          current: false,
          icon: "fa-regular fa-user",
          rotate: false,
          children: [
            {
              name: "Bio",
              href: "/user/profile/bio",
              routeName: "user-profile-bio",
            },
            {
              name: "Talents",
              href: "/user/profile/talents",
              routeName: "user-profile-talents",
            },
            {
              name: "Training",
              href: "/user/profile/training",
              routeName: "user-profile-training",
            },
            {
              name: "Performances",
              href: "/user/profile/performances",
              routeName: "user-profile-performances",
            },
            {
              name: "Awards",
              href: "/user/profile/awards",
              routeName: "user-profile-awards",
            },
          ],
        },
        {
          name: "Auditions",
          routeName: "user-auditions",
          href: "/user/auditions",
          current: false,
          icon: "fa-solid fa-star",
        },
        // {
        //   name: "Resume",
        //   routeName: "user-resume",
        //   href: "/user/resume",
        //   current: false,
        //   icon: "fa-regular fa-file-lines",
        // },
        {
          name: "Calendar",
          routeName: "user-calendar",
          href: "/user/calendar",
          current: false,
          icon: "fa-solid fa-calendar-days",
        },
        { name: "Account", routeName: "user-account", href: "/user/account", current: false, icon: "fa-solid fa-gear" },
      ],
    };
  },
  created() {
    if (this.$route.name.includes("user-profile")) {
      this.navOpen = true;
      this.rotate = true;
      console.log("FUCK");
    } else {
      this.navOpen = false;
      this.rotate = false;
      console.log("SHIT");
    }
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
<style scoped>
.sub-nav-text {
  font-size: 1.1em;
}
</style>
