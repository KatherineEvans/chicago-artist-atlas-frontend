<template>
    <div>
      <div class="mx-auto">
        <div class="mx-auto grid grid-cols-1 items-start gap-x-8 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div class="lg:pr-4 lg:col-span-1 bg-blue-50 h-full">
            <nav class="flex flex-wrap justify-between text-base pb-2" aria-label="Breadcrumb">
              <ol role="list" class="items-center space-x-4 hidden sm:flex">
                <li>
                  <div>
                    <a href="/" class="text-gray-400 hover:text-gray-500">
                      <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <span class="sr-only">Home</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <a href="/auditions" class="ml-4 font-medium text-gray-500 hover:text-gray-700">Auditions</a>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <a v-if="audition.name_of_show" :href="auditionLink" class="ml-4 font-medium text-gray-500 hover:text-gray-700 underline truncate ...">{{ audition.name_of_show.substring(0, 10) }}...</a>
                  </div>
                </li>
              </ol>
            </nav>
            <div class="py-10 lg:pt-18 pl-10 lg:pl-32">
              <div>
                <span>
                  <div class="italic font-medium leading-7 text-blue-950 text-base">{{ audition.name_of_company }} presents</div>
                  <p class="mb-3 max-w-2xl text-blue-950 leading-6 text-3xl font-bold tracking-tight sm:text-4xl font-bold">
                    {{ audition.name_of_show }}
                  </p>
                  <div class="my-6">
                    <p class="text-base my-1" v-if="audition.written_by">Written by: 
                      <span class="font-bold">{{audition.written_by}}</span>
                    </p>
                    <p class="text-base my-1" v-if="audition.director">Director: 
                      <span class="font-bold">{{audition.director}}</span>
                    </p>
                    <p class="text-base my-1" v-if="audition.musical_director">Musical Director: 
                      <span class="font-bold">{{audition.musical_director}}</span>
                    </p>
                    <p class="text-base my-1" v-if="audition.choreographer">Choreographer: 
                      <span class="font-bold">{{audition.choreographer}}</span>
                    </p>
                  </div>
                </span>
              </div>
              <div class="text-sm leading-7 text-gray-700 pr-6">
                <!-- <p class="mb-2 text-base font-semibold leading-7 text-blue-800">Show Description</p> -->
                <div>
                  {{ audition.show_description }}
                </div>
              </div>
              <div>
                <p class="text-base my-1" v-if="audition.choreographer">choreographer: 
                  <span class="font-bold">{{ audition.in_the_room }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="pt-10 lg:pt-24 lg:col-span-2 pr-10 lg:pr-32">
            <div class="loading-spinner-container" v-if="isLoading">
              <div class="loading-spinner m-auto">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <span v-else>
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 border-t border-gray-900/10 lg:border-none pt-8 lg:pt-0 text-base">
                <div>
                  <p class="mb-2 text-base font-semibold leading-7 text-blue-800">Company</p>
                  <p>{{ audition.name_of_company }}</p>
                </div>
                <div>
                  <p class="mb-2 text-base font-semibold leading-7 text-blue-800">Pay Scale</p>
                  <p>{{ audition.pay_scale }}</p>
                </div>
                <div>
                  <p class="mb-2 text-base font-semibold leading-7 text-blue-800">Union Status</p>
                  <p>{{ audition.union_status }}</p>
                </div>
              </div>
              <dl v-if="anyAuditionDate || audition.audition_address_id || anyCallbackDate || audition.callback_address_id || audition.show_startdate || audition.show_address_id" class="my-10 border-t border-gray-900/10 pt-10">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 text-base">
                  <div>
                    <p class="mb-2 text-base font-semibold leading-7 text-blue-800">Audition Info</p>
                    <div v-if="anyAuditionDate || audition.audition_address_id">
                      <ul v-if="anyAuditionDate" class="pl-0">
                        <li v-if="audition.audition_date1">
                          Day 1: <span class="font-semibold">{{ formatDate(audition.audition_date1) }}
                          {{ audition.audition_time1 ? ` - ${audition.audition_time1}` : "" }}</span>
                        </li>
                        <li v-if="audition.audition_date2">
                          Day 2: <span class="font-semibold">{{ formatDate(audition.audition_date2) }}
                          {{ audition.audition_time2 ? ` - ${audition.audition_time2}` : "" }}</span>
                        </li>
                        <li v-if="audition.audition_date3">
                          Day 3: <span class="font-semibold">{{ formatDate(audition.audition_date3) }}
                          {{ audition.audition_time3 ? ` - ${audition.audition_time3}` : "" }}</span>
                        </li>
                        <li v-if="audition.audition_date4">
                          Day 4: <span class="font-semibold">{{ formatDate(audition.audition_date4) }}
                          {{ audition.audition_time4 ? ` - ${audition.audition_time4}` : "" }}</span>
                        </li>
                        <li v-if="audition.audition_date5">
                          Day 5: <span class="font-semibold">{{ formatDate(audition.audition_date5) }}
                          {{ audition.audition_time5 ? ` - ${audition.audition_time5}` : "" }}</span>
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
                  </div>
                  <div>
                    <p class="mb-2 text-base font-semibold leading-7 text-blue-800">Callback Info</p>
                    <div v-if="anyCallbackDate || audition.callback_address_id">
                      <ul v-if="anyCallbackDate" class="pl-0">
                        <li v-if="audition.callback_date1">
                          Day 1: <span class="font-semibold">{{ formatDate(audition.callback_date1) }}
                          {{ audition.callback_time1 ? ` - ${audition.callback_time1}` : "" }}</span>
                        </li>
                        <li v-if="audition.callback_date2">
                          Day 2: <span class="font-semibold">{{ formatDate(audition.callback_date2) }}
                          {{ audition.callback_time2 ? ` - ${audition.callback_time2}` : "" }}</span>
                        </li>
                        <li v-if="audition.callback_date3">
                          Day 3: <span class="font-semibold">{{ formatDate(audition.callback_date3) }}
                          {{ audition.callback_time3 ? ` - ${audition.callback_time3}` : "" }}</span>
                        </li>
                        <li v-if="audition.callback_date4">
                          Day 4: <span class="font-semibold">{{ formatDate(audition.callback_date4) }}
                          {{ audition.callback_time4 ? ` - ${audition.callback_time4}` : "" }}</span>
                        </li>
                        <li v-if="audition.callback_date5">
                          Day 5: <span class="font-semibold">{{ formatDate(audition.callback_date5) }}
                          {{ audition.callback_time5 ? ` - ${audition.callback_time5}` : "" }}</span>
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
                  </div>
                  <div>
                    <p class="mb-2 text-base font-semibold leading-7 text-blue-800">Opening Performance</p>
                    <div v-if="audition.show_startdate || audition.show_address_id">
                      <span v-if="audition.show_startdate" class="mb-2 font-semibold">{{ formatDate(audition.show_startdate) }}</span>
                      <div v-if="audition.show_address_id" class="text-base mt-1">
                        <p v-if="audition.show_address.address1">{{ audition.show_address.address1 }}</p>
                        <p v-if="audition.show_address.address2">{{ audition.show_address.address2 }}</p>
                        <p v-if="audition.show_address.address3">{{ audition.show_address.address3 }}</p>
                        <p>{{ audition.show_address.city }}, {{ audition.show_address.state }} {{ audition.show_address.postal_code }}</p>
                      </div>
                    </div>
                    <i v-else class="fa-solid fa-minus text-center"></i>
                  </div>
                </div>
              </dl>
              <dl v-if="audition.how_to_submit || audition.materials_to_prepare" class="my-10 border-t border-gray-900/10 pt-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
                  <div class="text-base leading-7 text-gray-700">
                    <p class="mb-2 text-base font-semibold leading-7 text-blue-800">How to Submit</p>
                    <div v-if="audition.how_to_submit" v-html="audition.how_to_submit"></div>
                    <div v-else-if="audition.how_to_submit_link" v-html="audition.how_to_submit_link"></div>
                    <i v-else class="fa-solid fa-minus text-center"></i>
                  </div>
                  <div class="text-base leading-7 text-gray-700">
                    <p class="mb-2 text-base font-semibold leading-7 text-blue-800">Materials to Prepare</p>
                    <div v-if="audition.materials_to_prepare" v-html="audition.materials_to_prepare"></div>
                    <i v-else class="fa-solid fa-minus text-center"></i>
                  </div>
                </div>
              </dl>
              <dl class="my-10 border-t border-gray-900/10 pt-10">
                <p class="mb-3 text-base font-semibold leading-7 text-blue-800">Cast Breakdown</p>
                <ul role="list" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2 pl-0">
                  <CharacterCardSlim
                    v-for="character in audition.characters"
                    :key="character.id"
                    :character="character"
                    :savedRoles="savedRoles"
                    @show-full-card="showFullCard"
                    @save-character="addToFavorites"
                  />
                </ul>
              </dl>
              <dl v-if="audition.show_warnings" class="my-10 border-t border-gray-900/10 pt-10">
                <div class="text-base leading-7 text-gray-700">
                  <p class="mb-2 text-base font-semibold leading-7 text-blue-800">Show Warning</p>
                  <div>
                    {{ audition.show_warnings }}
                  </div>
                </div>
              </dl>
              <dl v-if="audition.additional_notes" class="my-10 border-t border-gray-900/10 pt-10">
                <div class="text-base leading-7 text-gray-700">
                  <p class="mb-2 text-base font-semibold leading-7 text-blue-800">Additional Notes</p>
                  <div>
                    {{ audition.additional_notes }}
                  </div>
                </div>
              </dl>
            </span>
          </div>
        </div>
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
import { ChevronRightIcon, HomeIcon } from "@heroicons/vue/20/solid";
import CharacterCardFull from "./CharacterCardFull.vue";
import ModalContainer from "../../components/ModalContainer.vue";
import { MagnifyingGlassIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/vue/20/solid";

export default {
  components: { CharacterCardSlim, ChevronRightIcon, HomeIcon, ModalContainer, CharacterCardFull },
  data: function () {
    return {
      audition: {},
      heart: false,
      modalOpen: false,
      character: {},
      cardElement: null,
      savedRoles: [],
      auditionLink: '',
      isLoading: false,
    };
  },
  mounted() {
    this.isLoading = true;
    this.getAudition();
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
    getAudition() {
        axios.get(`/auditions/${this.$route.params.id}`).then(response => {
          this.audition = response.data;
          this.getUserAuditions();
          this.isLoading = false;
          this.auditionLink = `/auditions/${this.audition.id}`;
          window.scrollTo(0, 0);
        }).catch(error => {
          console.log(error);
        })
    },
    addToSavedRoles(id) {
      this.savedRoles.push(id);
    },
    getUserAuditions() {
      axios.get("/user_roles.json?type=pluck").then((response) => {
        this.savedRoles = response.data;
      });
    },
    addToFavorites(character) {
      axios
        .post("/user_roles.json", { character_id: character.id })
        .then((response) => {
          this.addToSavedRoles(character.id);
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
          console.log(error)
          // this.errors = error.response.data.errors;
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
      console.log(this.character, 'hi', this.modalOpen);
      this.character = character;
      this.modalOpen = true;
      console.log(this.modalOpen);
    },
  }
}
</script>
<style>
    
</style>