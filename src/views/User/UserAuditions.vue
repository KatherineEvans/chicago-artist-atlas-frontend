<template>
  <div v-if="auditions.length < 1">
    <div class="space-y-12">
      <div class="pb-7">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Saved Auditions</h2>
        <p class="mt-1 text-lg leading-6 text-gray-600">
          It doesn't look like you have any saved auditions, let's change that! Visit the
          <a href="/auditions" class="no-underline hover:no-underline text-blue-700">auditions board</a>
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/dzlaaytu7/image/upload/v1688246189/iStock-1438367331_i5itmw.jpg"
        class="w-100 mx-auto mt-2"
        alt="Calender Under Construction"
        style="max-width: 550px"
      />
    </div>
  </div>
  <div v-else>
    <div>Fart</div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      auditions: [],
    };
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style></style>
