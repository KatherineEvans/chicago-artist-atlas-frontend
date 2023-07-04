<!-- 
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <fieldset>
    <legend class="sr-only">{{ options.srTitle }}</legend>
    <div class="space-y-5 grid grid-cols-2">
      <div v-for="option in options.radioButtons" :key="option.name" class="relative flex items-start mt-3">
        <div class="flex h-6 items-center">
          <input
            :id="option.description"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="comments" class="font-medium text-gray-900 break-normal">{{ option.name }}</label>
          <p v-if="option?.description" id="comments-description" class="text-gray-500">
            {{ option.description }}
          </p>
        </div>
      </div>
    </div>
  </fieldset>
</template>
<script>
export default {
  props: ["options"],
  data: function () {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
