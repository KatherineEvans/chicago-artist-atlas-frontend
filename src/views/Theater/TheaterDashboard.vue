<template>
    <div class="relative md:flex">
      <!-- MOBILE MENU BAR -->
      <div class="bg-white text-blue-900 flex justify-between md:hidden">
        <!-- THEATER NAME -->
        <div href="#" class="text-blue-900 block px-5 py-3 font-extrabold text-lg no-underline">
          Theater Name
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
          <img v-if="theater && theater.image_url" :src="theater.image_url" :alt="theater.name" class="w-40 m-auto">
          <span v-else class="inline-block w-24 h-24 overflow-hidden rounded-full bg-gray-100 m-auto mt-4 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-full w-full text-gray-300">
              <path fill-rule="evenodd" d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
            </svg>
            
          </span>
          <div v-if="theater && theater.name" class="font-extrabold text-2xl text-center text-white mt-3">{{theater.name}}</div>
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
  import axios from "axios";

  export default {
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      ChevronRightIcon,
    },
    data: function () {
      return {
        loading: false,
        title: "Theater Dashboard",
        theater: {},
        showNav: false,
        navOpen: true,
        rotate: false,
        navigation: [
          {
            name: "Theater Profile",
            routeName: "theater-profile",
            href: "/theater/profile",
            current: false,
            icon: "fa-solid fa-building",
          },
          {
            name: "Search Professionals",
            routeName: "theater-profile",
            href: "/theater/professionals",
            current: false,
            icon: "fa-solid fa-magnifying-glass",
          },
          {
            name: "Auditions",
            routeName: "theater-auditions",
            href: "/theater/auditions",
            current: false,
            icon: "fa-solid fa-star",
          },
          {
            name: "Calendar",
            routeName: "theater-calendar",
            href: "/theater/calendar",
            current: false,
            icon: "fa-solid fa-calendar-days",
          },
        ],
      };
    },
    created() {
      this.loading = true;
      this.getTheater();
      // if (this.$route.name.includes("user-profile")) {
      //   this.navOpen = true;
      //   this.rotate = true;
      // } else {
      //   this.navOpen = false;
      //   this.rotate = false;
      // }
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
    },
    methods: {
      getTheater() {
        axios
          .get(`/theaters/${localStorage.theaterId}`)
          .then((response) => {
            this.loading = false;
            this.theater = response.data;
            console.log(response.data);
          });
      }
    },
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
  