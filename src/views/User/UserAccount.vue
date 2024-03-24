<template>
  <div>
    <div class="space-y-12">
      <div class="pb-12">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Account Information</h2>
        <!-- <p class="mt-1 text-sm leading-6 text-gray-600">Hello! We're glad you're here.</p> -->

        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first_name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
            <div class="mt-2">
              <input
                type="text"
                name="first_name"
                id="first_name"
                v-model="user.first_name"
                autocomplete="given-name"
                class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="last_name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
            <div class="mt-2">
              <input
                type="text"
                name="last_name"
                v-model="user.last_name"
                id="last_name"
                autocomplete="family-name"
                class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="col-span-full">
            <label for="street_address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
            <div class="mt-2">
              <input
                type="text"
                name="street_address"
                id="street_address"
                v-model="address.street"
                autocomplete="street-address"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3 sm:col-start-1">
            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
            <div class="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                v-model="address.city"
                autocomplete="city"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
            <div class="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                v-model="address.state"
                autocomplete="region"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <div class="mt-2">
              <select
                id="country"
                name="country"
                v-model="address.country"
                autocomplete="country-name"
                class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="postal_code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
            <div class="mt-2">
              <input
                type="text"
                name="postal_code"
                id="postal_code"
                v-model="address.postal_code"
                autocomplete="postal-code"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          We'll always let you know about important changes, but you pick what else you want to hear about.
        </p>

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
            <div class="mt-6 space-y-6">
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div class="text-sm leading-6">
                  <label for="comments" class="font-medium text-gray-900">Comments</label>
                  <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div class="text-sm leading-6">
                  <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                  <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div class="text-sm leading-6">
                  <label for="offers" class="font-medium text-gray-900">Offers</label>
                  <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
            <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">
                  Everything
                </label>
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">
                  No push notifications
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div> -->
    </div>
    <div>
      <div class="bg-gray-50 rounded border">
        <div class="my-3 p-4 sm:p-6">
          <h3 class="text-lg font-semibold leading-6 text-gray-900">Manage subscription: <span class="font-normal italic">Basic Artist Membership</span></h3>
          <div class="mt-2 max-w-xl text-base text-gray-500">
            <p>Standby, more subscription options coming soon!</p>
          </div>
          <div class="mt-5">
            <button
              type="button"
              :disabled="true"
              class="inline-flex items-center rounded-md bg-indigo-600/30 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Change plan
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 flex items-center justify-end gap-x-6">
      <!-- <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button> -->
      <button
        type="button"
        @click="updateUser()"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useAlertStore } from '../../stores/useAlertStore.js';

export default {
  data: function () {
    return {
      user: {},
      address: {
        street: null,
        city: null,
        state: null,
        country: null,
        postal_code: null,
      }
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios.get("/current_user.json").then((response) => {
        this.user = response.data;
        if (response.data.address) {
          this.address = {
            street: response.data.address.address1,
            city: response.data.address.city,
            state: response.data.address.state,
            country: response.data.address.country,
            postal_code: response.data.address.postal_code,
          }
        }
      });
    },
    updateUser() {
      axios
        .patch("/current_user.json", { user: this.user, address: this.address})
        .then((response) => {
          let message = {
            title: "Successfully Saved!",
            body: "Your account information has been successfully saved.",
            icon: "success",
          };
          useAlertStore().setMessage(message);
        })
        .catch((error) => {
          let message = {
            title: "Whoops!",
            body: "Looks like something went wrong. Please try again. If error persists, email info@chiartistatlas.com",
            icon: "failure",
          };
          useAlertStore().setMessage(message);
        });
    },
  },
};
</script>
