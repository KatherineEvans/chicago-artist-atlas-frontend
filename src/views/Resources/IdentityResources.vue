<template>
  <div class="container-fluid">
    <div class="row bg-blue-50 py-3 px-4 text-center">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 m-auto my-3">
        <h2 class="text-3xl font-bold">Identity Based Resources</h2>
        <p style="font-size: 16px">
          Creating an
          <strong>inclusive</strong>
          community is at the heart of what we here at Atlas! It doesn't matter how you identify, Atlas has your back.
          We're here to provide unwavering support and guide you through the ins and outs of the performing arts
          industry. You can count on us to provide customized resources tailored to fit your unique needs, challenges,
          and concerns. Together, let's ignite the stage and make unforgettable theatre.
        </p>
      </div>
    </div>
    <nav class="flex flex-wrap justify-between px-0" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <li>
          <div>
            <a href="/" class="text-gray-400 hover:text-gray-500">
              <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span class="sr-only">Home</span>
            </a>
          </div>
        </li>
        <li v-for="page in pages" :key="page.name">
          <div class="flex items-center">
            <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <a
              :href="page.href"
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              :aria-current="page.current ? 'page' : undefined"
              :class="[page.current ? 'underline' : 'no-underline']"
            >
              {{ page.name }}
            </a>
          </div>
        </li>
      </ol>
      <div class="flex flex-wrap px-6">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-base font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Quick Links
              <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </MenuButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem v-for="(value, name, index) in resources" :key="index">
                  <a
                    :href="'#' + name.replace(/\s/g, '')"
                    class="text-gray-700 block px-4 py-2 text-base hover:no-underline no-underline"
                  >
                    {{ name }}
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <!-- <div class="flex flex-wrap">
        <a
          class="rounded-full px-3.5 py-2 text-base font-semibold shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mx-3 sm:mx-auto no-underline hover:no-underline mb-3"
          v-for="button in filterButtons"
          :key="button.name"
          :href="button.link"
          :class="button.classes"
        >
          {{ button.name }}
        </a>
      </div> -->
    </nav>
    <div class="container pb-5 px-5 m-auto">
      <div
        class="mx-auto max-w-7xl py-4 px-6 lg:px-8 border-b-2 last:border-b-0"
        v-for="(value, name, index) in resources"
        :key="index"
      >
        <div class="mx-auto max-w-2xl text-center mt-3">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl" :id="name.replace(/\s/g, '')">
            {{ name }}
          </h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">
            A curated list of resources supporting the {{ name }} experience
          </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="post in value" :key="post.id" class="flex flex-col items-start justify-between">
            <div class="relative w-full">
              <img
                :src="post.logo"
                alt=""
                class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div class="max-w-xl">
              <!-- <div class="mt-8 flex items-center gap-x-4 text-xs">
                <a
                  :href="post.website_url"
                  class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  <span v-if="post.document_name">{{ post.document_name }}</span>
                  <span v-else>Visit site</span>
                </a>
              </div> -->
              <div class="group relative px-2">
                <h3 class="mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a
                    :href="post.website_url"
                    class="text-blue-900 hover:text-blue-700 no-underline hover:no-underline"
                    target="_blank"
                  >
                    <span class="absolute inset-0" />
                    {{ post.organization_name }}
                  </a>
                </h3>
                <p class="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ChevronRightIcon, ChevronDownIcon, HomeIcon } from "@heroicons/vue/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
export default {
  components: { ChevronRightIcon, ChevronDownIcon, HomeIcon, Menu, MenuButton, MenuItem, MenuItems },
  data: function () {
    return {
      resources: [],
      pages: [
        { name: "Resources", href: "/resources", current: false },
        { name: "Identity Based Resources", href: "/resources/identity", current: true },
      ],
      filterButtons: [
        {
          name: "Artists with Disabilities",
          link: "#ArtistswithDisabilities",
          classes: "bg-green-50 text-green-700 ring-green-600/20 hover:text-green-900",
        },
        { name: "BIPOC", link: "#BIPOC", classes: "bg-blue-50 text-blue-700 ring-blue-700/10 hover:text-blue-900" },
        {
          name: "LGBTQIA",
          link: "#LGBTQIA",
          classes: "rainbow-background ring-purple-600/10 text-purple-700 hover:text-purple-900",
        },
        { name: "Women+", link: "#Women+", classes: "bg-pink-50 text-pink-700 hover:text-pink-900 ring-pink-700/10" },
      ],
    };
  },
  mounted() {
    this.getResources();
  },
  methods: {
    getResources() {
      axios.get("/resources.json?primary_filter=Identity%20Based").then((response) => {
        this.resources = response.data.grouped["Identity Based"];
      });
    },
  },
};
</script>
<style>
.rainbow-background {
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 0.2) 0%,
    rgba(255, 154, 0, 0.2) 10%,
    rgba(208, 222, 33, 0.2) 20%,
    rgba(79, 220, 74, 0.2) 30%,
    rgba(63, 218, 216, 0.2) 40%,
    rgba(47, 201, 226, 0.2) 50%,
    rgba(28, 127, 238, 0.2) 60%,
    rgba(95, 21, 242, 0.2) 70%,
    rgba(186, 12, 248, 0.2) 80%,
    rgba(251, 7, 217, 0.2) 90%,
    rgba(255, 0, 0, 0.2) 100%
  ) !important;
}
</style>
