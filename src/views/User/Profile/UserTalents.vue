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
          <div class="w-full p-3">
            <h3>Blah blah blah</h3>
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
export default {
  data: function () {
    return {
      talents: [
        {
          name: "Vocal",
          type: "checkbox",
          options: [
            { name: "Singing", value: false },
            { name: "Rapping", value: false },
            { name: "Beat Boxing", value: false },
          ],
          additional: {
            name: "Vocal Range",
            type: "checkbox",
            options: [
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
          name: "Dialectics",
          type: "checkbox",
          options: [
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
            name: "Additional Dialectics",
            type: "input",
            options: [],
          },
        },
        {
          name: "Languages (fluent)",
          type: "input",
          options: [],
        },
        {
          name: "Languages (familiar)",
          type: "input",
          options: [],
        },
        {
          name: "Dance",
          type: "checkbox",
          options: [
            { name: "Tap", value: false },
            { name: "Ballet", value: false },
            { name: "Jazz", value: false },
            { name: "Hip Hop", value: false },
            { name: "Other", value: false },
          ],
          additional: {
            name: "Dance (other)",
            type: "input",
            options: [],
          },
        },
        {
          name: "Stage Combat",
          type: "checkbox",
          options: [
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
            type: "input",
            options: [],
          },
        },
        {
          name: "Instruments",
          type: "checkbox",
          options: [
            { name: "Guitar", value: false },
            { name: "Piano", value: false },
            { name: "Drums", value: false },
            { name: "Violin", value: false },
            { name: "Flute", value: false },
            { name: "Other", value: false },
          ],
          additional: {
            name: "Instruments (other)",
            type: "input",
            options: [],
          },
        },
        {
          name: "Circus Arts",
          type: "checkbox",
          options: [
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
            type: "input",
            options: [],
          },
        },
        {
          name: "Misc.",
          type: "checkbox",
          options: [
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
            type: "input",
            options: [],
          },
        },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
