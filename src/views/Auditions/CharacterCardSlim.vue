<template>
  <li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white border flex flex-col justify-between">
    <div class="flex w-full items-center justify-between space-x-6 p-6">
      <div class="flex-1">
        <div class="items-center space-x-3">
          <p class="font-bold text-lg mx-0 mb-2 mt-0 text-gray-900">{{ character.name }}</p>
          <dl v-if="character.gender" class="divide-y divide-gray-100 ml-0 mb-0">
            <div class="py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Gender:</dt>
              <dd class="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ character.gender }}</dd>
            </div>
          </dl>
          <dl v-if="character.age" class="divide-y divide-gray-100 ml-0 mb-0">
            <div class="py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Age:</dt>
              <dd class="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ character.age }}</dd>
            </div>
          </dl>
          <dl v-if="character.ethnicity" class="divide-y divide-gray-100 ml-0 mb-0">
            <div class="py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Ethnicity:</dt>
              <dd class="text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ character.ethnicity }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="flex w-0 flex-1">
          <button
            @click="$emit('showFullCard', character)"
            class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 border-top py-3 text-sm font-semibold text-gray-900 no-underline hover:no-underline hover:bg-blue-50 hover:border-r"
          >
            <InformationCircleIcon class="h-5 w-5 text-blue-500" aria-hidden="true" />
            More Info
          </button>
        </div>
      </div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="-ml-px flex w-0 flex-1">
          <button
            v-if="savedRoles.includes(character.id)"
            disabled
            class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-b-lg border-top py-3 text-md font-semibold text-gray-900 no-underline hover:no-underline bg-purple-50 border-l"
          >
            <HeartIcon class="h-5 w-5" style="color: #b493d6" aria-hidden="true" />
            Saved
          </button>
          <button
            v-else
            @click="$emit('saveCharacter', character)"
            class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-b-lg border-top py-3 text-md font-semibold text-gray-900 no-underline hover:no-underline hover:bg-gray-50 hover:border-l"
          >
            <HeartIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            Save Role
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { HeartIcon, InformationCircleIcon } from "@heroicons/vue/20/solid";

export default {
  components: { HeartIcon, InformationCircleIcon },
  props: ["character", "savedRoles"],
  data: function () {
    return {};
  },
  computed: {},
  methods: {
    addToFavorites() {},
  },
};
</script>
