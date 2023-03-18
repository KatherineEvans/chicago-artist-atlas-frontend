import api from "@/api.js";

export default {
  namespaced: true,
  state: {
    example: {},
    exampleTwo: false,
  },
  mutations: {
    setExample(state, payload) {
      state.example = payload;
    },
    setExampleTwo(state, payload) {
      state.exampleTwo = payload;
    },
  },
  actions: {
    async loadExample({ commit, dispatch }, id) {
      let response = await api.get("example-url", {
        params: { id: id },
      });
      commit("setExample", response.data);
      dispatch("loadExampleTwo", id);
    },
    async loadExampleTwo({ commit }, id) {
      let response = await api.get("example-url-two", {
        params: { id: id },
      });

      commit("setExampleTwo", response.data);
    },
  },
  getters: {
    example(state) {
      return state.example;
    },
    exampleTwo(state) {
      return state.exampleTwo;
    },
  },
};
