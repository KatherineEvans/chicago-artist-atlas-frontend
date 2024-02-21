<template>
  <fieldset>
    <!-- <legend class="sr-only">{{ options.srTitle }}</legend> -->
    <div :class="colNumberClass" class="space-y-5 grid">
      <div v-for="option in cleanData" :key="option.id" class="relative flex items-start mt-5">
        <div v-if="option.name != 'Other'" class="flex h-6 items-center">
          <input
            :id="option.name"
            aria-describedby="comments-description"
            :name="option.name"
            type="checkbox"
            :checked="checkedArray.includes(option.id)"
            @change="handleChange(option, $event)"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div v-if="option.name != 'Other'" class="ml-3 text-base leading-6">
          <label :for="option.name" class="font-medium text-gray-900 break-normal">{{ option.name }}</label>
        </div>
      </div>
    </div>
  </fieldset>
</template>
<script>
export default {
  props: ["options", "colNumberClass", "optionsName", "checkedArray", "typeName"],
  data: function () {
    return {};
  },
  watch: {},
  computed: {
    cleanData() {
      let data = this.options.filter((option) => {
        return option.name != "Other";
      });
      return data;
    },
  },
  methods: {
    handleChange(option, event) {
      this.$emit("update-checkbox", option, event.target.checked, this.typeName);
    },
  },
};
</script>
