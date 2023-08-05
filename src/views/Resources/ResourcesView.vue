<template>
  <div class="container-fluid">
    <div class="row bg-blue-50 py-3 px-4 text-center">
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 m-auto my-3">
        <div class="text-3xl font-bold">Resources</div>
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
        <li>
          <div class="flex items-center">
            <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            <a href="/resources" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 underline">
              Resources
            </a>
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
                  Here at Atlas, an inclusive community is paramount to our mission. We know that inclusive theater is
                  great theater! No matter how you identify, Atlias is here to offer support and help you navigate this
                  industry. We strive to offer resources to fit your specific needs, challenges and concerns.
                </p>
              </div>
            </div>
            <div class="resource-cards">
              <div class="card resource-card">
                <div class="mb-2">
                  <h6 class="d-inline">Resource Name</h6>
                  <span
                    class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-sm float-right font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                  >
                    BIPOC
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
                <a href="#" class="text-right">Visit Resource</a>
              </div>
              <div class="card resource-card">
                <div class="mb-2">
                  <h6 class="d-inline">Resource Name</h6>
                  <span
                    class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-sm float-right font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                  >
                    Disability
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
                <a href="#" class="text-right">Visit Resource</a>
              </div>
              <div class="card resource-card">
                <div class="mb-2">
                  <h6 class="d-inline">Resource Name</h6>
                  <span
                    class="inline-flex items-center rounded-full rainbow-background px-2 py-1 text-sm float-right font-medium text-slate-700 ring-1 ring-inset ring-red-600/10"
                  >
                    LGBTQIA+
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
                <a href="#" class="text-right">Visit Resource</a>
              </div>

              <div class="card resource-card">
                <div class="mb-2">
                  <h6 class="d-inline">Resource Name</h6>
                  <span
                    class="inline-flex items-center rounded-full bg-pink-50 px-2 py-1 text-sm float-right font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10"
                  >
                    Women+
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
                <a href="#" class="text-right">Visit Resource</a>
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
                  costumes, props, and so much more... we've got you covered. Enhance your theater career with our
                  extensive repository of practical tools and knowledge.
                </p>
              </div>
            </div>
            <div class="resource-cards">
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
                <a href="#" class="text-right">Visit Resource</a>
              </div>
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
              </div>
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
                <a href="#" class="text-right">Visit Resource</a>
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
          <div class="text-2xl font-bold text-center">#LifeHack Resources</div>
          <div class="resource-container drop-shadow-md bg-blue-100/25">
            <div class="img-desc">
              <img class="lf-img mx-auto mb-3" src="../../assets/resources/life-hack-resources.png" />
              <div class="resource-desc mb-3">
                <p class="px-2 desc">
                  Uncover innovative #LifeHacks designed to streamline your daily routine and boost productivity. With
                  everything from cost and time-saving tips, to trick on navigating life in the city, we aim to empower
                  you with simple yet effective strategies.
                </p>
              </div>
            </div>
            <div class="resource-cards">
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
                <a href="#" class="text-right">Visit Resource</a>
              </div>
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
                <a href="#" class="text-right">Visit Resource</a>
              </div>
              <div class="card resource-card">
                <h6>Resource Name</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at molestie ligula. Etiam id odio
                  scelerisque, euismod ante lacinia, commodo erat. Aliquam varius nec felis sed suscipit. Maecenas id
                  ullamcorper sapien.
                </p>
                <a href="#" class="text-right">Visit Resource</a>
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
    };
  },
  mounted() {
    this.getResources();
  },
  methods: {
    getResources() {
      axios.get("/resources.json").then((response) => {
        this.groupedResources = response.data;
        console.log(this.groupedResources);
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
  padding: 10px;
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