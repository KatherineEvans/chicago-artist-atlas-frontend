<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-12 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-blue-950">
        Signup for your new account!
      </h2>
    </div>
    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="submitRegestrationForm">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm font-medium leading-6 text-blue-950 text-left mb-0 mt-2">
              First name *
            </label>
            <div class="mt-1">
              <input
                v-model="user.first_name"
                type="text"
                title="first-name"
                name="first-name"
                id="first-name"
                class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm font-medium leading-6 text-blue-950 text-left mb-0 mt-2">
              Last name *
            </label>
            <div class="mt-1">
              <input
                v-model="user.last_name"
                type="text"
                name="last-name"
                id="last-name"
                class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div class="mt-3">
          <label for="email" class="block text-sm font-medium leading-6 text-blue-950 text-left mb-0 mt-2">
            Email *
          </label>
          <div class="mt-1">
            <input
              v-model="user.email"
              title="email"
              id="email"
              name="email"
              type="email"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div class="text-left" v-if="!emailValid">
              <p class="text-xs text-red-700 italic">Invalid email address</p>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-blue-950 mb-0 mt-2">Password *</label>
          </div>
          <div class="mt-1">
            <input
              v-model="user.password"
              id="password"
              name="password"
              type="password"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div class="text-left mt-2 ml-1" v-if="showPasswordValidations">
              <p
                class="mb-1 text-xs italic"
                v-for="rule in passReg"
                :key="rule.error"
                :class="[rule.flagged ? 'text-green-700' : 'text-red-700']"
              >
                <i v-if="rule.flagged" class="fa-regular fa-circle-check mr-2"></i>
                <i v-else class="fa-regular fa-circle-xmark mr-2"></i>
                {{ rule.error }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <div class="flex items-center justify-between">
            <label for="password-confirmation" class="block text-sm font-medium leading-6 text-blue-950 mb-0 mt-2">
              Password Confirmation *
            </label>
          </div>
          <div class="mt-1">
            <input
              v-model="user.password_confirmation"
              id="password-confirmation"
              name="password-confirmation"
              type="password"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div class="text-left" v-if="!passwordConfirmValid">
              <p class="text-xs text-red-700 italic">Password confirmation must match password</p>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <small class="mb-2 text-sm italic text-red-700" v-if="submissionError">
            {{ submissionError }}
          </small>
          <button
            :disabled="!isSubmittable"
            type="submit"
            class="flex w-full justify-center rounded-md bg-blue-800 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline disabled:opacity-25"
          >
            Register
          </button>
        </div>
      </form>
      <p class="mt-10 text-center text-sm text-gray-500">
        Already a member?
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
import axios from "axios";
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
      showPasswordValidations: false,
      emailValid: true,
      passwordValid: true,
      passwordConfirmValid: true,
      emailEl: "",
      passwordEl: "",
      passwordConfrimEl: "",
      emailReg: new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\.[a-zA-Z]{2,}$"),
      passReg: [
        {
          regexExp: new RegExp("(?=.*[0-9])"),
          error: "Must include one number",
          flagged: false,
        },
        {
          regexExp: new RegExp("(?=.*[a-z])"),
          error: "Must include one uppercase letter",
          flagged: false,
        },
        {
          regexExp: new RegExp("(?=.*[A-Z])"),
          error: "Must include one lowercase letter",
          flagged: false,
        },
        {
          regexExp: new RegExp("(?=.*[!@#$%^&*]+)(?![.\n])"),
          error: "Must include one special character",
          flagged: false,
        },
        {
          regexExp: new RegExp("(?=^.{12,}$)"),
          error: "Must be at least 12 characters in length",
          flagged: false,
        },
      ],
      userClone: {},
      errors: null,
      submissionError: "",
    };
  },
  mounted() {
    this.emailEl = document.querySelector('input[name="email"]');
    this.passwordEl = document.querySelector('input[name="password"]');
    this.passwordConfrimEl = document.querySelector('input[name="password-confirmation"]');

    this.passwordEl.addEventListener("focus", this.showPassRules);
    this.passwordEl.addEventListener("blur", this.hidePassRules);
  },
  computed: {
    isSubmittable() {
      let userIsSet = Object.values(this.user).every(Boolean);
      if (userIsSet && this.emailValid && this.passwordValid && this.passwordConfirmValid) {
        return true;
      }
      return false;
    },
  },
  watch: {
    user: {
      handler: function (val) {
        !!val.email ? this.validateEmail(val.email) : "";
        !!val.password ? this.validatePassword(val.password) : "";
        !!val.password_confirmation ? this.validatePasswordConfirm(val.password, val.password_confirmation) : "";
      },
      deep: true,
    },
  },
  methods: {
    showPassRules() {
      this.showPasswordValidations = true;
    },
    hidePassRules() {
      this.showPasswordValidations = false;
    },
    validateEmail(email) {
      this.emailValid = !!email && !this.emailReg.test(email) ? false : true;
      if (!this.emailValid) {
        this.emailEl.classList.remove("focus:ring-indigo-600");
        this.emailEl.classList.add("focus:ring-red-600", "ring-red-600");
      } else {
        this.emailEl.classList.remove("focus:ring-red-600", "ring-red-600");
        this.emailEl.classList.add("focus:ring-indigo-600");
      }
    },
    validatePassword(password) {
      let rulesPassed = [];

      this.passReg.forEach((rule) => {
        rule.regexExp.test(password)
          ? [(rule.flagged = true), rulesPassed.push(true)]
          : [(rule.flagged = false), , rulesPassed.push(false)];
      });

      this.passwordValid = !!password && !rulesPassed.includes(false);

      if (!this.passwordValid) {
        this.passwordEl.classList.remove("focus:ring-indigo-600");
        this.passwordEl.classList.add("focus:ring-red-600", "ring-red-600");
      } else {
        this.passwordEl.classList.remove("focus:ring-red-600", "ring-red-600");
        this.passwordEl.classList.add("focus:ring-indigo-600");
      }
    },
    validatePasswordConfirm(password, passwordConfirm) {
      if (password === passwordConfirm) {
        this.passwordConfirmValid = true;
        this.passwordConfrimEl.classList.remove("focus:ring-red-600", "ring-red-600");
        this.passwordConfrimEl.classList.add("focus:ring-indigo-600");
      } else {
        this.passwordConfirmValid = false;
        this.passwordConfrimEl.classList.remove("focus:ring-indigo-600");
        this.passwordConfrimEl.classList.add("focus:ring-red-600", "ring-red-600");
      }
    },
    submitRegestrationForm() {
      this.errors = [];
      if (this.isSubmittable) {
        event.preventDefault();
        axios
          .post("/users.json", { user: this.user })
          .then((response) => {
            // console.log("signup posted w/response", response);
            // commit("setUserInfo", response);
            // commit("setDefaultUserInfo", response);
          })
          .catch((error) => {
            console.log(error);
            // commit("setErrors", error.response.data.status.message);
            // console.log("signup posted w/errors", error.response.data.status.message);
            // return error.response.data.status.message;
          });
      } else {
        event.preventDefault();
        this.submissionError = "Please make sure all fields are filled out.";
      }
    },
  },
};
</script>
<style scoped></style>
