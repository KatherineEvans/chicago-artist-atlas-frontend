<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-12 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-blue-950">Log in to your account</h2>
    </div>
    <Transition>
      <div v-if="error" class="text-xs text-rose-700 w-52 m-auto">{{ error }}</div>
    </Transition>
    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="submitLoginForm">
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
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-blue-950 mb-0">Password *</label>
            <div class="text-sm">
              <button
                type="button"
                @click="$emit('modalType', 'forgotPassword')"
                class="font-semibold text-blue-800 hover:text-blue-700"
              >
                Forgot password?
              </button>
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="user.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required="true"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-blue-800 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <button
          type="button"
          @click="$emit('modalType', 'signup')"
          class="underline font-semibold leading-6 text-blue-800 hover:text-blue-700"
        >
          Sign up
        </button>
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {
        email: null,
        password: null,
      },
      userClone: {},
      error: null,
    };
  },
  mounted() {
    this.userClone = JSON.parse(JSON.stringify(this.user));
  },
  methods: {
    submitLoginForm() {
      this.error = null;
      event.preventDefault();
      axios
        .post("/users/sign_in.json", { user: this.user })
        .then((response) => {
          this.$emit("closeModal");
          console.log(response);
          console.log(response);
          localStorage.setItem("authToken", response.headers.authorization);
          localStorage.setItem("userFirstName", response.data.data.user.first_name);
          localStorage.setItem("userLastName", response.data.data.user.last_name);
          localStorage.setItem("tokenGeneratedAt", response.data.data.user.generated_at);
          localStorage.setItem("headshotUrl", response.data.data.user.headshot_url);
          localStorage.setItem("theaterId", response.data.data.user.theater_id);
          axios.defaults.headers.common["Authorization"] = response.headers.authorization;
          this.$store.commit("sessions/setAuthToken", response.headers.authorization);

          // Dispatch getUserProfile function
          this.$store.dispatch("users/getUserProfile");
        })
        .catch((error) => {
          console.log("posted w/errors", error.response.data.messages);
          this.error = error.response.data.messages;
        });
    },
  },
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
