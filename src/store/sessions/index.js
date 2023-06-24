import api from "@/api.js";
import axios from "axios";

export default {
  namespaced: true,
  state: {
    errors: [],
    auth_token: null,
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
    setUserInfo(state, data) {
      state.user = data.data.user;
      state.auth_token = data.headers.authorization;
      axios.defaults.headers.common["Authorization"] = data.headers.authorization;
      localStorage.setItem("auth_token", data.headers.authorization);
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
      console.log(payload);
    },
  },
  actions: {
    registerUser({ commit }, payload) {
      axios
        .post("/users.json", payload)
        .then((response) => {
          console.log("signup posted w/response", response);
          // commit("setUserInfo", response);
          // commit("setDefaultUserInfo", response);
        })
        .catch((error) => {
          // commit("setErrors", error);
          console.log("posted w/errors", error);
        });
    },
    loginUser({ commit }, payload) {
      axios
        .post("/users/sign_in.json", payload)
        .then((response) => {
          console.log(response, "signin");
          console.log(response.headers.authorization, "shit");
          localStorage.setItem("auth_token", response.headers.authorization);
          axios.defaults.headers.common["Authorization"] = response.headers.authorization;
          // axios.defaults.headers.common["Authorization"] = `${response.headers.authorization}`;
          axios.get("/theaters").then((response) => {
            console.log(response, "theaters call to get current user");
          });
          // commit("setUserInfo", response);
          // commit("setDefaultUserInfo", response);
        })
        .catch((error) => {
          console.log("posted w/errors", error);
          // commit("setErrors", error);
        });
    },
    logoutUser({ commit }) {
      const config = {
        headers: {
          authorization: state.auth_token,
        },
      };
      new Promise((resolve, reject) => {
        axios
          .delete("/users/sign_out.json", config)
          .then(() => {
            commit("resetUserInfo");
            resolve();
          })
          .catch((error) => {
            commit("setErrors", errors);
            reject(error);
          });
      });
    },
    resetUserPassword({ commit }, payload) {
      axios.put("/users/password.json", payload).then((response) => {
        console.log(response, "password email response from backend");
      });
    },
  },
  getters: {
    getErrors(state) {
      return state.errors;
    },
    getAuthToken(state) {
      return state.auth_token;
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
      const loggedOut = state.auth_token == null || state.auth_token == JSON.stringify(null);
      return !loggedOut;
    },
  },
};
