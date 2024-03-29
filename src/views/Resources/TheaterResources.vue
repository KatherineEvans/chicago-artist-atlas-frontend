<template>
  <div class="container-fluid">
    <div class="bg-blue-50 px-10 py-8 mx-auto text-center">
      <p class="text-2xl md:text-3xl font-bold mb-2">Production Staff Resources</p>
      <p class="text-lg max-w-3xl mx-auto mb-2">
        Here at Atlas, we're focused on providing our users with the latest resources on topics that matter -
        inclusivity, diversity, sustainability, and the business of theatre! We strive to continually improve and grow
        our resource respository to best serve the Chicago theatre community.
      </p>
    </div>
    <nav class="flex flex-wrap justify-between text-base pb-0" aria-label="Breadcrumb">
      <ol role="list" class="items-center space-x-4 hidden sm:flex">
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
              class="ml-4 font-medium text-gray-500 hover:text-gray-700"
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
              class="absolute z-10 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem v-for="(value, name, index) in resources" :key="index">
                  <a
                    :href="'#' + name.replace(/\s/g, '')"
                    class="text-gray-700 block px-4 py-2 text-base hover:no-underline no-underline hover:bg-gray-100"
                  >
                    {{ name }}
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
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
                class="aspect-[16/9] w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div class="absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div class="max-w-xl">
              <div class="group relative px-2">
                <h3 class="mt-4 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a
                    :href="post.website_url"
                    v-if="post.website_url"
                    class="text-blue-900 hover:text-blue-700 no-underline hover:no-underline"
                    target="_blank"
                  >
                    <span class="absolute inset-0"></span>
                    {{ post.organization_name ? post.organization_name : post.document_name }}
                  </a>
                  <a 
                    v-else
                    :href="post.pdf_url"
                    class="text-blue-900 hover:text-blue-700 no-underline hover:no-underline"
                    target="_blank"
                  >
                    {{ post.organization_name ? post.organization_name : post.document_name }}
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
        { name: "Production Staff Resources", href: "/resources/production", current: true },
      ],
    };
  },
  mounted() {
    this.getResources();
  },
  methods: {
    getResources() {
      axios.get("/resources.json?primary_filter=Production%20Staff%20Resources").then((response) => {
        this.resources = response.data.grouped["Production Staff Resources"];
      });
    },
  },
};
</script>
<style></style>
