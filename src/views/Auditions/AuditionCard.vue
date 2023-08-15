<template>
  <div class="overflow-hidden bg-white shadow-md sm:rounded-lg p-0 mb-10">
    <div class="bg-blue-900">
      <div class="px-4 py-6 sm:px-6 d-flex flex-row">
        <span>
          <div class="text-base font-bold leading-7 text-blue-100">Production</div>
          <p class="m-0 max-w-2xl text-blue-50 text-2xl leading-6 font-medium">
            {{ audition.name_of_show }}
          </p>
        </span>
        <div class="text-lg text-blue-50 leading-6 font-medium ml-auto my-auto">
          <span>Casting {{ audition.characters.length }} {{ audition.characters.length > 1 ? "Roles" : "Role" }}</span>
        </div>
      </div>
    </div>
    <div class="px-2">
      <dl class="grid grid-cols-1 sm:grid-cols-3 mb-0">
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Company</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.name_of_company }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Pay Scale</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.pay_scale }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Union Status</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.union_status }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Director</dt>
          <dd v-if="audition.director" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ audition.director }}
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <i class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Musical Director</dt>
          <dd v-if="audition.musical_director" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ audition.musical_director }}
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <i class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Choreographer</dt>
          <dd v-if="audition.choreographer" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ audition.choreographer }}
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <i class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Rehearsal Start Date</dt>
          <dd v-if="audition.rehearsal_startdate" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ formatDate(audition.rehearsal_startdate) }}
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Previews Start Date</dt>
          <dd v-if="audition.previews_startdate" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ formatDate(audition.previews_startdate) }}
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <i class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Opening Night</dt>
          <dd v-if="audition.show_startdate" class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ formatDate(audition.show_startdate) }}
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <i class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div v-if="audition.show_description" class="border-t border-gray-100 px-4 py-3 sm:col-span-3 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Description</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ audition.show_description }}
          </dd>
        </div>

        <div class="hide border-t border-gray-100 px-4 py-3 sm:col-span-3 sm:px-0" :class="'audition' + audition.id">
          <dt class="text-sm leading-6 text-gray-900">Cast Breakdown</dt>
          <ul role="list" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2 pl-0">
            <!-- CHARACTER CARD -->
            <CharacterCardSlim v-for="character in audition.characters" :key="character.id" :character="character" />
          </ul>
        </div>
        <div class="hide border-t border-gray-100 px-4 py-3 sm:col-span-3 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Show Warnings</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.show_warnings }}</dd>
        </div>
        <div class="hide border-t border-gray-100 px-4 py-3 sm:col-span-3 sm:px-0">
          <dt class="text-sm leading-6 text-gray-900">Additional Notes</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.additional_notes }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-3 sm:px-0">
          <div class="d-flex flex-row-reverse">
            <button
              class="no-underline hover:no-underline flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-base float-right font-semibold shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-blue-50"
              style="text-decoration: none"
              @click="$emit('expandAudition', audition)"
            >
              {{ currentAuditionId.currentAuditionId == audition.id ? (hidden ? "Hide" : "View") : "View" }}
              {{ audition.characters.length }}
              {{ audition.characters.length > 1 ? "Roles" : "Role" }}
            </button>
          </div>
        </div>
      </dl>
    </div>
    <ModalContainer :open="modalOpen" @close-modal="closeModal">
      <template v-slot:content>
        <CharacterCardFull :character="character"></CharacterCardFull>
      </template>
    </ModalContainer>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import CharacterCardSlim from "./CharacterCardSlim";
import CharacterCardFull from "./CharacterCardFull";
import ModalContainer from "../../components/ModalContainer";

export default {
  components: { CharacterCardSlim, CharacterCardFull, ModalContainer },
  props: ["audition", "hidden", "currentAuditionId"],
  data: function () {
    return {
      heart: false,
      modalOpen: false,
      character: this.audition.characters[0],
    };
  },
  watch: {
    currentAuditionId() {
      console.log(
        this.audition.id,
        this.currentAuditionId.currentAuditionId,
        this.hidden,
        this.currentAuditionId.currentAuditionId === this.audition.id
      );
    },
  },
  mounted() {
    console.log("hi");
    this.modalOpen = true;
  },
  computed: {
    formatDate() {
      return (value) => {
        return moment(String(value)).format("MM/DD/YYYY");
      };
    },
  },
  methods: {
    closeModal() {
      console.log("close");
    },
    addToFavorites() {},
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
