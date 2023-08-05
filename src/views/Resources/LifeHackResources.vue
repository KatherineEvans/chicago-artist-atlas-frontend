<template>
  <div class="container-fluid">
    <div class="row bg-blue-50 py-3 px-4 text-center">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 m-auto my-3">
        <h2 class="text-3xl font-bold">#LifeHacks</h2>
        <p style="font-size: 16px">
          Here at Atlas, we're focused on providing our users with the latest resources on topics that matter -
          inclusivity, diversity, sustainability, and the business of theater! We strive to continually improve and grow
          our resource respository to best serve the Chicago theater community.
        </p>
        <p style="font-size: 16px">
          Are there resources you don't see here?
          <a href="mailto:info@chiartistatlas.com?subject=Inclusivity Resources">Let us know!</a>
        </p>
      </div>
    </div>
    <nav class="flex flex-wrap justify-between px-0 pb-0" aria-label="Breadcrumb">
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
import { ChevronRightIcon, HomeIcon } from "@heroicons/vue/20/solid";
export default {
  components: { ChevronRightIcon, HomeIcon },
  data: function () {
    return {
      resources: [],
      pages: [
        { name: "Resources", href: "/resources", current: false },
        { name: "#LifeHacks", href: "/resources/life-hacks", current: true },
      ],
    };
  },
  mounted() {
    this.getResources();
  },
  methods: {
    getResources() {
      axios.get("/resources.json?primary_filter=Life%20Hack").then((response) => {
        this.resources = response.data["Life Hack"];
      });
    },
  },
};
</script>
<style></style>
<!-- <div class="container pb-5 px-5 m-auto"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      resources: [],
    };
  },
  mounted() {
    this.getResources();
  },
  methods: {
    getResources() {
      axios.get("/resources.json?primary_filter=Life%20Hack").then((response) => {
        this.resources = response.data;
      });
    },
  },
};
</script> -->
