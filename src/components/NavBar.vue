<template>
  <header class="bg-blue-950">
    <ModalContainer :open="modalOpen" @close-modal="closeModal">
      <template v-slot:content>
        <!-- content for the content slot -->
        <SignUpOptions
          v-if="modalType == 'signUpOptionsModal'"
          @modal-type="(type) => (modalType = type)"
        ></SignUpOptions>
        <SignUpForm v-if="modalType == 'signup'" @modal-type="(type) => (modalType = type)"></SignUpForm>
        <LoginForm v-if="modalType == 'login'" @modal-type="(type) => (modalType = type)"></LoginForm>
        <ForgotPassword
          v-if="modalType == 'forgotPassword'"
          @modal-type="(type) => (modalType = type)"
        ></ForgotPassword>
        <ResetPassword v-if="modalType == 'resetPassword'" @modal-type="(type) => (modalType = type)"></ResetPassword>
      </template>
    </ModalContainer>
    <nav class="lg:mx-5 md:mx-3 sm:mx-1 flex items-center justify-between gap-x-6 p-2 lg:px-6" aria-label="Global">
      <div class="flex lg:flex">
        <a href="/" class="-m-1.5 p-1.5 no-underline hover:no-underline text-blue-100">
          <p class="lg:text-3xl md:text-2xl text-lg text-blue-100 hover:text-white m-0">Chicago Artist Atlas</p>
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
      <div v-if="!isLoggedIn" class="flex flex-1 items-center justify-end gap-x-6">
        <button
          @click="openModal('login')"
          class="px-3 py-2 hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-blue-100 hover:no-underline no-underline hover:text-white rounded"
        >
          Log in
        </button>
        <button
          @click="openModal('signUpOptionsModal')"
          class="rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline"
        >
          Sign up
        </button>
      </div>
      <div v-else class="flex flex-1 items-center justify-end gap-x-6">
        <!-- <div class="flex">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileUserMenuOpen = true"
          >
            <span class="sr-only">Open user menu</span>
            <i
              class="text-blue-100 lg:text-3xl md:text-2xl text-xl h-10 w-10 rounded-full fa-solid fa-user lg:pt-2 md:pt-3 pt-2"
            ></i>
          </button>
        </div> -->
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton>
              <span class="sr-only">Open user menu</span>
              <i
                class="text-blue-100 lg:text-3xl md:text-2xl text-xl h-10 w-10 rounded-full fa-solid fa-user lg:pt-2 md:pt-3 pt-2"
              ></i>
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
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="px-4 pt-3 pb-2">
                <p class="text-sm mb-1">Signed in as</p>
                <p class="truncate text-sm font-medium text-gray-900 mb-1">tom@example.com</p>
              </div>
              <div class="py-2">
                <MenuItem v-slot="{ active }">
                  <a
                    href="/user/account"
                    class="no-underline hover:no-underline"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                  >
                    Account settings
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="/user/profile"
                    class="no-underline hover:no-underline"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                  >
                    Artist Profile
                  </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="/user/auditions"
                    class="no-underline hover:no-underline"
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"
                  >
                    Saved Auditions
                  </a>
                </MenuItem>
              </div>
              <div class="py-2">
                <form method="POST" action="#">
                  <MenuItem v-slot="{ active }">
                    <button
                      type="submit"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm',
                      ]"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="text-blue-100 h-6 w-6" aria-hidden="true" />
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
            <h4 class="text-blue-100 hover:text-white lg:text-3xl md:text-2xl text-lg">Chicago Artist Atlas</h4>
          </a>
          <button
            @click="modalOpen = true"
            v-if="!isLoggedIn"
            class="ml-auto rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline"
          >
            Sign up
          </button>
          <button type="button" class="ml-auto -m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="text-blue-100 h-6 w-6" aria-hidden="true" />
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
            <div class="py-6" v-if="!isLoggedIn">
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
import { Menu, MenuItem, MenuItems, MenuButton } from "@headlessui/vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import ModalContainer from "./ModalContainer.vue";
import SignUpOptions from "@/views/Authentication/SignUpOptions.vue";
import SignUpForm from "@/views/Authentication/SignUpForm.vue";
import LoginForm from "@/views/Authentication/LoginForm.vue";
import ForgotPassword from "@/views/Authentication/ForgotPassword.vue";
import ResetPassword from "@/views/Authentication/ResetPassword.vue";
import { mapState } from "vuex";

export default {
  props: ["isLoggedIn"],
  components: {
    Dialog,
    DialogPanel,
    Bars3Icon,
    XMarkIcon,
    ModalContainer,
    SignUpOptions,
    SignUpForm,
    LoginForm,
    ForgotPassword,
    ResetPassword,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  data: function () {
    return {
      mobileMenuOpen: false,
      mobileUserMenuOpen: false,
      modalOpen: false,
      modalType: "signUpOptionsModal",
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
  computed: mapState("sessions", ["passwordResetToken"]),
  methods: {
    closeModal() {
      this.modalOpen = false;
      setTimeout(() => {
        this.modalType = "signUpOptionsModal";
      }, 200);
    },
    openModal(type) {
      this.modalOpen = true;
      this.modalType = type;
    },
  },
  watch: {
    isLoggedIn: function () {
      console.log(this.isLoggedIn);
    },
    passwordResetToken(newValue, oldValue) {
      this.modalType = "resetPassword";
      this.modalOpen = true;
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
