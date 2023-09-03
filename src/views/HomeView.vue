<template>
  <BannerImage />
  <div class="home mx-auto text-center">
    <div class="bg-blue-50 p-10">
      <p class="text-2xl md:text-3xl font-bold mb-3">
        Atlas is the ultimate destination for Chicago theatre artists and makers.
      </p>
      <p class="text-lg">
        We combine vital information in an easily navigated, one-stop-shop with original content from experts in our
        community to guide you on your journey.
      </p>
    </div>
    <ModalContainer :open="modalOpen" @close-modal="closeModal">
      <template v-slot:content>
        <div style="max-width: 500px">
          <div class="text-xl font-bold mb-2">Classes coming soon!</div>
          <div class="text-base">
            Are you a teacher or a coach in the performing arts space? You've come to the right place! We need dedicated
            professionals just like you to share your craft. For more info, visit the links below.
          </div>
          <div>
            <div
              class="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-4 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none sm:grid-cols-2"
            >
              <article
                v-for="link in pdfLinks"
                :key="link.name"
                class="flex max-w-xl flex-col items-start justify-between mx-auto hover:bg-blue-50/50"
              >
                <div class="group relative border rounded px-2">
                  <h3 class="mt-3 text-lg font-semibold leading-6 text-blue-700">
                    <a :href="link.href" target="_blank">
                      <span class="absolute inset-0" />
                      {{ link.name }}
                    </a>
                  </h3>
                  <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{{ link.description }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </template>
    </ModalContainer>
    <!-- CURRENT RESOURCES -->
    <div class="py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 container">
        <div class="col-span-1 md:col-span-3">
          <p class="text-xl md:text-2xl lg:text-3xl font-bold mb-1">Atlas Directories</p>
          <div class="mx-auto col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12">
            <p class="text-lg">Explore opportunities in the Chicago Theatre community!</p>
          </div>
        </div>
        <div class="col-span-1 p-2">
          <a href="/auditions" class="h-100 card mx-auto text-center drop-shadow-md">
            <img class="m-auto pb-2 pt-4" src="../assets/illustrations/auditions.png" alt="" />
            <div class="card-body">
              <div class="mb-1">
                <p class="text-xl font-bold mb-3">Auditions</p>
                <div>
                  <p class="mb-2 text-base">
                    Navigate available theatre, television, and film auditions in the Chicagoland area.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-span-1 p-2">
          <a href="/directory" class="drop-shadow-md h-100 card mx-auto text-center">
            <img class="m-auto pb-2 pt-4" src="../assets/illustrations/directories.png" alt="" />
            <div class="card-body">
              <div class="mb-1">
                <div class="text-xl font-bold mb-3">Theatres</div>
                <div>
                  <p class="mb-2 text-base">
                    Explore the wide and varied landscape of Chicago theatre with our comprehensive directory.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-span-1 p-2">
          <a @click="modalOpen = true" class="drop-shadow-md h-100 card mx-auto text-center">
            <img class="m-auto pb-2 pt-4" src="../assets/illustrations/classes.png" alt="" />
            <div class="card-body">
              <div class="mb-1">
                <p class="text-xl font-bold mb-3">Classes</p>
                <div>
                  <p class="mb-2 text-base">
                    Delve into Atlas's exceptional classes for creatives, and perfect your craft with lessons from
                    industry leaders and experts.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- COMING SOON -->
    <div class="py-10 bg-blue-50 mb-0">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 container">
        <div class="col-span-1 md:col-span-3">
          <p class="text-xl md:text-2xl lg:text-3xl font-bold mb-1">Atlas Resources</p>
          <div class="mx-auto col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12">
            <p class="text-lg">
              Here at Atlas, we're focused on providing our users with the latest resources on topics that matter -
              inclusivity, diversity, sustainability, and the business of theatre! We strive to continually improve and
              grow our resource respository to best serve the Chicago theatre community.
            </p>
            <!-- <a style="text-decoration: underline" href="/resources">View all resources</a> -->
          </div>
        </div>
        <div class="col-span-1 p-2">
          <a href="/resources" class="drop-shadow-md h-100 card mx-auto text-center">
            <img class="m-auto pb-2 pt-4" src="../assets/illustrations/identity.png" alt="" />
            <div class="card-body">
              <div class="mb-1">
                <p class="text-xl font-bold mb-3">Identity Resources</p>
                <div>
                  <p class="mb-2 text-base">
                    A collection of resources centered around diverse experiences, including: BIPOC, LGBTQIA+,
                    Female-Identifying, and ADA resources.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-span-1 p-2">
          <a href="/resources" class="drop-shadow-md h-100 card mx-auto text-center">
            <img class="m-auto pb-2 pt-4" src="../assets/illustrations/business.png" alt="" />
            <div class="card-body">
              <div class="mb-1">
                <p class="text-xl font-bold mb-3">Business Resources for Artist</p>
                <div>
                  <p class="mb-2 text-base">
                    Enhance your theatre career with our extensive collection of practical tools and knowledge geared
                    towards your business in show business.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-span-1 p-2">
          <a href="/resources" class="drop-shadow-md h-100 card mx-auto text-center">
            <img class="m-auto pb-2 pt-4" src="../assets/illustrations/lifehacks.png" alt="" />
            <div class="card-body">
              <div class="mb-1">
                <p class="text-xl font-bold mb-3">#LifeHacks</p>
                <div>
                  <p class="mb-2 text-base">
                    Uncover innovative #LifeHacks designed to streamline your daily routine and boost productivity. We
                    aim to empower you with simple yet effective strategies for success!
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerImage from "@/components/BannerImage.vue";
import ModalContainer from "../components/ModalContainer.vue";

export default {
  components: { BannerImage, ModalContainer },
  data: function () {
    return {
      lightBlueDiv: "light-blue-div",
      modalOpen: false,
      pdfLinks: [
        {
          name: "For Teachers",
          href: "/pdfs/Teacher_Pay_Structure.pdf",
          description: "Are you a teacher in the performing arts? We're interested in working with you!",
        },
        {
          name: "For Coaches",
          href: "/pdfs/Coach_Pay_Structure.pdf",
          description: "Are you a coach in the performing arts? We're interested in working with you!",
        },
      ],
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
  methods: {
    closeModal() {
      this.modalOpen = false;
    },
  },
};
</script>
<style scoped>
img {
  max-width: 150px;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
a:hover {
  color: #2c3e50;
}
.card {
  max-width: 350px !important;
}
.card-text {
  text-align: left;
}
</style>
