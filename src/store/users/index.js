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
      console.log({ state: state });
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
          if (response.data.profiles.length > 0) {
            console.log(response.data.profiles[0]);
            commit("setProfile", response.data.profiles[0]);
          }
        })
        .catch((error) => {
          // commit("setErrors", error.response.data.status.message);
          console.log("signup posted w/errors", error.response.data.status.message);
          // return error.response.data.status.message;
        });
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    profile(state) {
      console.log(state, "party");
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
