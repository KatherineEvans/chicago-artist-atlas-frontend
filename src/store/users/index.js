import api from "@/api.js";

export default {
  namespaced: true,
  state: {
    firstName: "",
    lastName: "",
    company: {},
    email: "",
    // emailVerified: "",
    phone: "",
    // dateOfBirth: "",
    address: {},
    metadata: {},
    lastLoggedInAt: {},
    // tosAcceptedAt: "",
    unionStatus: "",
    // ethnicity: "",
    pronouns: "",
    // gender: "",
    // height: "",
    // eyeColor: "",
    // hairColor: "",
    vocalRange: "",
    instrumentsPlayed: "",
    talents: "",
    performanceType: "",
    agency: "",
    manager: "",
    website: "",
    headshot: "",
    resume: "",
  },
  mutations: {
    setFirstName(state, payload) {
      state.firstName = payload;
    },
    setLastName(state, payload) {
      state.lastName = payload;
    },
    setCompany(state, payload) {
      state.company = payload;
    },
    setEmail(state, payload) {
      state.exampleTwo = payload;
    },
    // setEmailVerified(state, payload) {
    //   state.emailVerified = payload;
    // },
    setPhone(state, payload) {
      state.phone = payload;
    },
    // setdateOfBirth(state, payload) {
    //   state.dateOfBirth = payload;
    // },
    setAddress(state, payload) {
      state.address = payload;
    },
    setMetadata(state, payload) {
      state.metadata = payload;
    },
    setLastLoggedInAt(state, payload) {
      state.lastLoggedInAt = payload;
    },
    // setTosAcceptedAt(state, payload) {
    //   state.tosAcceptedAt = payload;
    // },
    setUnionStatus(state, payload) {
      state.unionStatus = payload;
    },
    // setEthnicity(state, payload) {
    //   state.ethnicity = payload;
    // },
    setPronouns(state, payload) {
      state.pronouns = payload;
    },
    // setGender(state, payload) {
    //   state.gender = payload;
    // },
    // setHeight(state, payload) {
    //   state.height = payload;
    // },
    // setEyeColor(state, payload) {
    //   state.eyeColor = payload;
    // },
    // setHairColor(state, payload) {
    //   state.hairColor = payload;
    // },
    setVocalRange(state, payload) {
      state.vocalRange = payload;
    },
    setInstrumentsPlayed(state, payload) {
      state.instrumentsPlayed = payload;
    },
    setTalents(state, payload) {
      state.talents = payload;
    },
    setPerformanceType(state, payload) {
      state.performanceType = payload;
    },
    setAgency(state, payload) {
      state.agency = payload;
    },
    setManager(state, payload) {
      state.manager = payload;
    },
    setWebsite(state, payload) {
      state.website = payload;
    },
    setHeadshot(state, payload) {
      state.headshot = payload;
    },
    setResume(state, payload) {
      state.resume = payload;
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
    firstName(state) {
      return state.firstName;
    },
    lastName(state) {
      return state.lastName;
    },
    company(state) {
      return state.company;
    },
    email(state) {
      return state.email;
    },
    // emailVerified(state) {
    //   return state.emailVerified;
    // },
    phone(state) {
      return state.phone;
    },
    // dateOfBirth(state) {
    //   return state.dateOfBirth;
    // },
    address(state) {
      return state.address;
    },
    metadata(state) {
      return state.metadata;
    },
    lastLoggedInAt(state) {
      return state.lastLoggedInAt;
    },
    // tosAcceptedAt(state) {
    //   return state.tosAcceptedAt;
    // },
    unionStatus(state) {
      return state.unionStatus;
    },
    // ethnicity(state) {
    //   return state.ethnicity;
    // },
    pronouns(state) {
      return state.pronouns;
    },
    // gender(state) {
    //   return state.gender;
    // },
    // height(state) {
    //   return state.height;
    // },
    // eyeColor(state) {
    //   return state.eyeColor;
    // },
    // hairColor(state) {
    //   return state.hairColor;
    // },
    vocalRange(state) {
      return state.vocalRange;
    },
    instrumentsPlayed(state) {
      return state.instrumentsPlayed;
    },
    talents(state) {
      return state.talents;
    },
    performanceType(state) {
      return state.performanceType;
    },
    agency(state) {
      return state.agency;
    },
    manager(state) {
      return state.manager;
    },
    website(state) {
      return state.website;
    },
    headshot(state) {
      return state.headshot;
    },
    resume(state) {
      return state.resume;
    },
  },
};
