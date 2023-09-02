export default {
  namespaced: true,
  state: {
    message: {
      title: null,
      body: null,
      linkName: null,
      linkValue: null,
      icon: null,
      isVisible: false,
    },
  },
  mutations: {
    setMessage(state, data) {
      state.message.title = data.title;
      state.message.body = data.body;
      state.message.linkName = data.linkName;
      state.message.linkValue = data.linkValue;
      state.message.icon = data.icon;
      state.message.isVisible = data.isVisible;
    },
    hideMessage(state) {
      state.message.isVisible = false;
    },
    // resetMessage(state) {
    //   state.message.title = null;
    //   state.message.body = null;
    //   state.message.link = null;
    //   state.message.icon = null;
    //   state.message.isVisible = null;
    // },
  },
  getters: {
    getMessage(state) {
      return state.message;
    },
  },
};
