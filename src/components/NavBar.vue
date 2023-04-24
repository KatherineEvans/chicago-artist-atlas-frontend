<template>
  <header class="bg-blue-950">
    <ModalContainer :open="modalOpen" @close-modal="modalOpen = false">
      <template v-slot:content>
        <!-- content for the content slot -->
        <SignUpOptions></SignUpOptions>
      </template>
    </ModalContainer>
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-2 lg:px-6" aria-label="Global">
      <div class="flex lg:flex">
        <a href="/" class="-m-1.5 p-1.5 no-underline hover:no-underline text-blue-100">
          <h4 class="text-blue-100 hover:text-white m-0">
            <strong>Chicago Artist Atlas</strong>
          </h4>
        </a>
      </div>
      <div class="hidden lg:flex">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="p-3 mx-2 text-sm font-semibold leading-6 text-blue-100 hover:underline no-underline hover:text-white rounded"
          :class="{ 'active-test': $route.name == item.name.toLowerCase() }"
        >
          {{ item.name }}
        </a>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
        <a
          href="/login"
          class="px-3 py-2 hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-blue-100 hover:no-underline no-underline hover:text-white rounded"
        >
          Log in
        </a>
        <button
          @click="modalOpen = true"
          class="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline"
        >
          Sign up
        </button>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <Dialog as="div" class="rt-side-nav lg:hidden bg-blue-950" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10"></div>
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-blue-950"
      >
        <div class="flex items-center gap-x-6">
          <a href="/" class="-m-1.5 p-1.5 no-underline hover:no-underline text-blue-100">
            <h4 class="text-2xl text-blue-100 hover:text-white sm:text-base"><strong>Chicago Artist Atlas</strong></h4>
          </a>
          <button
            @click="modalOpen = true"
            class="ml-auto rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline"
          >
            Sign up
          </button>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block p-3 text-base font-semibold leading-7 text-blue-100 hover:no-underline no-underline hover:text-white hover:bg-blue-900 rounded"
                :class="{ active: $route.name == item.name.toLowerCase() }"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="py-6">
              <a
                href="/login"
                class="-mx-3 block p-3 text-base font-semibold leading-7 text-blue-100 no-underline hover:no-underline hover:text-white hover:bg-blue-900 rounded"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import ModalContainer from "./ModalContainer.vue";
import SignUpOptions from "@/views/Authentication/SignUpOptions.vue";
export default {
  props: ["isLoggedIn"],
  components: { Dialog, DialogPanel, Bars3Icon, XMarkIcon, ModalContainer, SignUpOptions },
  data: function () {
    return {
      mobileMenuOpen: false,
      modalOpen: false,
      navigation: [
        {
          name: "Home",
          href: "/",
        },
        {
          name: "Directory",
          href: "/directory",
        },
        {
          name: "Auditions",
          href: "/auditions",
        },
        {
          name: "Classes",
          href: "/classes",
        },
        {
          name: "Resources",
          href: "/resources",
        },
        {
          name: "Contact",
          href: "/contact",
        },
      ],
    };
  },
  watch: {
    isLoggedIn: function () {
      console.log(this.isLoggedIn);
    },
  },
};
</script>

<style scoped>
.active-test {
  color: white !important;
  text-decoration: underline;
}
.active {
  background-color: rgb(30 58 138) !important;
  border-radius: 0.25rem;
  color: white !important;
}

@media (max-width: 576px) {
  .title {
    font-size: 18px !important;
  }
}
@media (min-width: 640px) {
  .sm\:max-w-sm {
    max-width: 26rem !important;
  }
}
</style>
