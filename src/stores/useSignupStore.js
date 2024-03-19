import { defineStore } from "pinia";

export const useSignupStore = defineStore("signup", {
  persist: true,
  state: () => ({
    signupType: null,
    signupPrice: null,
    productName: null,
    discountCode: null,
    frequency: null,
    step: 1,
    user: {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirmation: null,
    },
    address: {
      billing_addr1: null,
      billing_addr2: null,
      billing_city: null,
      billing_state_code: null,
      billing_zip: null,
      billing_country: "US",
    },
  }),
  actions: {
    resetState() {
      this.step = 1;
      this.signupType = null;
      this.signupPrice = null;
      this.productName = null;
      this.discountCode = null;

      this.user = {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null,
      };

      this.address = {
        billing_addr1: null,
        billing_addr2: null,
        billing_city: null,
        billing_state_code: null,
        billing_zip: null,
        billing_country: "US",
      };
    },
  },
  getters: {},
});
