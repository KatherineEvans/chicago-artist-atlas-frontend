<template>
  <form>
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="font-semibold leading-7 text-gray-900 py-3">Talents</h2>

        <p class="mt-1 text-base leading-6 text-gray-600">
          We know you're talented, and we want to celebrate your artistic brilliance. Share your theatrical gifts with
          us and let the spotlight shine on your achievements. Whether you're an actor, director, playwright, or
          involved in any other aspect of the theater world, we invite you to showcase your expertise.
        </p>

        <div class="mt-10 flex flex-wrap">
          <div class="w-full px-3" v-for="(talent, index) in talents" :key="index">
            <div class="border-b border-gray-900/10 py-3" v-if="talent.type == 'checkbox'">
              <label :for="talent.name" class="block text-base font-bold leading-6 text-gray-900 mb-0">
                {{ talent.name }}
              </label>
              <p class="m-0 text-sm leading-6 italic text-gray-400">Select all that apply</p>
              <RadioButton
                colNumberClass="grid-cols-3"
                @update-checkbox="updateCheckbox"
                :name="talent.name"
                :options="talent"
              ></RadioButton>
            </div>
            <span v-else></span>
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
        <button type="submit" class="text-sm font-semibold leading-6 text-gray-900">Save</button>
        <a
          href="/user/profile/training"
          class="ml-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline no-underline hover:no-underline"
        >
          Next
        </a>
      </span>
    </div>
  </form>
</template>

<script>
import RadioButton from "../../../form_elements/RadioButton.vue";
export default {
  components: { RadioButton },
  data: function () {
    return {
      talents: [
        {
          name: "Vocal",
          srTitle: "Vocal",
          type: "checkbox",
          data: [
            { name: "Singing", value: false },
            { name: "Rapping", value: false },
            { name: "Beat Boxing", value: false },
          ],
          additional: {
            name: "Vocal Range",
            srTitle: "Vocal Range",
            type: "checkbox",
            data: [
              { name: "Bass", value: false },
              { name: "Baritone", value: false },
              { name: "Tenor", value: false },
              { name: "Alto", value: false },
              { name: "Mezzo-Soprano", value: false },
              { name: "Soprano", value: false },
            ],
          },
        },
        {
          name: "Dialects",
          srTitle: "Dialects",
          type: "checkbox",
          data: [
            { name: "Armenian", value: false },
            { name: "Australian", value: false },
            { name: "Boston", value: false },
            { name: "British RP", value: false },
            { name: "Cockney", value: false },
            { name: "French", value: false },
            { name: "German", value: false },
            { name: "Irish", value: false },
            { name: "Italian", value: false },
            { name: "Minnesota", value: false },
            { name: "Puerto Rican", value: false },
            { name: "Russian", value: false },
            { name: "Scottish", value: false },
            { name: "South African", value: false },
            { name: "Southern", value: false },
            { name: "Spanish", value: false },
            { name: "Swiss-German", value: false },
            { name: "Other", value: false },
          ],
          additional: {
            name: "Additional Dialects",
            srTitle: "Additional Dialects",
            type: "input",
            data: [],
          },
        },
        {
          name: "Languages (fluent)",
          srTitle: "Languages (fluent)",
          type: "input",
          data: [],
        },
        {
          name: "Languages (familiar)",
          srTitle: "Languages (familiar)",
          type: "input",
          data: [],
        },
        {
          name: "Dance",
          srTitle: "Dance",
          type: "checkbox",
          data: [
            { name: "Tap", value: false },
            { name: "Ballet", value: false },
            { name: "Jazz", value: false },
            { name: "Hip Hop", value: false },
            { name: "Other", value: false },
          ],
          additional: {
            name: "Dance (other)",
            srTitle: "Dance (other)",
            type: "input",
            data: [],
          },
        },
        {
          name: "Stage Combat",
          srTitle: "Stage Combat",
          type: "checkbox",
          data: [
            { name: "Hand to Hand", value: false },
            { name: "Broadsword", value: false },
            { name: "Knife", value: false },
            { name: "Quarterstaff", value: false },
            { name: "Single Sword", value: false },
            { name: "Small Sword", value: false },
            { name: "Rapier & Dagger", value: false },
            { name: "Firearms Training/Handling", value: false },
            { name: "Other", value: false },
          ],
          additional: {
            name: "Stage Combat (other)",
            srTitle: "Stage Combat (other)",
            type: "input",
            data: [],
          },
        },
        {
          name: "Instruments",
          srTitle: "Instruments",
          type: "checkbox",
          data: [
            { name: "Guitar", value: false },
            { name: "Piano", value: false },
            { name: "Drums", value: false },
            { name: "Violin", value: false },
            { name: "Flute", value: false },
            { name: "Other", value: false },
          ],
          additional: {
            name: "Instruments (other)",
            srTitle: "Instruments (other)",
            type: "input",
            data: [],
          },
        },
        {
          name: "Circus Arts",
          srTitle: "Circus Arts",
          type: "checkbox",
          data: [
            { name: "Aerial Silks", value: false },
            { name: "Acrobatics", value: false },
            { name: "Trapeze", value: false },
            { name: "Clowning", value: false },
            { name: "Juggling", value: false },
            { name: "Stilts", value: false },
            { name: "Tightrope Walking", value: false },
            { name: "Other", value: false },
          ],
          additional: {
            name: "Circus Arts (other)",
            srTitle: "Circus Arts (other)",
            type: "input",
            data: [],
          },
        },
        {
          name: "Misc.",
          srTitle: "Misc.",
          type: "checkbox",
          data: [
            { name: "Gymnastics", value: false },
            { name: "Magician", value: false },
            { name: "Puppetry", value: false },
            { name: "Improv / Stand Up", value: false },
            { name: "Martial Arts", value: false },
            { name: "Whistling", value: false },
            { name: "Sign Language", value: false },
            { name: "Yo-Yo", value: false },
            { name: "Other", value: false },
          ],
          additional: {
            name: "Misc (other)",
            srTitle: "Misc (other)",
            type: "input",
            data: [],
          },
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    updateCheckbox(option, index) {
      // this.pronounOptionsTwo.data.splice(index, 1, option);
      console.log(option, index);
    },
  },
};
</script>
