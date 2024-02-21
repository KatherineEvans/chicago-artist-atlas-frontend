import axios from "axios";

export default {
  namespaced: true,
  state: {
    user: {
      firstName: "",
      lastName: "",
      company: {},
      email: "",
      phone: "",
      dateOfBirth: "",
      address: {},
    },
    profile: {
      id: null,
      bio: null,
      keep_private: false,
      union_status: null,
      ethnicity: null,
      pronouns: null,
      gender: null,
      height: null,
      eye_color: null,
      hair_color: null,
      vocal_range: null,
      performance_type: null,
      agency: null,
      manager: null,
      professional_website: null,
      headshot_url: null,
      resume_url: null,
    },
    performances: [],
    awards: [],
    talents: [],
    trainings: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setProfile(state, payload) {
      state.profile = payload;
    },
    setPerformances(state, payload) {
      state.performances = payload;
    },
    setAwards(state, payload) {
      state.awards = payload;
    },
    setTalents(state, payload) {
      state.talents = payload;
    },
    setTrainings(state, payload) {
      state.trainings = payload;
    },
  },
  actions: {
    getUserProfile({ commit }) {
      axios
        .get("/profile.json")
        .then((response) => {
          commit("setProfile", response.data);
        })
        .catch((error) => {
          console.log("user profile error", error);
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    profile(state) {
      return state.profile;
    },
    performances(state) {
      return state.performances;
    },
    awards(state) {
      return state.awards;
    },
    talents(state) {
      return state.talents;
    },
    trainings(state) {
      return state.trainings;
    },
  },
};
