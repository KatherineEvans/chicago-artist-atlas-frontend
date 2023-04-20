<template>
  <TransitionRoot as="template" :show="modalOpen">
    <Dialog as="div" class="relative z-10" @click="$emit('closeModal')">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed max-h-screen inset-0 z-10 overflow-y-auto">
        <div class="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all"
            >
              <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button
                  type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="$emit('closeModal')"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div>
                <div class="mt-3 text-center sm:mt-5">
                  <!-- <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                    <slot name="title"></slot>
                  </DialogTitle> -->
                  <div class="mt-2">
                    <slot name="content"></slot>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

export default {
  props: {
    open: {
      default: false,
      required: true,
    },
  },
  components: { Dialog, DialogPanel, TransitionChild, TransitionRoot, XMarkIcon },
  data: function () {
    return {
      modalOpen: false,
    };
  },
  watch: {
    open(newVal, oldVal) {
      console.log(oldVal, newVal, "TEST");
      this.modalOpen = newVal;
    },
  },
};
</script>
<style scoped></style>
