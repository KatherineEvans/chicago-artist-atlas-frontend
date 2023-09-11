<template>
  <div>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Talents</h2>

        <p class="mt-1 text-base leading-6 text-gray-600">
          We know you're talented, and we want to celebrate your artistic brilliance. Share your theatrical gifts with
          us and let the spotlight shine on your achievements. Whether you're an actor, director, playwright, or
          involved in any other aspect of the theatre world, we invite you to showcase your expertise.
        </p>

        <div class="mt-10 flex flex-wrap">
          <div class="border-b last:border-0 w-full px-3" v-for="(talents, category) in categories" :key="category">
            <div class="border-gray-900/10 py-3">
              <label :for="category" class="block text-base font-bold leading-6 text-gray-900 mb-0">
                {{ category }}
              </label>
              <p class="m-0 text-sm leading-6 italic text-gray-400">Select all that apply</p>
              <RadioButton
                colNumberClass="grid-cols-3"
                @update-checkbox="updateCheckbox"
                :optionsName="category"
                :checkedArray="talentIds"
                :options="talents"
                typeName="talents"
              ></RadioButton>
            </div>
            <div class="w-full pt-2 pb-3 mb-2">
              <div class="mb-3" v-if="otherTalents[category]">
                <span
                  v-for="talent in otherTalents[category]"
                  :key="talent"
                  class="inline-flex items-center gap-x-0.5 rounded-md bg-blue-50 px-3 py-1 text-base font-medium text-blue-600 ring-1 ring-inset ring-blue-500/10 mr-3"
                >
                  {{ talent }}
                  <button
                    @click="removeTalent(category, talent)"
                    type="button"
                    class="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-blue-500/20"
                  >
                    <span class="sr-only">Remove</span>
                    <svg viewBox="0 0 14 14" class="h-3.5 w-3.5 stroke-blue-600/50 group-hover:stroke-blue-600/75">
                      <path d="M4 4l6 6m0-6l-6 6" />
                    </svg>
                    <span class="absolute -inset-1" />
                  </button>
                </span>
              </div>
              <label for="otherTalents" class="flex block text-sm font-medium leading-6 text-gray-900 mb-0">
                Other - {{ category }}:
              </label>
              <p class="m-0 text-sm leading-6 italic text-gray-400">Separate with a comma</p>
              <div class="mt-2">
                <input
                  type="text"
                  name="otherTalents"
                  id="otherTalents"
                  @input="updateText($event, category)"
                  class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 flex justify-between gap-x-6">
      <span>
        <a
          href="/user/profile/bio"
          class="mr-3 rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 no-underline hover:no-underline"
        >
          Back
        </a>
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      </span>
      <span>
        <button @click="saveTalents(false)" type="submit" class="text-sm font-semibold leading-6 text-gray-900">
          Save
        </button>
        <button
          @click="saveTalents(true)"
          class="ml-3 rounded-md bg-indigo-600 pl-3 pr-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline no-underline hover:no-underline"
        >
          Save & Next
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RadioButton from "../../../form_elements/RadioButton.vue";
export default {
  components: { RadioButton },
  data: function () {
    return {
      talentIds: [],
      categories: [],
      talentsToSave: {},
      otherTalents: {},
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    saveTalents(next) {
      axios
        .post("/talents.json", {
          talents: this.talentsToSave,
          other: this.otherTalents,
        })
        .then((response) => {
          console.log(response);
          if (next) {
            this.$router.push("/user/profile/trainings");
          }
        });
    },
    removeTalent(category, talent) {
      this.otherTalents[category] = this.otherTalents[category].filter((t) => t != talent);
    },
    updateText(event, category) {
      console.log(this.categories[category]);
      if (event.target.value.includes(",")) {
        if (this.otherTalents[category]) {
          this.otherTalents[category].push(event.target.value.slice(0, -1));
        } else {
          this.otherTalents[category] = [event.target.value.slice(0, -1)];
        }
        event.target.value = "";
      }
    },
    getCategories() {
      axios.get("/talent-categories.json").then((response) => {
        this.categories = response.data;
        console.log(this.categories);
        this.getTalents();
      });
    },
    getTalents() {
      axios.get("/talents.json").then((response) => {
        this.talents = response.data;
        this.talentsToSave = {};
        response.data.forEach((talent) => {
          if (talent.other) {
            this.otherTalents[talent.talent_category.category]
              ? this.otherTalents[talent.talent_category.category].push(talent.other)
              : (this.otherTalents[talent.talent_category.category] = [talent.other]);
          } else {
            this.talentIds.push(talent.talent_category_id);
            this.talentsToSave[talent.talent_category_id] = null;
          }
        });
      });
    },
    updateCheckbox(option, checked) {
      if (checked) {
        this.talentsToSave[option.id] = null;
      } else {
        delete this.talentsToSave[option.id];
      }
    },
  },
};
</script>
