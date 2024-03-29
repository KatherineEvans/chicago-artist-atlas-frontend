<template>
  <Listbox as="div" v-model="selected">
    <ListboxLabel v-if="menuLabel" class="block text-sm font-medium leading-6 text-gray-900">
      {{ menuLabel }}
    </ListboxLabel>
    <div class="relative mt-2">
      <ListboxButton
        class="relative w-full cursor-default rounded-md bg-white py-1.5 px-3 text-left text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-2 focus:ring-indigo-600 text-base sm:text-sm sm:leading-6"
      >
        <span v-if="!selected" class="block truncate">Select one</span>
        <span class="block truncate">{{ selected }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm px-0"
        >
          <ListboxOption
            as="template"
            v-for="option in dropdownData"
            :key="option"
            v-bind:value="option"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <span v-if="option === null">Select one</span>
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ option }}</span>

              <span
                v-if="selected && option != null"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, ListboxLabel } from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
export default {
  components: { ListboxLabel, Listbox, ListboxButton, ListboxOption, ListboxOptions, CheckIcon, ChevronUpDownIcon },
  props: ["dropdownData", "selectedData", "menuLabel", "width"],
  data: function () {
    return {
      selected: this.selectedData,
    };
  },
  watch: {
    selected(newVal) {
      this.$emit("setSelected", newVal);
    },
  },
  computed: {},
  methods: {},
};
</script>
