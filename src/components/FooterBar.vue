<template>
  <footer class="bg-blue-950 text-blue-100" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto pb-4 pt-6 sm:pt-4 lg:pt-6 px-4 sm:px-10">
      <div v-if="footerWithContact" class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2"></div>
        <div class="mt-10 xl:mt-0">
          <h3 class="text-base font-semibold leading-6 text-white">Get In Touch</h3>
          <p class="mt-2 text-sm leading-6 text-gray-300">
            Do you have any questions? Please do not hesitate to contact us directly. Our team will respond within
            24-hours.
          </p>
          <div class="mx-auto mt-3 max-w-xl sm:mt-4">
            <div class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div>
                <label for="name" class="block text-sm font-semibold text-blue-100">Name</label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="given-name"
                    class="block w-full rounded-md font-semibold border-0 px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-semibold text-blue-100">Email</label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="block w-full rounded-md font-semibold border-0 px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="subject" class="block text-sm font-semibold text-blue-100">Subject</label>
                <div class="mt-1">
                  <input
                    type="subject"
                    name="subject"
                    id="subject"
                    class="block w-full rounded-md font-semibold border-0 px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-semibold text-blue-100">Message</label>
                <div class="mt-1">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    class="block w-full rounded-md font-semibold border-0 px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div class="mt-8">
              <button
                type="submit"
                class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200 text-blue-950 bg-blue-100"
              >
                Let's talk
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="relative isolate overflow-hidden px-6">
          <h2 class="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight text-blue-100 mt-4">
            Get In Touch
          </h2>
          <p class="mx-auto mt-2 max-w-2xl text-center text-lg leading-8 text-blue-100">
            Do you have any questions? Want to report a bug? Just want to drop in and say hi? Please do not hesitate to contact us! Our team will respond within 24-hours.
          </p>
          <div class="mt-4">
            <!-- v-on:submit.prevent="notifyMe()" -->
            <div class="mx-auto mt-3 sm:mt-4 max-w-2xl">
              <div class="grid grid-cols-2 gap-x-8">
                <div class="col-span-2 md:col-span-1">
                  <div class="mt-2">
                    <label for="name" class="block text-sm font-semibold text-blue-100">Name</label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        v-model="name"
                        autocomplete="given-name"
                        class="block w-full rounded-md font-semibold border-0 px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="mt-2">
                    <label for="email" class="block text-sm font-semibold text-blue-100">Email</label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        v-model="email"
                        autocomplete="email"
                        class="block w-full rounded-md font-semibold border-0 px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2 mt-2">
                    <label for="phone" class="block text-sm font-semibold text-blue-100">Phone</label>
                    <div class="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        v-model="phone"
                        autocomplete="phone"
                        class="block w-full rounded-md font-semibold border-0 px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-span-2 md:col-span-1">
                  <div class="sm:col-span-2 mt-2">
                    <label for="subject" class="block text-sm font-semibold text-blue-100">Subject</label>
                    <div class="mt-1">
                      <input
                        type="subject"
                        name="subject"
                        id="subject"
                        v-model="subject"
                        class="block w-full rounded-md font-semibold border-0 px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2 mt-2">
                    <label for="message" class="block text-sm font-semibold text-blue-100">Message</label>
                    <div class="mt-1">
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        v-model="message"
                        class="block w-full rounded-md font-semibold border-0 px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <button
                  type="submit"
                  @click="notifyMe()"
                  class="block w-full rounded-md bg-blue-800 px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200 text-blue-950 bg-blue-100 text-white"
                >
                  Let's talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-5 border-t border-white/10 pt-4 sm:mt-10 md:flex md:items-center md:justify-between lg:mt-12 lg:px-8 px-6"
      >
        <div class="flex justify-center space-x-6 md:order-2">
          <a v-for="item in socials" :key="item.name" :href="item.href" class="text-blue-100 hover:text-blue-200" target="_blank">
            <span class="sr-only">{{ item.name }}</span>
            <i :class="item.icon" class="text-xl" aria-hidden="true"></i>
          </a>
        </div>
        <div class="mt-8 md:order-1 md:mt-0">
          <p class="text-center text-sm leading-5 text-blue-100 m-0">
            &copy; 2022 Chicago Artist Atlas LLC, All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, h } from "vue";
import { useAlertStore } from "../stores/useAlertStore.js";
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      name: "",
      phone: "",
      subject: "",
      message: "",
      footerWithContact: false,
      socials: [
        {
          name: "Facebook",
          href: "https://www.facebook.com/profile.php?id=100032359761978",
          icon: "fa-brands fa-facebook",
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/chiartistatlas/",
          icon: "fa-brands fa-instagram",
        },
        {
          name: "Twitter",
          href: "https://twitter.com/chiartistatlas",
          icon: "fa-brands fa-square-x-twitter",
        },
      ],
    };
  },
  methods: {
    notifyMe() {
      axios
        .post("/notify-me.json",
          { 
            name: this.name,
            phone: this.phone,
            email: this.email,
            subject: this.subject,
            message: this.message
          },
        )
        .then((response) => {
          let message = {
            title: "Thanks for the message!",
            body: "We'll get back to you as soon as we can",
            icon: "success",
          };
          useAlertStore().setMessage(message);
        })
        .catch((error) => {
          let message = {
            title: "Whoops!",
            body: "Looks like something went wrong. Please try again. If error persists, email info@chiartistatlas.com",
            icon: "success",
          };
          useAlertStore().setMessage(message);
        });
    },
  },
};
</script>
