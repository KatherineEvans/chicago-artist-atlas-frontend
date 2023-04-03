import api from "@/api.js";

export default {
  namespaced: true,
  state: {
    id: null,
    date: "",
    nameOfCompany: "",
    nameOfShow: "",
    writtenBy: "",
    director: "",
    inTheRoom: "",
    location: "",
    unionStatus: "",
    payScale: "",
    materialsToPrepare: "",
    castBreakdown: "",
    characters: [
      {
        id: null,
        characterName: "",
        characterAge: null,
        characterGender: "",
        characterEthnicity: "",
        characterDescription: "",
        characterSkills: "",
        characterWarnings: "",
        characterNotes: "",
        auditionId: null,
      },
    ],
    rehearsalStartDate: "",
    showStartDate: "",
    showEndDate: "",
    showLocation: "",
    showWarnings: "",
    howToSubmit: "",
    additionalNotes: "",
  },
  mutations: {
    setId(state, payload) {
      state.id = payload;
    },
    setDate(state, payload) {
      state.date = payload;
    },
    setNameOfCompany(state, payload) {
      state.nameOfCompany = payload;
    },
    setNameOfShow(state, payload) {
      state.nameOfShow = payload;
    },
    setWrittenBy(state, payload) {
      state.writtenBy = payload;
    },
    setDirector(state, payload) {
      state.director = payload;
    },
    setInTheRoom(state, payload) {
      state.inTheRoom = payload;
    },
    setLocation(state, payload) {
      state.location = payload;
    },
    setUnionStatus(state, payload) {
      state.unionStatus = payload;
    },
    setPayScale(state, payload) {
      state.payScale = payload;
    },
    setMaterialsToPrepare(state, payload) {
      state.materialsToPrepare = payload;
    },
    setCastBreakdown(state, payload) {
      state.castBreakdown = payload;
    },
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setAuditionId(state, payload) {
      state.auditionId = payload;
    },
    setRehearsalStartDate(state, payload) {
      state.rehearsalStartDate = payload;
    },
    setShowStartDate(state, payload) {
      state.showStartDate = payload;
    },
    setShowEndDate(state, payload) {
      state.showEndDate = payload;
    },
    setShowLocation(state, payload) {
      state.showLocation = payload;
    },
    setShowWarnings(state, payload) {
      state.showWarnings = payload;
    },
    setHowToSubmit(state, payload) {
      state.howToSubmit = payload;
    },
    setAdditionalNotes(state, payload) {
      state.additionalNotes = payload;
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
    id(state) {
      return state.id;
    },
    date(state) {
      return state.date;
    },
    nameOfCompany(state) {
      return state.nameOfCompany;
    },
    nameOfShow(state) {
      return state.nameOfShow;
    },
    writtenBy(state) {
      return state.writtenBy;
    },
    director(state) {
      return state.director;
    },
    inTheRoom(state) {
      return state.inTheRoom;
    },
    location(state) {
      return state.location;
    },
    unionStatus(state) {
      return state.unionStatus;
    },
    payScale(state) {
      return state.payScale;
    },
    materialsToPrepare(state) {
      return state.materialsToPrepare;
    },
    castBreakdown(state) {
      return state.castBreakdown;
    },
    characters(state) {
      return state.characters;
    },
    auditionId(state) {
      return state.auditionId;
    },
    rehearsalStartDate(state) {
      return state.rehearsalStartDate;
    },
    showStartDate(state) {
      return state.showStartDate;
    },
    showEndDate(state) {
      return state.showEndDate;
    },
    showLocation(state) {
      return state.showLocation;
    },
    showWarnings(state) {
      return state.showWarnings;
    },
    howToSubmit(state) {
      return state.howToSubmit;
    },
    additionalNotes(state) {
      return state.additionalNotes;
    },
  },
};
