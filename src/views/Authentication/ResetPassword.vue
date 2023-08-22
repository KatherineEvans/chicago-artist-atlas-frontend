<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-12 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-blue-950">
        Let's Reset Your Password!
      </h2>
    </div>

    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="submitPasswordReset">
        <div class="mt-2">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-blue-950">New Password *</label>
          </div>
          <div class="mt-2">
            <input
              v-model="user.password"
              id="password"
              name="password"
              type="password"
              required="true"
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
            <label for="password" class="block text-sm font-medium leading-6 text-blue-950">
              Password Confirmation *
            </label>
          </div>
          <div class="mt-2">
            <input
              v-model="user.password_confirmation"
              id="password-confirmation"
              name="password-confirmation"
              type="password"
              required="true"
              class="block w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div class="text-left" v-if="!passwordConfirmValid">
              <p class="text-xs text-red-700 italic">Password confirmation must match password</p>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="!isSubmittable"
            class="flex w-full justify-center rounded-md bg-blue-800 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 no-underline hover:no-underline disabled:opacity-25"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {
        password: null,
        password_confirmation: null,
        reset_password_token: this.$route.query.reset_token,
      },
      passwordValid: false,
      passwordConfirmValid: true,
      showPasswordValidations: false,
      passwordEl: "",
      passwordConfrimEl: "",
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
    };
  },
  mounted() {
    this.passwordEl = document.querySelector('input[name="password"]');
    this.passwordConfrimEl = document.querySelector('input[name="password-confirmation"]');

    this.passwordEl.addEventListener("focus", this.showPassRules);
    this.passwordEl.addEventListener("blur", this.hidePassRules);
  },
  computed: {
    isSubmittable() {
      if (this.passwordValid && this.passwordConfirmValid && this.user?.password_confirmation?.length > 0) {
        return true;
      }
      return false;
    },
  },
  watch: {
    user: {
      handler: function (val) {
        !!val.password ? this.validatePassword(val.password) : "";
        !!val.password_confirmation ? this.validatePasswordConfirm(val.password, val.password_confirmation) : "";
      },
      deep: true,
    },
  },
  methods: {
    submitPasswordReset() {
      event.preventDefault();
      axios
        .patch("/users/password.json", { user: this.user })
        .then((response) => {
          this.$emit("modalType", "login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showPassRules() {
      this.showPasswordValidations = true;
    },
    hidePassRules() {
      this.showPasswordValidations = false;
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
  },
};
</script>
<style scoped></style>
