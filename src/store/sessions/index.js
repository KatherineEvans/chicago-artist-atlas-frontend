import router from "@/router";
import axios from "axios";

export default {
  namespaced: true,
  state: {
    errors: null,
    authToken: null,
    passwordResetToken: null,
    user: {
      firstName: null,
      lastName: null,
      company: {},
      email: null,
      phone: null,
      address: {},
      metadata: null,
      lastLoggedInAt: null,
      tosAcceptedAt: null,
    },
    defaultUser: {
      firstName: null,
      lastName: null,
      company: {},
      email: null,
      phone: null,
      address: {},
      metadata: null,
      lastLoggedInAt: null,
      tosAcceptedAt: null,
    },
  },
  mutations: {
    setAuthToken(state, data) {
      state.authToken = data;
    },
    setUserInfo(state, data) {
      state.user = data.data.user;
      state.authToken = data.headers.authorization;
      axios.defaults.headers.common["Authorization"] = data.headers.authorization;
      localStorage.setItem("authToken", data.headers.authorization);
    },
    setDefaultUserInfo(state, data) {
      state.defaultUser = data.data.user;
    },
    resetUserInfo(state, payload) {
      state.user = state.defaultUser;
    },
    setErrors(state, payload) {
      state.errors = payload;
    },
    setPasswordResetToken(state, payload) {
      state.passwordResetToken = payload;
    },
  },
  actions: {
    registerUser({ commit }, payload) {
      commit("setErrors", null);
      axios
        .post("/users.json", payload)
        .then((response) => {
          // commit("setUserInfo", response);
          // commit("setDefaultUserInfo", response);
        })
        .catch((error) => {
          commit("setErrors", error.response.data.status.message);
          return error.response.data.status.message;
        });
    },
    loginUser({ commit }, payload) {
      commit("setErrors", null);
      axios
        .post("/users/sign_in.json", payload)
        .then((response) => {
          localStorage.setItem("authToken", response.headers.authorization);
          axios.defaults.headers.common["Authorization"] = response.headers.authorization;
          // commit("setUserInfo", response);
          // commit("setDefaultUserInfo", response);
        })
        .catch((error) => {
          commit("setErrors", error.response.data.status.message);
        });
    },
    logoutUser({ commit }) {
      const config = {
        headers: {
          authorization: localStorage.authToken,
        },
      };
      axios
        .delete("/users/sign_out.json", config)
        .then(() => {
          // localStorage.clear();
          // delete axios.defaults.headers.common["Authorization"];
          // router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    resetUserPassword({ commit }, payload) {
      axios.post("/users/password.json", payload).then((response) => {
        // console.log(response, "password email response from backend");
      });
    },
  },
  getters: {
    getErrors(state) {
      return state.errors;
    },
    getAuthToken(state) {
      return state.authToken;
    },
    getFirstName(state) {
      return state.user?.firstName;
    },
    getLastName(state) {
      return state.user?.lastName;
    },
    getCompany(state) {
      return state.user?.company;
    },
    getEmail(state) {
      return state.user?.email;
    },
    getPhone(state) {
      return state.user?.phone;
    },
    getAddress(state) {
      return state.user?.address;
    },
    getMetadata(state) {
      return state.user?.metadata;
    },
    getLastLoggedInAt(state) {
      return state.user?.lastLoggedInAt;
    },
    getTosAcceptedAt(state) {
      return state.user?.tosAcceptedAt;
    },
    isLoggedIn(state) {
      const loggedOut = state.authToken == null || state.authToken == JSON.stringify(null);
      return !loggedOut;
    },
  },
};
