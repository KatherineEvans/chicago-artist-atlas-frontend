<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-12 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-blue-950">Forgot Password?</h2>
      <p class="text-sm text-center text-blue-950">
        Enter your email address and we'll help you reset your password! If we find your account, you'll be emailed a
        password reset link.
      </p>
    </div>

    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="submitPasswordReset">
        <div>
          <label for="email" class="block text-sm text-left font-medium leading-6 text-blue-950">Email *</label>
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

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-blue-800 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline"
          >
            Reset Password
          </button>
        </div>
      </form>

      <p class="text-center text-sm mt-10">
        <button
          @click="$emit('modalType', 'login')"
          class="underline font-semibold leading-6 text-blue-800 hover:text-blue-700"
        >
          Back
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
        email: null,
      },
    };
  },
  methods: {
    submitPasswordReset() {
      event.preventDefault();
      this.$store.dispatch("sessions/resetUserPassword", { user: this.user }).then(() => {
        // console.log("password email request");
      });
    },
  },
};
</script>
<style scoped></style>
