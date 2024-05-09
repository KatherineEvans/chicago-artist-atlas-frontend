<template>
  <div class="overflow-hidden bg-white shadow-md rounded-md sm:rounded-lg pb-4 mb-10">
    <div class="bg-blue-100">
      <div class="px-4 py-6 sm:px-6 d-flex flex-row">
        <span>
          <div class="italic font-medium leading-7 text-blue-950 text-base">{{ audition.name_of_company }} presents</div>
          <p class="m-0 max-w-2xl text-blue-950 text-2xl lg:text-3xl leading-6 font-bold mb-1">
            {{ audition.name_of_show }}
          </p>
        </span>
        <div class="text-lg text-blue-950 leading-6 font-semibold ml-auto my-auto italic">
          <span v-if="audition.characters.length > 0">Casting {{ audition.characters.length }} {{ audition.characters.length > 1 ? "Roles" : "Role" }}</span>
          <span v-else>Open Casting Call</span>
        </div>
      </div>
    </div>
    <div>
      <dl class="py-4 px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 pt-8 lg:pt-0 text-base mb-6">
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
        <dl v-if="anyAuditionDate || audition.audition_address_id || anyCallbackDate || audition.callback_address_id || audition.show_startdate || audition.show_address_id" class="my-4 border-t border-gray-500/10 pt-4">
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
        <div class="border-t border-gray-500/10 px-4 py-3 sm:col-span-3">
          <div class="d-flex flex-row-reverse">
            <router-link
              v-if="audition.characters.length > 0"
              class="no-underline hover:no-underline flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-base float-right font-semibold shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white text-blue-50"
              style="text-decoration: none"
              :to="auditionLink"
            >
              View 
              {{ audition.characters.length }}
              {{ audition.characters.length > 1 ? "Roles" : "Role" }}
            </router-link>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["audition"],
  data: function () {
    return {
      auditionLink: "",
    };
  },
  mounted() {
    this.auditionLink = `/auditions/${this.audition.id}`;
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
    formatDate() {
      return (value) => {
        return moment(String(value)).format("ll");
      };
    },
  },
};
</script>
