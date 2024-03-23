<template>
  <div class="overflow-hidden max-w-xl bg-white p-0 mb-0" style="min-width:350px">
    <div>
      <div class="px-2 pb-6 sm:px-2 d-flex flex-row">
        <span>
          <div class="text-left text-base font-bold leading-7 text-blue-950">Name</div>
          <p class="text-left m-0 max-w-2xl text-blue-950 text-2xl leading-6 font-medium">
            {{ character.name }}
          </p>
        </span>
      </div>
    </div>
    <div class="px-2">
      <dl class="grid grid-cols-1 sm:grid-cols-3 mb-0">
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-xs font-semibold text-left leading-6 text-gray-900">Gender</dt>
          <dd class="mt-1 text-left text-lg leading-6 text-gray-700 sm:mt-2">
            <span v-if="character.gender">{{ character.gender }}</span>
            <i v-else class="ml-1 fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-xs font-semibold text-left leading-6 text-gray-900">Age</dt>
          <dd class="mt-1 text-left text-lg leading-6 text-gray-700 sm:mt-2">
            <span v-if="character.age">{{ character.age }}</span>
            <i v-else class="ml-1 fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-xs font-semibold text-left leading-6 text-gray-900">Ethnicity</dt>
          <dd class="mt-1 text-left text-lg leading-6 text-gray-700 sm:mt-2">
            <span v-if="character.ethnicity">{{ character.ethnicity }}</span>
            <i v-else class="ml-1 fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div v-if="character.description" class="border-t border-gray-100 px-4 py-3 sm:col-span-3 sm:px-0">
          <dt class="text-left text-sm font-semibold leading-6 text-gray-900">Description</dt>
          <dd class="mt-1 text-lg text-left leading-6 text-gray-700 sm:mt-2">
            {{ character.description }}
          </dd>
        </div>
        <div v-if="character.skills" class="border-t border-gray-100 px-4 py-3 sm:col-span-3 sm:px-0">
          <dt class="text-xs font-semibold text-left leading-6 text-gray-900">Skills</dt>
          <dd class="mt-1 text-lg text-left leading-6 text-gray-700 sm:mt-2">
            {{ character.skills }}
          </dd>
        </div>
        <div v-if="character.warnings" class="border-t border-gray-100 px-4 py-3 sm:col-span-3 sm:px-0">
          <dt class="text-xs font-semibold text-left leading-6 text-gray-900">Warnings</dt>
          <dd class="mt-1 text-lg text-left leading-6 text-gray-700 sm:mt-2">
            {{ character.warnings }}
          </dd>
        </div>
        <div v-if="character.notes" class="border-t border-gray-100 px-4 py-3 sm:col-span-3 sm:px-0">
          <dt class="text-xs font-semibold text-left leading-6 text-gray-900">Notes</dt>
          <dd class="mt-1 text-lg text-left leading-6 text-gray-700 sm:mt-2">
            {{ character.notes }}
          </dd>
        </div>

        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-3 sm:px-0">
          <div class="d-flex flex-row-reverse">
            <button
              v-if="savedRoles.includes(character.id)"
              disabled
              class="flex no-underline hover:no-underline flex-none rounded-md px-3.5 py-2.5 text-base float-right font-semibold border focus-visible:outline focus-visible:outline-2 bg-purple-50 focus-visible:outline-offset-2 focus-visible:outline-white text-grey-900"
            >
              <HeartIcon class="my-auto mr-2 h-5 w-5" style="color: #b493d6" aria-hidden="true" />
              Saved
            </button>
            <button
              v-else
              class="flex no-underline hover:no-underline flex-none rounded-md px-3.5 py-2.5 text-base float-right font-semibold border focus-visible:outline focus-visible:outline-2 hover:bg-gray-50 focus-visible:outline-offset-2 focus-visible:outline-white text-grey-900"
              style="text-decoration: none"
              @click="$emit('saveCharacter', character)"
            >
              <HeartIcon class="my-auto mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
              Save Role
            </button>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { HeartIcon } from "@heroicons/vue/20/solid";

export default {
  components: { HeartIcon },
  props: ["character", "savedRoles"],
  data: function () {
    return {
      heart: false,
    };
  },
};
</script>
<style scoped>
.hide {
  display: none;
}
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
