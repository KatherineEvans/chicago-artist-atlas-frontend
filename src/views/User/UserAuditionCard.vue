<template>
  <div class="rounded-md p-4 col-span-1 border flex flex-col justify-between">
    <div class="mb-2">
      <div class="flex justify-between">
        <div class="text-xl font-bold">{{ audition.character.name }}</div>
        <div class="text-gray-400 text-sm font-normal d-inline">Saved {{ formatDate(audition.role.created_at) }}</div>
      </div>
      <div class="border-b mb-2 pb-1">
        <div class="text-base font-medium">{{ audition.audition.name_of_show }}</div>
        <div class="text-base font-normal italic">Presented by: {{ audition.audition.name_of_company }}</div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 lg:divide-x">
        <div class="col-span-1 border-b lg:border-0 pb-2 sm:pt-3">
          <div class="text-sm font-normal mb-2">Auditions Start</div>
          <div class="font-medium text-lg">{{ formatDate(audition.audition.audition_date1) }}</div>
          <div class="text-lg" v-if="audition.audition.audition_time1"></div>
        </div>
        <div class="col-span-1 lg:col-span-2 lg:pl-3 py-2">
          <div class="text-sm font-normal mb-2">Pay Scale</div>
          <div class="font-medium text-lg">{{ audition.audition.pay_scale }}</div>
        </div>
      </div>
      <!-- <p class="text-base font-normal">{{ audition.character.description }}</p> -->
    </div>
    <div class="flex ml-auto mt-1">
      <div class="relative inline-block text-left">
        <button
          class="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-base font-medium text-gray-900 ring-2 ring-inset ring-gray-200"
        >
          View
        </button>
      </div>
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-base font-medium text-gray-900 ring-2 ring-inset ring-gray-200 ml-3"
          >
            Move
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-medium"
          >
            <div class="py-1">
              <MenuItem v-slot="{ active }">
                <button
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-base w-100 text-left',
                  ]"
                >
                  Submitted
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-base w-100 text-left',
                  ]"
                >
                  Callbacks
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-base w-100 text-left',
                  ]"
                >
                  Cast
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  @click="$emit('removeRole', audition)"
                  :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-base w-100 text-left text-red-600']"
                >
                  Remove
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

export default {
  props: ["audition"],
  components: { Menu, MenuButton, MenuItem, MenuItems },
  data: function () {
    return {};
  },
  mounted() {},
  watch: {},
  computed: {
    formatDate() {
      return (value) => {
        return moment(String(value)).format("ll");
      };
    },
  },
  methods: {
    updateUserRole(role) {
      axios.get(`/user_roles/${role.id}.json`).then((response) => {});
    },
  },
};
</script>
<style></style>
