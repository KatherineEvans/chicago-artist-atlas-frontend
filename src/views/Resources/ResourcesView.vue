<template>
  <div>
    <div class="bg-blue-50 px-10 py-8 mx-auto text-center">
      <p class="text-2xl md:text-3xl font-bold mb-2">Resources</p>
      <p class="text-lg max-w-3xl mx-auto mb-2">
        Here at Atlas, we're focused on providing our users with the latest resources on topics that matter -
        inclusivity, diversity, sustainability, and the business of theatre! We strive to continually improve and grow
        our resource respository to best serve the Chicago theatre community.
      </p>
      <p class="text-base italic">
        Are there resources you don't see here?
        <a class="underline text-blue-700" href="mailto:info@chiartistatlas.com?subject=Inclusivity Resources">
          Let us know!
        </a>
      </p>
    </div>
    <nav class="flex flex-wrap justify-between text-base pb-2" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <li>
          <div>
            <a href="/" class="text-gray-400 hover:text-gray-500">
              <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span class="sr-only">Home</span>
            </a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <a href="/resources" class="ml-4 font-medium text-gray-500 hover:text-gray-700 underline">Resources</a>
          </div>
        </li>
      </ol>
    </nav>
    <div class="container pb-5 px-5 m-auto">
      <div class="row">
        <div>
          <div class="text-2xl font-bold text-center">Identity Based Resources</div>
          <div class="resource-container drop-shadow-md bg-blue-100/25">
            <div class="img-desc">
              <img class="lf-img mx-auto mb-3" src="../../assets/resources/identity-based-resources.png" />
              <div class="resource-desc mb-3">
                <p class="px-2 desc">
                  Here at Atlas, an inclusive community is paramount to our mission. We know that inclusive theatre is
                  great theatre! No matter how you identify, Atlias is here to offer support and help you navigate this
                  industry. We strive to offer resources to fit your specific needs, challenges and concerns.
                </p>
              </div>
            </div>
            <div class="resource-cards">
              <div class="bg-white border rounded resource-card">
                <div class="mb-3">
                  <h6 class="inline font-bold text-lg">{{ bipoc.organization_name }}</h6>
                  <span
                    class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-sm float-right font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >
                    BIPOC
                  </span>
                </div>
                <p>
                  {{ bipoc.description }}
                </p>
                <a
                  target="_blank"
                  v-if="bipoc.website_url"
                  :href="bipoc.website_url"
                  class="text-right text-blue-700 block mt-2"
                >
                  View Resource
                </a>
                <a v-else target="_blank" :href="bipoc.pdf_url"></a>
              </div>
              <div class="bg-white border rounded resource-card">
                <div class="mb-3">
                  <h6 class="inline font-bold text-lg">{{ disabilities.organization_name }}</h6>
                  <span
                    class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-sm float-right font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                  >
                    Artists of Disability
                  </span>
                </div>
                <p>
                  {{ disabilities.description }}
                </p>
                <a
                  target="_blank"
                  v-if="disabilities.website_url"
                  :href="disabilities.website_url"
                  class="text-right text-blue-700 block mt-2"
                >
                  View Resource
                </a>
                <a v-else target="_blank" :href="disabilities.pdf_url"></a>
              </div>
              <div class="bg-white border rounded resource-card">
                <div class="mb-3">
                  <h6 class="inline font-bold text-lg">{{ lgbtqia.organization_name }}</h6>
                  <span
                    class="inline-flex items-center rounded-full rainbow-background px-2 py-1 text-sm float-right font-medium text-slate-700 ring-1 ring-inset ring-red-600/10"
                  >
                    LGBTQIA+
                  </span>
                </div>
                <p>
                  {{ lgbtqia.description }}
                </p>
                <a
                  target="_blank"
                  v-if="lgbtqia.website_url"
                  :href="lgbtqia.website_url"
                  class="text-right text-blue-700 block mt-2"
                >
                  View Resource
                </a>
                <a v-else target="_blank" :href="lgbtqia.pdf_url"></a>
              </div>

              <div class="bg-white border rounded resource-card">
                <div class="mb-3">
                  <h6 class="inline font-bold text-lg">{{ women.organization_name }}</h6>
                  <span
                    class="inline-flex items-center rounded-full bg-pink-50 px-2 py-1 text-sm float-right font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10"
                  >
                    Women+
                  </span>
                </div>
                <p>
                  {{ women.description }}
                </p>
                <a
                  target="_blank"
                  v-if="women.website_url"
                  :href="women.website_url"
                  class="text-right text-blue-700 block mt-2"
                >
                  View Resource
                </a>
                <a v-else target="_blank" :href="women.pdf_url"></a>
              </div>
              <router-link
                class="no-underline hover:no-underline flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-base float-right font-semibold shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                to="/resources/identity"
              >
                <strong class="text-blue-100">View All Identity Based Resources</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mt-5">
          <div class="text-2xl font-bold text-center">Business Resources for Artist</div>
          <div class="resource-container drop-shadow-md bg-blue-100/25">
            <div class="img-desc">
              <img class="lf-img mx-auto mb-3" src="../../assets/resources/business-resources.png" />
              <div class="resource-desc mb-3">
                <p class="px-2 desc">
                  From step-by-step guides on building a captivating website, to curated lists of reliable suppliers for
                  costumes, props, and so much more... we've got you covered. Enhance your theatre career with our
                  extensive repository of practical tools and knowledge.
                </p>
              </div>
            </div>
            <div class="resource-cards">
              <div
                v-for="resource in businessResources"
                :key="resource.id"
                class="bg-white border rounded resource-card"
              >
                <div class="mb-3">
                  <h6 class="inline font-bold text-lg">{{ resource.organization_name }}</h6>
                  <span
                    class="inline-flex items-center rounded-full bg-orange-50 px-2 py-1 text-sm float-right font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20"
                  >
                    {{ resource.secondary_type }}
                  </span>
                </div>
                <p>
                  {{ resource.description }}
                </p>
                <a
                  target="_blank"
                  v-if="resource.website_url"
                  :href="resource.website_url"
                  class="text-right text-blue-700 block mt-2"
                >
                  View Resource
                </a>
                <a v-else target="_blank" :href="resource.pdf_url"></a>
              </div>
              <router-link
                class="no-underline hover:no-underline flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-base float-right font-semibold shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                to="/resources/business"
              >
                <strong class="text-blue-100">View All Business Resources</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mt-5">
          <div class="text-2xl font-bold text-center">Production Staff Resources</div>
          <div class="resource-container drop-shadow-md bg-blue-100/25">
            <div class="img-desc">
              <img class="lf-img mx-auto mb-3" src="../../assets/resources/production-resources.png" />
              <div class="resource-desc mb-3">
                <p class="px-2 desc">
                  Whether you're a budding designer eager to expand your skills or a seasoned professional with a wealth of experience, our comprehensive array of resources for designers equips you to excel in your craft!
                </p>
              </div>
            </div>
            <div class="resource-cards">
              <div
                v-for="resource in productionResources"
                :key="resource.id"
                class="bg-white border rounded resource-card"
              >
                <div class="mb-3">
                  <h6 class="inline font-bold text-lg">{{ resource.organization_name ? resource.organization_name : resource.document_name  }}</h6>
                  <span
                    class="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-sm float-right font-medium text-purple-700 ring-1 ring-inset ring-purple-600/20"
                  >
                    {{ resource.secondary_type }}
                  </span>
                </div>
                <p>
                  {{ resource.description }}
                </p>
                <a
                  target="_blank"
                  v-if="resource.website_url"
                  :href="resource.website_url"
                  class="text-right text-blue-700 block mt-2"
                >
                  View Resource
                </a>
                <a v-else target="_blank" :href="resource.pdf_url"></a>
              </div>
              <router-link
                class="no-underline hover:no-underline flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-base float-right font-semibold shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                to="/resources/production"
              >
                <strong class="text-blue-100">View All Production Staff Resources</strong>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mt-5">
          <div class="text-2xl font-bold text-center">#LifeHack Resources</div>
          <div class="resource-container drop-shadow-md bg-blue-100/25">
            <div class="img-desc">
              <img class="lf-img mx-auto mb-3" src="../../assets/resources/life-hack-resources.png" />
              <div class="resource-desc mb-3">
                <p class="px-2 desc">
                  Uncover innovative #LifeHacks designed to streamline your daily routine and boost productivity. With
                  everything from cost and time-saving tips, to tricks on navigating life in the city, we aim to empower
                  you with simple yet effective strategies.
                </p>
              </div>
            </div>
            <div class="resource-cards">
              <div
                v-for="resource in lifeHackResources"
                :key="resource.id"
                class="bg-white border rounded resource-card"
              >
                <div class="mb-3">
                  <h6 class="inline font-bold text-lg">{{ resource.organization_name }}</h6>
                  <span
                    class="inline-flex items-center rounded-full bg-cyan-50 px-2 py-1 text-sm float-right font-medium text-cyan-700 ring-1 ring-inset ring-cyan-600/20"
                  >
                    {{ resource.secondary_type }}
                  </span>
                </div>
                <p>
                  {{ resource.description }}
                </p>
                <a
                  target="_blank"
                  v-if="resource.website_url"
                  :href="resource.website_url"
                  class="text-right text-blue-700 block mt-2"
                >
                  View Resource
                </a>
                <a v-else target="_blank" :href="resource.pdf_url"></a>
              </div>
              <router-link
                class="no-underline hover:no-underline flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-base float-right font-semibold shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                to="/resources/life-hacks"
              >
                <strong class="text-blue-100">View All LifeHack Resources</strong>
              </router-link>
            </div>
          </div>
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
      groupedResources: {},
      bipoc: {},
      lgbtqia: {},
      women: {},
      disabilities: {},
      businessResources: [],
      lifeHackResources: [],
      productionResources: [],
    };
  },
  mounted() {
    this.getResources();
  },
  methods: {
    getResources() {
      axios.get("/resources.json").then((response) => {
        this.groupedResources = response.data.grouped;
        this.businessResources = response.data.business;
        this.lifeHackResources = response.data.lifehack;
        this.productionResources = response.data.production;

        this.bipoc =
          this.groupedResources["Identity Based"]["BIPOC"][
            Math.floor(Math.random() * this.groupedResources["Identity Based"]["BIPOC"].length)
          ];

        this.lgbtqia =
          this.groupedResources["Identity Based"]["LGBTQIA"][
            Math.floor(Math.random() * this.groupedResources["Identity Based"]["LGBTQIA"].length)
          ];

        this.women =
          this.groupedResources["Identity Based"]["Women+"][
            Math.floor(Math.random() * this.groupedResources["Identity Based"]["Women+"].length)
          ];

        this.disabilities =
          this.groupedResources["Identity Based"]["Artists with Disabilities"][
            Math.floor(Math.random() * this.groupedResources["Identity Based"]["Artists with Disabilities"].length)
          ];
      });
    },
  },
};
</script>

<style scoped>
.resource-container {
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin: 15px;
  padding: 20px;
}
.desc {
  font-size: 16px;
}
.badge-success {
  font-size: 14px;
  font-weight: 900;
  border-radius: 12px !important;
}
.badge-info {
  font-size: 14px;
  font-weight: 900;
  border-radius: 12px !important;
}
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
@media only screen and (max-width: 768px) {
  .resource-container {
    flex-direction: column;
  }
}
.resource-cards {
  flex: 3;
}
.resource-link {
  text-align: right;
  cursor: pointer;
  color: blue !important;
  text-decoration: underline !important;
}
.resource-card {
  margin-bottom: 15px;
  padding: 20px;
}
img {
  display: block;
  max-width: 250px;
  width: auto;
  height: auto;
  margin-bottom: 15px;
}
.resource-desc {
  text-align: center;
}
.img-desc {
  flex: 1;
  margin: 0 15px 0 15px;
}
.card {
  border: none;
}
img {
  border-radius: 5px;
}
</style>
