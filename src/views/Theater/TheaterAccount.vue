<template>
  <div>
    <div class="space-y-12">
      <div class="pb-12">
        <h2 class="font-semibold leading-7 text-gray-900 py-3 underline">Theater Information</h2>
        <!-- <p class="mt-1 text-sm leading-6 text-gray-600">Hello! We're glad you're here.</p> -->

        <div class="mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="theaterName" class="block text-sm font-medium leading-6 text-gray-900">Theater Name</label>
            <div class="mt-2">
              <input
                type="text"
                name="theaterName"
                id="theaterName"
                v-model="theater.name"
                autocomplete="street-address"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="website" class="block text-sm font-medium leading-6 text-gray-900">Website</label>
            <div class="mt-2">
              <input
                type="text"
                name="website"
                id="website"
                v-model="theater.website"
                class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="contact_name" class="block text-sm font-medium leading-6 text-gray-900">Contact Name</label>
            <div class="mt-2">
              <input
                type="text"
                name="contact_name"
                id="contact_name"
                v-model="theater.contact_name"
                class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="contact_email" class="block text-sm font-medium leading-6 text-gray-900">Contact Email</label>
            <div class="mt-2">
              <input
                type="text"
                name="contact_email"
                v-model="theater.contact_email"
                id="contact_email"
                class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="col-span-full">
            <div class="font-semibold leading-7 text-gray-900 py-3 underline mt-3">Theater Address</div>
            <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <div>
                <label for="theaterAddress1" class="block text-sm font-medium leading-6 text-gray-900 my-3">Street Address 1</label>
                <input
                  type="text"
                  name="theaterAddress1"
                  id="theaterAddress1"
                  v-model="performanceAddress.address1"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label for="theaterAddress2" class="block text-sm font-medium leading-6 text-gray-900 my-3">Street Address 2</label>
                <input
                  type="text"
                  name="theaterAddress2"
                  id="theaterAddress2"
                  v-model="performanceAddress.address2"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label for="theaterAddress3" class="block text-sm font-medium leading-6 text-gray-900 my-3">Street Address 3</label>
                <input
                  type="text"
                  name="theaterAddress3"
                  id="theaterAddress3"
                  v-model="performanceAddress.address3"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-4">
              <div>
                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    v-model="performanceAddress.city"
                    autocomplete="city"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    v-model="performanceAddress.state"
                    autocomplete="region"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                <div class="mt-2">
                  <select
                    id="country"
                    name="country"
                    v-model="performanceAddress.country"
                    autocomplete="country-name"
                    class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
                  >
                    <option value="US">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                </div>
              </div>
              <div>
                <label for="postal_code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    v-model="performanceAddress.postal_code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-full">
            <div class="font-semibold leading-7 text-gray-900 py-3 underline mt-3">Business Address</div>
            <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3">
              <div>
                <label for="theaterAddress1" class="block text-sm font-medium leading-6 text-gray-900 my-3">Street Address 1</label>
                <input
                  type="text"
                  name="theaterAddress1"
                  id="theaterAddress1"
                  v-model="businessAddress.address1"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label for="theaterAddress2" class="block text-sm font-medium leading-6 text-gray-900 my-3">Street Address 2</label>
                <input
                  type="text"
                  name="theaterAddress2"
                  id="theaterAddress2"
                  v-model="businessAddress.address2"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label for="theaterAddress3" class="block text-sm font-medium leading-6 text-gray-900 my-3">Street Address 3</label>
                <input
                  type="text"
                  name="theaterAddress3"
                  id="theaterAddress3"
                  v-model="businessAddress.address3"
                  autocomplete="street-address"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-4">
              <div>
                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    v-model="businessAddress.city"
                    autocomplete="city"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    v-model="businessAddress.state"
                    autocomplete="region"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                <div class="mt-2">
                  <select
                    id="country"
                    name="country"
                    v-model="businessAddress.country"
                    autocomplete="country-name"
                    class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
                  >
                    <option value="US">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                </div>
              </div>
              <div>
                <label for="postal_code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="postal_code"
                    id="postal_code"
                    v-model="businessAddress.postal_code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="bg-gray-50 rounded border">
        <div class="my-3 p-4 sm:p-6">
          <h3 class="text-lg font-semibold leading-6 text-gray-900">Manage subscription: <span class="font-normal italic">Professional Theater Membership</span></h3>
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
      theater: {
        name: "Tiger's Theater",
      },
      businessAddress: {
        street: null,
        city: null,
        state: null,
        country: null,
        postal_code: null,
      },
      performanceAddress: {
        street: null,
        city: null,
        state: null,
        country: null,
        postal_code: null,
      }
    };
  },
  mounted() {
    this.getTheater();
  },
  methods: {
    getTheater() {
      axios.get(`/theaters/${localStorage.getItem("theaterId")}`).then((response) => {
        this.theater = response.data;
        this.businessAddress = response.data.business_address;
        this.performanceAddress = response.data.performance_address;
        console.log(this.theater);
      });
    },
    saveTheaterProfile() {
      axios.put(`/theaters/${this.theater.id}`, this.theater).then((response) => {
        this.theater = response.data;
        let message = {
            title: "Successfully Saved!",
            body: "Your theater information has been successfully saved.",
            icon: "success",
          };
          useAlertStore().setMessage(message);
      }).catch(error => {
        let message = {
            title: "Whoops!",
            body: "Looks like something went wrong. Please try again. If error persists, email info@chiartistatlas.com",
            icon: "failure",
          };
          useAlertStore().setMessage(message);
      })
    },
  },
};
</script>
