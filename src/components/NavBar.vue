<template>
  <header class="bg-blue-950">
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-3 lg:px-6" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5 no-underline hover:no-underline text-blue-200">
          <h4 class="text-blue-200 hover:text-white m-0">
            <strong>Chicago Artist Atlas</strong>
          </h4>
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-semibold leading-6 text-blue-200 no-underline hover:text-white"
          :class="{ active: $route.name == item.name.toLowerCase() }"
        >
          {{ item.name }}
        </a>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
        <a
          href="/login"
          class="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-blue-200 no-underline hover:text-white"
        >
          Log in
        </a>
        <a
          href="/signup"
          class="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline"
        >
          Sign up
        </a>
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
    <Dialog as="div" class="lg:hidden bg-blue-950" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10"></div>
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto p-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-blue-950"
      >
        <div class="flex items-center gap-x-6">
          <a href="/" class="-m-1.5 p-1.5 no-underline hover:no-underline text-blue-200">
            <h4 class="text-blue-200 hover:text-white"><strong>Chicago Artist Atlas</strong></h4>
          </a>
          <a
            href="/signup"
            class="ml-auto rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline"
          >
            Sign up
          </a>
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
                class="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-blue-200 no-underline hover:text-white hover:underline"
                :class="{ active: $route.name == item.name.toLowerCase() }"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="py-6">
              <a
                href="/login"
                class="-mx-3 block px-3 py-2.5 text-base font-semibold leading-7 text-blue-200 no-underline hover:text-white hover:underline"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <a class="navbar-brand" href="#">Chicago Artist Atlas</a>
    <button
      class="navbar-toggler ml-auto mr-3"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav w-100">
        <li class="nav-item active">
          <a class="nav-link" :class="{ active: $route.name == 'home' }" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'directory' }" href="/theater-directory">
            Theater Directory
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'auditions' }" href="/auditions">Auditions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'classes' }" href="/classes">Classes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'resources' }" href="/resources">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: $route.name == 'contact' }" href="/contact">Contact</a>
        </li>
      </ul>
    </div>

    <div>
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style="background-color: #0b0b35; border-color: rgba(255, 255, 255, 0.1); border-width: 1px"
      >
        <i class="fa-solid fa-user" style="opacity: 0.75; color: #ffffff; font-size: 0.75rem"></i>
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="right: 5px">
        <a
          v-if="!isLoggedIn"
          class="dropdown-item"
          href="/signup?path=login"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          :class="{ active: $route.name == 'signup' }"
        >
          Login
        </a>
        <a
          v-if="!isLoggedIn"
          class="dropdown-item"
          href="/signup"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          :class="{ active: $route.name == 'signup' }"
        >
          Signup
        </a>
        <a
          v-if="isLoggedIn"
          class="dropdown-item"
          href="/logout"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          :class="{ active: $route.name == 'signup' }"
        >
          Logout
        </a>
      </div>
    </div>
  </nav> -->
</template>

<script>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
export default {
  props: ["isLoggedIn"],
  components: { Dialog, DialogPanel, Bars3Icon, XMarkIcon },
  data: function () {
    return {
      mobileMenuOpen: false,
      // active: "active",
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

<style>
.active {
  text-decoration: underline !important;
  color: white !important;
}
.navbar-dark.bg-dark {
  background-color: #0b0b35 !important;
}
.nav-item {
  font-size: 14px !important;
}
@media only screen and (min-width: 889px) {
  .navbar-nav {
    display: flex;
    flex-direction: row;
  }
  .status-item {
    justify-content: flex-end !important;
  }
}

@media (min-width: 576px) {
  .dropdown-menu {
    left: 60%;
  }
}

@media (min-width: 768px) {
  .dropdown-menu {
    left: 70%;
  }
}

@media (min-width: 992px) {
  .dropdown-menu {
    left: 88%;
  }
}

@media (min-width: 1200px) {
  .dropdown-menu {
    left: 85%;
  }
}

@media (min-width: 1400px) {
  .dropdown-menu {
    left: 90%;
  }
}
</style>
