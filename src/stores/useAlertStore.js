import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", {
  persist: true,
  state: () => ({
    message: {
      title: null,
      body: null,
      linkName: null,
      linkValue: null,
      icon: null,
      isVisible: false,
    },
  }),
  actions: {
    setMessage(data) {
      this.message.title = data.title;
      this.message.body = data.body;
      this.message.linkName = data.linkName;
      this.message.linkValue = data.linkValue;
      this.message.icon = data.icon;
      this.message.isVisible = true;
    },
  },
  getters: {},
});
