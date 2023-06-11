<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-12 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-blue-950">
        Register for your account
      </h2>
    </div>
    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="submitRegestrationForm">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-blue-950 text-left">
              First name *
            </label>
            <div class="mt-2">
              <input
                v-model="user.first_name"
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-blue-950 text-left">
              Last name *
            </label>
            <div class="mt-2">
              <input
                v-model="user.last_name"
                type="text"
                name="last-name"
                id="last-name"
                autocomplete="family-name"
                class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div class="mt-2">
          <label for="email" class="block text-sm font-medium leading-6 text-blue-950 text-left">Email *</label>
          <div class="mt-2">
            <input
              v-model="user.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="mt-2">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-blue-950">Password *</label>
          </div>
          <div class="mt-2">
            <input
              v-model="user.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="mt-2">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-blue-950">
              Password Confirmation *
            </label>
          </div>
          <div class="mt-2">
            <input
              v-model="user.password_confirmation"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div class="mt-6">
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-blue-800 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline"
          >
            Register
          </button>
        </div>
      </form>
      <p class="mt-10 text-center text-sm text-gray-500">
        Already a member?
        {{ " " }}
        <button
          @click="$emit('modalType', 'login')"
          class="underline font-semibold leading-6 text-blue-800 hover:text-blue-700"
        >
          Log in
        </button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      user: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      userClone: {},
      errors: [],
    };
  },
  mounted() {
    this.userClone = JSON.parse(JSON.stringify(this.user));
    this.$store.watch(
      () => this.$store.state.sessions.errors,
      (newErrors) => {
        this.errors = newErrors;
      }
    );
  },
  methods: {
    submitRegestrationForm() {
      this.errors = [];
      event.preventDefault();
      this.$store.dispatch("sessions/registerUser", { user: this.user }).then(() => {
        this.user = this.userClone;
      });
    },
  },
};
</script>
<style scoped></style>
