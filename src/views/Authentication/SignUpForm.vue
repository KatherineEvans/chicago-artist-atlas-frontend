<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-8 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-blue-950">
        Let's create your account!
      </h2>
    </div>
    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="space-y-2">

        <!-- STEP 1 -->
        <div v-if="signupStore.step === 1">
          <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium leading-6 text-blue-950 text-left mb-0 mt-2">
                First name *
              </label>
              <div class="mt-1">
                <input
                  v-model="signupStore.user.first_name"
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
                  v-model="signupStore.user.last_name"
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
                v-model="signupStore.user.email"
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
                v-model="signupStore.user.password"
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
                v-model="signupStore.user.password_confirmation"
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
        </div>

        <!-- STEP 2 -->
        <div class="mt-2" v-if="signupStore.step === 2">
          <div class="bg-gray-200 rounded-md w-100 p-4">
            <div class="text-lg mb-4 underline">Your subscription summary</div>
            <div class="text-right">
              <div class="border-b-2 border-slate-900 pb-3">
                <div class="text-sm font-semibold">{{ signupStore.productName }}</div>
                <div>
                  <span class="text-base font-bold">${{ formattedPrice }}</span>
                  <span class="text-sm text-gray-600 italic">{{ " " }} {{ signupStore.frequency }}</span>
                </div>
              </div>
              <div class="flex flex-row justify-between mt-6">
                <div class="text-base">TOTAL:</div>
                <div class="text">${{ formattedPrice }}</div>
              </div> 
            </div>
          </div>
          <span>
            <div class="flex items-center justify-between">
              <label for="password-confirmation" class="block text-sm font-medium leading-6 text-blue-950 mb-0 my-4">
                Card *
              </label>
            </div>
            <CardComponent class="block w-full grid grid-cols-2 gap-4" ref="cardComponent">
              <CardNumber class="col-span-2 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" :placeholder="'4111 1111 1111 1111'" />
              <CardExpiry class="col-span-1 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" :placeholder="'MM / YY'" />
              <CardCvv class="col-span-1 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" :placeholder="'CVV'" />
            </CardComponent>
            <small class="text-red-600" v-if="cardErrors">{{ cardErrors }}</small>
          </span>
          <!-- <div class="mt-3">
            <label for="email" class="block text-sm font-medium leading-6 text-blue-950 text-left mb-0 mt-2">
              Discount Code
            </label>
            <div class="mt-1">
              <input
                v-model="signupStore.discountCode"
                title="discount"
                id="discount"
                name="discount"
                type="text"
                class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> -->
        </div>

        <!-- ERRORS/BUTTONS -->
        <div class="pt-4">
          <small class="mb-2 text-sm italic text-red-700" v-if="submissionError">
            {{ submissionError }}
          </small>
          <!-- <button
            type="button"
            :disabled="!isSubmittable"
            v-if="signupStore.step === 1"
            class="flex w-full justify-center rounded-md bg-blue-800 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline disabled:opacity-25"
            @click="signupStore.step = 2"
          >
            Continue
          </button> -->
          <button
            @click="submitRegestrationForm"
            type="button"
            :disabled="isLoading"
            class="flex w-full justify-center rounded-md bg-blue-800 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline disabled:opacity-25"
          >
            <svg 
              v-if="isLoading"
              class="animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24">
            </svg>
            <span v-if="isLoading">Processing...</span>
            <span v-else>Register</span>
          </button>
          <div v-if="signupStore.step == 2" class="flex w-full justify-center text-sm mt-3 cursor-pointer" @click="signupStore.step = 1">
            <ArrowLongLeftIcon
              class="my-auto h-5 w-5 mr-2"
              aria-hidden="true"
            />
            Back
          </div>
        </div>
      </div>
      <p class="mt-4 text-center text-sm text-gray-500">
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
import { mapStores } from 'pinia';
import { useUserStore } from '../../stores/useUserStore.js';
import { useSignupStore } from '../../stores/useSignupStore.js';
import { CardComponent, CardNumber, CardExpiry, CardCvv } from '@chargebee/chargebee-js-vue-wrapper';
import { ArrowLongLeftIcon } from "@heroicons/vue/24/outline";

export default {
  components: { CardComponent, CardNumber, CardExpiry, CardCvv, ArrowLongLeftIcon },
  data: function () {
    return {
      isLoading: false,
      cardErrors: null,
      user: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      classes: {
        // focus: 'border-t-4 border-indigo-500 rounded',
        // complete: 'border-t-4 border-grey-500 rounded',
        invalid: 'border-red-500',
        // empty: 'border-t-4 border-grey-500 rounded'
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
          error: "Must include one lowercase letter",
          flagged: false,
        },
        {
          regexExp: new RegExp("(?=.*[A-Z])"),
          error: "Must include one uppercase letter",
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
    this.signupStore.resetState();
    this.emailEl = document.querySelector('input[name="email"]');
    this.passwordEl = document.querySelector('input[name="password"]');
    this.passwordConfrimEl = document.querySelector('input[name="password-confirmation"]');

    this.passwordEl.addEventListener("focus", this.showPassRules);
    this.passwordEl.addEventListener("blur", this.hidePassRules);

    let cbInstance = Chargebee.init({
      site: "chiartistatlas-test", // your test site
      publishableKey: process.env.VUE_APP_CHARGEBEE_PUBLISHABLE_KEY,
    })
  },
  computed: {
    ...mapStores(useUserStore, useSignupStore),
    formattedPrice(){
      return parseFloat(this.signupStore.signupPrice) * 0.01
    },
    isSubmittable() {
      let userIsSet = Object.values(this.signupStore.user).every(Boolean);
      if (userIsSet && this.emailValid && this.passwordValid && this.passwordConfirmValid) {
        return true;
      }
      return false;
    },
  },
  watch: {
    'signupStore.user': {
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
      this.isLoading = true;
      this.errors = [];
      this.cardErrors = null;
      event.preventDefault()
      // this.$refs.cardComponent.tokenize({
      //   firstName: this.signupStore.user.first_name,
      //   lastName: this.signupStore.user.last_name,
      //   addressLine1: this.signupStore.billing_addr1,
      //   addressLine2: this.signupStore.billing_addr2,
      //   city: this.signupStore.billing_city,
      //   state: this.signupStore.billing_city,
      //   stateCode: this.signupStore.billing_state_code,
      //   zip: this.signupStore.billing_zip,
      //   countryCode: "US",
      // }).then(data => {
      //   console.log('chargebee token', data.token)
      // }).catch((error) => {
      //   this.cardErrors = error;
      // });
      if (this.isSubmittable) {
        event.preventDefault();
        axios
          .post("/users.json", { user: this.signupStore.user, subscription: this.userStore.signupType })
          .then((response) => {
            // open login screen
            console.log(response);
            this.isLoading = false;
            this.$emit("modalType", "login");
          })
          .catch((error) => {
            console.log("signup posted w/errors", error);
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
