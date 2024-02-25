<template>
  <div class="relative md:flex">
    <!-- MOBILE MENU BAR -->
    <div class="bg-white text-blue-900 flex justify-between md:hidden">
      <!-- USER NAME -->
      <div href="#" class="text-blue-900 block px-5 py-3 font-extrabold text-lg no-underline">
        {{ activeUser }}
      </div>
      <!-- MOBILE MENU BUTTON -->
      <button @click="showNav = !showNav" class="mobile-menu-button text-lg px-5 py-3">
        <i class="fa-solid fa-bars text-blue-900"></i>
      </button>
    </div>
    <!-- SIDEBAR -->
    <div
      class="sidebar divide-y w-64 bg-blue-950 text-blue-100 space-y-6 px-3 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0 z-10"
    >
      <!-- PROFILE PIC -->
      <div class="pt-3 text-center">
        <div
          v-if="userHeadshot"
          class="bg-cover bg-center inline-block w-24 h-24 overflow-hidden rounded-full m-auto mt-4 mb-3"
          :style="{ 'background-image': 'url(' + userHeadshot + ')' }"
        ></div>
        <span v-else class="inline-block w-24 h-24 overflow-hidden rounded-full bg-gray-100 m-auto mt-4 mb-3">
          <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
        <div class="font-extrabold text-2xl text-center text-white mt-3">{{ activeUser }}</div>
      </div>
      <!-- NAVIGATION -->
      <nav class="px-0">
        <ul class="p-0">
          <li :key="link.name" v-for="link in navigation">
            <router-link 
              :to="link.href"
              v-if="!link.children"
              class="text-white flex items-center block py-3 px-4 hover:no-underline no-underline text-lg hover:bg-blue-800 rounded transition duration-200"
              :class="{ 'bg-blue-900': $route.name == link.routeName.toLowerCase() }"
            >
              <i class="mr-2" :class="link.icon"></i>
              <span>{{ link.name }}</span>
            </router-link>
            <Disclosure as="div" v-else :defaultOpen="navOpen" v-slot="navOpen">
              <DisclosureButton
                @click="rotate = !rotate"
                class="w-full text-white flex items-center block py-3 px-4 hover:no-underline no-underline text-lg hover:bg-blue-800 rounded transition duration-200 font-bold"
                :class="{ 'bg-blue-900  text-white': $route.name.includes('profile') }"
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
                      $route.name == subLink.routeName.toLowerCase()
                        ? 'underline font-bold'
                        : 'no-underline hover:no-underline'
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
    <div class="flex-1 p-3 sm:p-10 text-2xl font-bold">
      <div
        class="border border-gray-300 lg:border-gray-300 bg-white rounded p-4 flex flex-col justify-between leading-normal"
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
      navOpen: true,
      rotate: false,
      activeUser: `${localStorage.userFirstName} ${localStorage.userLastName}`,
      navigation: [
        {
          name: "Profile",
          routeName: "user-profile",
          href: "/user/profile",
          current: false,
          icon: "fa-solid fa-user",
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
              href: "/user/profile/trainings",
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
    } else {
      this.navOpen = false;
      this.rotate = false;
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
  computed: {
    userHeadshot() {
      return localStorage.headshotUrl == "null" ? null : localStorage.headshotUrl;
    },
  },
  methods: {},
};
</script>
<style scoped>
.sub-nav-text {
  font-size: 1.1em;
}
nav a.router-link-exact-active{
  color: white !important;
}
</style>
