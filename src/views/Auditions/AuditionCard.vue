<template>
  <div class="overflow-hidden bg-white shadow-md rounded-md sm:rounded-lg p-0 mb-10">
    <div class="bg-blue-900">
      <div class="px-4 py-6 sm:px-6 d-flex flex-row">
        <span>
          <div class="text-base font-bold leading-7 text-blue-100">Production</div>
          <p class="m-0 max-w-2xl text-blue-50 text-2xl leading-6 font-medium">
            {{ audition.name_of_show }}
          </p>
        </span>
        <div class="text-lg text-blue-50 leading-6 font-medium ml-auto my-auto italic">
          <span v-if="audition.characters.length > 0">Casting {{ audition.characters.length }} {{ audition.characters.length > 1 ? "Roles" : "Role" }}</span>
          <span v-else>Open Casting Call</span>
        </div>
      </div>
    </div>
    <div>
      <dl class="grid grid-cols-1 sm:grid-cols-3 mb-0">
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Company</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.name_of_company }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 max-sm:bg-blue-50/60">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Pay Scale</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.pay_scale }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Union Status</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.union_status }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 bg-blue-50/60">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Director</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <span v-if="audition.director">{{ audition.director }}</span>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:bg-blue-50/60">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Musical Director</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <span v-if="audition.musical_director">{{ audition.musical_director }}</span>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 bg-blue-50/60">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Choreographer</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <span v-if="audition.choreographer">{{ audition.choreographer }}</span>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Rehearsal Start Date</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <span v-if="audition.rehearsal_startdate">{{ formatDate(audition.rehearsal_startdate) }}</span>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 max-sm:bg-blue-50/60">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Previews Start Date</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <span v-if="audition.previews_startdate">{{ formatDate(audition.previews_startdate) }}</span>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Opening Night</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <span v-if="audition.show_startdate">{{ formatDate(audition.show_startdate) }}</span>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 bg-blue-50/60">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">In the Room</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <span v-if="audition.in_the_room">{{ audition.in_the_room }}</span>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 sm:bg-blue-50/60">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Materials to Prepare</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <span v-if="audition.materials_to_prepare">
              <span v-html="audition.materials_to_prepare"></span>
            </span>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-1 bg-blue-50/60">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">How to Submit</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <span v-if="audition.how_to_submit || audition.how_to_submit_link">
              <span v-if="audition.how_to_submit">
                  <span v-html="audition.how_to_submit" class="break-words"></span>
              </span>
              <a class="underline text-blue-600" v-if="audition.how_to_submit_link" target="_blank" :href="audition.how_to_submit_link"> Submission Link</a>
            </span>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div v-if="audition.show_description" class="border-t border-gray-100 px-4 py-3 sm:col-span-3">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Description</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            {{ audition.show_description }}
          </dd>
        </div>
        <div class="hide border-t border-gray-100 px-4 py-3 sm:col-span-1" :class="characterCardClass">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Audition Info</dt>
          <dd class="mt-1 text-base text-left leading-6 text-gray-700 sm:mt-2">
            <div v-if="anyAuditionDate">
              <ul  class="pl-0">
                <li v-if="audition.audition_date1">
                  Day 1: {{ formatDate(audition.audition_date1) }}
                  {{ audition.audition_time1 ? ` - ${audition.audition_time1}` : "" }}
                </li>
                <li v-if="audition.audition_date2">
                  Day 2: {{ formatDate(audition.audition_date2) }}
                  {{ audition.audition_time2 ? ` - ${audition.audition_time2}` : "" }}
                </li>
                <li v-if="audition.audition_date3">
                  Day 3: {{ formatDate(audition.audition_date3) }}
                  {{ audition.audition_time3 ? ` - ${audition.audition_time3}` : "" }}
                </li>
                <li v-if="audition.audition_date4">
                  Day 4: {{ formatDate(audition.audition_date4) }}
                  {{ audition.audition_time4 ? ` - ${audition.audition_time4}` : "" }}
                </li>
                <li v-if="audition.audition_date5">
                  Day 5: {{ formatDate(audition.audition_date5) }}
                  {{ audition.audition_time5 ? ` - ${audition.audition_time5}` : "" }}
                </li>
              </ul>
              <div v-if="audition.audition_address_id">
                <p class="text-sm leading-6 text-gray-900 italic underline mt-3">Location</p>
                <div class="text-base">
                  <p v-if="audition.audition_address.address1">{{ audition.audition_address.address1 }}</p>
                  <p v-if="audition.audition_address.address2">{{ audition.audition_address.address2 }}</p>
                  <p v-if="audition.audition_address.address3">{{ audition.audition_address.address3 }}</p>
                  <p>{{ audition.audition_address.city }}, {{ audition.audition_address.state }} {{ audition.audition_address.postal_code }}</p>
                </div>
              </div>
            </div>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="hide border-t border-gray-100 px-4 py-3 sm:col-span-1" :class="characterCardClass">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Callback Dates</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">
            <div v-if="anyCallbackDate">
              <ul v-if="anyCallbackDate" class="pl-0">
                <li v-if="audition.callback_date1">
                  Day 1: {{ formatDate(audition.callback_date1) }}
                  {{ audition.callback_time1 ? ` - ${audition.callback_time1}` : "" }}
                </li>
                <li v-if="audition.callback_date2">
                  Day 2: {{ formatDate(audition.callback_date2) }}
                  {{ audition.callback_time2 ? ` - ${audition.callback_time2}` : "" }}
                </li>
                <li v-if="audition.callback_date3">
                  Day 3: {{ formatDate(audition.callback_date3) }}
                  {{ audition.callback_time3 ? ` - ${audition.callback_time3}` : "" }}
                </li>
                <li v-if="audition.callback_date4">
                  Day 4: {{ formatDate(audition.callback_date4) }}
                  {{ audition.callback_time4 ? ` - ${audition.callback_time4}` : "" }}
                </li>
                <li v-if="audition.callback_date5">
                  Day 5: {{ formatDate(audition.callback_date5) }}
                  {{ audition.callback_time5 ? ` - ${audition.callback_time5}` : "" }}
                </li>
              </ul>
              <div v-if="audition.callback_address_id">
                <p class="text-sm leading-6 text-gray-900 italic underline mt-3">Location</p>
                <div class="text-base">
                  <p v-if="audition.callback_address.address1">{{ audition.callback_address.address1 }}</p>
                  <p v-if="audition.callback_address.address2">{{ audition.callback_address.address2 }}</p>
                  <p v-if="audition.callback_address.address3">{{ audition.callback_address.address3 }}</p>
                  <p>{{ audition.callback_address.city }}, {{ audition.callback_address.state }} {{ audition.callback_address.postal_code }}</p>
                </div>
              </div>
            </div>
            <i v-else class="fa-solid fa-minus text-center"></i>
          </dd>
        </div>
        <div class="hide border-t border-gray-100 px-4 py-3 sm:col-span-1" :class="characterCardClass">
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Show Location</dt>
          <dd v-if="audition.show_address_id" class="text-base mt-1">
            <p v-if="audition.show_address.address1">{{ audition.show_address.address1 }}</p>
            <p v-if="audition.show_address.address2">{{ audition.show_address.address2 }}</p>
            <p v-if="audition.show_address.address3">{{ audition.show_address.address3 }}</p>
            <p>{{ audition.show_address.city }}, {{ audition.show_address.state }} {{ audition.show_address.postal_code }}</p>
          </dd>
          <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">-</dd>
        </div>
        <div
          class="hide border-t border-gray-100 px-4 py-3 sm:col-span-3"
          :class="'audition' + audition.id"
          :id="audition.id"
        >
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Cast Breakdown</dt>
          <ul role="list" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2 pl-0">
            <!-- CHARACTER CARD -->
            <CharacterCardSlim
              v-for="character in audition.characters"
              :key="character.id"
              :character="character"
              :savedRoles="savedRoles"
              @show-full-card="showFullCard(character)"
              @save-character="addToFavorites"
            />
          </ul>
        </div>
        <div
          v-if="audition.show_warnings"
          class="hide border-t border-gray-100 px-4 py-3 sm:col-span-3"
          :class="'audition' + audition.id"
        >
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Show Warnings</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.show_warnings }}</dd>
        </div>
        <div
          class="hide border-t border-gray-100 px-4 py-3 sm:col-span-3"
          :class="'audition' + audition.id"
          v-if="audition.additional_notes"
        >
          <dt class="text-sm leading-6 text-gray-900 font-semibold">Additional Notes</dt>
          <dd class="mt-1 text-base leading-6 text-gray-700 sm:mt-2">{{ audition.additional_notes }}</dd>
        </div>
        <div class="border-t border-gray-100 px-4 py-3 sm:col-span-3">
          <div class="d-flex flex-row-reverse">
            <button
              v-if="audition.characters.length > 0"
              class="no-underline hover:no-underline flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-base float-right font-semibold shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-blue-50"
              style="text-decoration: none"
              @click="$emit('expandAudition', audition)"
            >
              {{
                currentAuditionId.currentAuditionId == audition.id
                  ? cardElement.classList.contains("hide")
                    ? "View"
                    : "Hide"
                  : "View"
              }}
              {{ audition.characters.length }}
              {{ audition.characters.length > 1 ? "Roles" : "Role" }}
            </button>
          </div>
        </div>
      </dl>
    </div>
    <ModalContainer :open="modalOpen" @close-modal="closeModal">
      <template v-slot:content>
        <CharacterCardFull
          :savedRoles="savedRoles"
          :character="character"
          @save-character="addToFavorites"
        ></CharacterCardFull>
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
  props: ["audition", "currentAuditionId", "savedRoles"],
  data: function () {
    return {
      heart: false,
      modalOpen: false,
      character: {},
      cardElement: null,
    };
  },
  mounted() {
    this.cardElement = document.getElementById(this.audition.id);
  },
  computed: {
    anyAuditionDate() {
      if (
        this.audition.audition_date1 ||
        this.audition.audition_date2 ||
        this.audition.audition_date3 ||
        this.audition.audition_date4 ||
        this.audition.audition_date5
      ) {
        return true;
      }
      return false;
    },
    anyCallbackDate() {
      if (
        this.audition.callback_date1 ||
        this.audition.callback_date2 ||
        this.audition.callback_date3 ||
        this.audition.callback_date4 ||
        this.audition.callback_date5
      ) {
        return true;
      }
      return false;
    },
    characterCardClass() {
      let string = `audition${this.audition.id}`;
      if (this.audition.show_description) {
        string = string + " sm:bg-blue-50/60";
      }
      return string;
    },
    formatDate() {
      return (value) => {
        return moment(String(value)).format("ll");
      };
    },
  },
  methods: {
    closeModal() {
      this.modalOpen = false;
    },
    addToFavorites(character) {
      axios
        .post("/user_roles.json", { character_id: character.id })
        .then((response) => {
          this.$emit("addToSavedRoles", character.id);
          this.closeModal();
          this.$store.commit("alerts/setMessage", {
            title: "Successfully Saved!",
            body: "Your audition has been successfully saved. To view all saved auditions, visit the link:",
            icon: "success",
            linkName: "View Saved Auditions",
            linkValue: "/user/auditions",
            isVisible: true,
          });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.closeModal();
          this.$store.commit("alerts/setMessage", {
            title: "Something Went Wrong",
            body: "Sorry about that! Please try again, or reach out for assistance",
            linkName: "Help",
            linkValue: "mailto:info@chiartistatlas.com?subject=Assistance: Saving Auditions",
            icon: "failure",
            isVisible: true,
          });
        });
    },
    showFullCard(character) {
      this.character = character;
      this.modalOpen = true;
    },
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
