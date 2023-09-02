<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl sm:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Welcome to</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Chicago Artist Atlas</p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
        We are the ultimate destination for Chicago theatre artists and makers, combining vital information in an
        easy-to-use, one-stop-shop with original content from experts in our community to guide you on your journey.
      </p>
      <div class="mt-12 flow-root">
        <div
          class="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4"
        >
          <div v-for="tier in tiers" :key="tier.id" class="pt-16 lg:px-8 lg:pt-0 xl:px-14">
            <h3 :id="tier.id" class="text-base font-semibold leading-7 text-gray-900">{{ tier.name }}</h3>
            <p class="mt-4 flex-center items-baseline gap-x-1">
              <span class="text-5xl font-bold tracking-tight text-gray-900">{{ tier.price.monthly }}</span>
              <span class="text-sm font-semibold leading-6 text-gray-600">/month</span>
            </p>
            <p class="mt-3 text-sm leading-6 text-gray-500 min-h-[24px]">
              <span v-if="tier?.price?.annually">{{ tier.price.annually }} per month if paid annually</span>
            </p>
            <button
              @click="$emit('modalType', 'signup')"
              :aria-describedby="tier.id"
              :disabled="tier.disabled"
              class="mt-4 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-25 w-full"
            >
              {{ tier.buttonText }}
            </button>
            <p class="mt-6 text-sm font-semibold leading-6 text-gray-900">{{ tier.description }}</p>
            <ul role="list" class="mt-6 space-y-3 text-sm leading-6 text-gray-600">
              <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3 text-left">
                <CheckCircleIcon class="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span :class="{ 'hidden-text': tier.disabled }">{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CheckCircleIcon } from "@heroicons/vue/20/solid";
export default {
  components: { CheckCircleIcon },
  data: function () {
    return {
      tiers: [
        {
          name: "Basic Artist Membership",
          id: "tier-free",
          live: true,
          href: "/signup",
          price: { monthly: "$0" },
          buttonText: "Signup",
          disabled: false,
          description: "Everything you need to make a name for yourself in the Chicago theatre community.",
          features: [
            "Full access to our Auditions Board",
            "A comprehensive list of Artist Resources",
            "Access to all Free-Tier Classes; whenever, wherever!",
          ],
        },
        {
          name: "Premium Artist Membership",
          id: "tier-basic",
          live: false,
          href: "#",
          buttonText: "COMING SOON",
          disabled: true,
          price: { monthly: "$8.99", annually: "$6.65" },
          description: "Everything in Basic, PLUS essential resource and audition managemnt tools",
          features: ["Comming Soon, promise!", "Comming Soon, promise!", "Comming Soon, promise!"],
        },
        {
          name: "Premium Theatre Membership",
          id: "tier-organization",
          live: false,
          href: "#",
          buttonText: "COMING SOON",
          disabled: true,
          price: { monthly: "$19.99", annually: "$16.65" },
          description: "Manage your theatre's audition process seamlessly, all in one place!",
          features: ["Comming Soon, promise!", "Comming Soon, promise!", "Comming Soon, promise!"],
        },
      ],
    };
  },
  methods: {
    redirect(url) {
      window.location.href = url;
    },
  },
};
</script>
<style scoped>
.hidden-text {
  background-color: rgb(75 85 99) !important;
}
</style>
