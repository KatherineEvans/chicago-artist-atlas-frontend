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
      <div class="flex flex-1 items-center justify-end gap-x-6">
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
            <h4 class="text-blue-100 hover:text-white lg:text-3xl md:text-2xl text-lg">Chicago Artist Atlas</h4>
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
  },
  data: function () {
    return {
      mobileMenuOpen: false,
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
