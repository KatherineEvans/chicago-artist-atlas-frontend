<template>
  <div class="rounded-md p-4 col-span-1 border flex flex-col justify-between">
    <div>
      <div class="flex justify-between">
        <div class="text-lg mb-2 d-inline">{{ audition.character.name }}</div>
        <div class="text-gray-700 italic text-sm font-normal d-inline">
          Saved {{ formatDate(audition.role.created_at) }}
        </div>
      </div>
      <p class="text-base font-normal">{{ audition.character.description }}</p>
    </div>
    <div class="flex ml-auto">
      <button
        class="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
      >
        View
      </button>
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-200 ml-3"
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
