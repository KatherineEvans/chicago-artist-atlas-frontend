import { defineStore } from "pinia";
import merge from "deepmerge";
import axios from "axios";

export const useUserStore = defineStore("userStore", {
  persist: true,
  state: () => ({
    originalUser: {},
    user: {
      firstName: "",
      lastName: "",
      company: {},
      email: "",
      phone: "",
      dateOfBirth: "",
      address: {},
    },
    originalProfile: {},
    profile: {
      bio: null,
      age_low: "18-22",
      age_high: "33-37",
      keep_private: false,
      union_status: "Equity",
      ethnicity: "Multiple ethnicity / Other",
      pronouns: null,
      gender: "Female",
      height: "5' 7\"",
      eye_color: "Brown",
      hair_color: "Brown",
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
    next: false,
    isLoading: true,
    headshotFile: null,
    headshotUpload: null,
    maxBytes: 5242880,
    fileTooBig: false,
    fileTypeWrong: false,
    genderChecked: [],
    pronounChecked: [],
    otherGender: [],
    otherPronouns: [],
    unionStatus: {
      selected: "Equity",
      options: ["Equity", "Non Equity", "SAG-AFTRA"],
    },
    height: {
      options: [
        "3' 0\"",
        "3' 1\"",
        "3' 2\"",
        "3' 3\"",
        "3' 4\"",
        "3' 5\"",
        "3' 6\"",
        "3' 7\"",
        "3' 8\"",
        "3' 9\"",
        "3' 10\"",
        "3' 11\"",
        "4' 0\"",
        "4' 1\"",
        "4' 2\"",
        "4' 3\"",
        "4' 4\"",
        "4' 5\"",
        "4' 6\"",
        "4' 7\"",
        "4' 8\"",
        "4' 9\"",
        "4' 10\"",
        "4' 11\"",
        "5' 0\"",
        "5' 1\"",
        "5' 2\"",
        "5' 3\"",
        "5' 4\"",
        "5' 5\"",
        "5' 6\"",
        "5' 7\"",
        "5' 8\"",
        "5' 9\"",
        "5' 10\"",
        "5' 11\"",
        "6' 0\"",
        "6' 1\"",
        "6' 2\"",
        "6' 3\"",
        "6' 4\"",
        "6' 5\"",
        "6' 6\"",
        "6' 7\"",
        "6' 8\"",
        "6' 9\"",
        "6' 10\"",
        "6' 11\"",
        "7' 0\"",
        "7' 1\"",
        "7' 2\"",
        "7' 3\"",
        "7' 4\"",
        "7' 5\"",
        "7' 6\"",
        "7' 7\"",
        "7' 8\"",
        "7' 9\"",
        "7' 10\"",
        "7' 11\"",
      ],
    },
    eyeColor: {
      options: ["Blue", "Brown", "Green", "Gray", "Hazel", "Amber", "Red", "Other"],
    },
    hairColor: {
      options: [
        "Blonde",
        "Brown",
        "Red",
        "Black",
        "Gray",
        "White",
        "Bald",
        "Blue",
        "Purple",
        "Green",
        "Orange",
        "Yellow",
        "Rainbow",
        "Other",
      ],
    },
    age: {
      options: ["18-22", "23-27", "28-32", "33-37", "38-42", "43-47", "48-52", "53-57", "58-65", "Above 65"],
    },
    pronounOptions: [
      {
        id: 1,
        name: "She, Her, Hers",
        value: false,
      },
      {
        id: 2,
        name: "He, Him, His",
        value: false,
      },
      {
        id: 3,
        name: "They, Them, Their",
        value: false,
      },
      {
        id: 4,
        name: "Ze, Zir, Zirs",
        value: false,
      },
      {
        id: 5,
        name: "Ze, Hir, Hirs",
        value: false,
      },
      {
        id: 6,
        name: "Prefer not to share",
        value: false,
      },
    ],
    genderOptions: [
      { id: 1, name: "Male", value: false },
      { id: 2, name: "Female", value: false },
      { id: 3, name: "Transgender", value: false },
      { id: 4, name: "Demigender", value: false },
      { id: 5, name: "Agender", value: false },
      { id: 6, name: "Nonbinary", value: false },
      { id: 7, name: "Genderqueer", value: false },
      { id: 8, name: "Two-Spirit", value: false },
      { id: 9, name: "Prefer Not to Answer", value: false },
    ],
    ethnicity: {
      options: [
        "American Indian or Alaskan Native",
        "Asian / Pacific Islander",
        "Black or African American",
        "Hispanic",
        "White / Caucasian",
        "Multiple ethnicity / Other",
      ],
    },
  }),
  actions: {
    getUserProfile() {
      axios
        .get("/profile.json")
        .then((response) => {
          if (response.data.profiles.length > 0) {
            response?.data?.profiles[0] ? (this.profile = response.data.profiles[0]) : "";
          }
        })
        .catch((error) => {
          console.log("signup posted w/errors", error.response.data.status.message);
        });
    },
    getProfile() {
      axios
        .get("/profile.json")
        .then((response) => {
          if (response.data) {
            this.profile = response.data;
            this.headshotFile = response.data.headshot_url;
            if (response.data.pronouns) {
              let data = JSON.parse(response.data.pronouns);
              this.pronounOptions = data;
              data.forEach((pronoun) => {
                if (pronoun.value) {
                  this.pronounChecked.push(pronoun.id);
                }
              });
            }
            if (response.data.gender) {
              let data = JSON.parse(response.data.gender);
              this.genderOptions = data;
              data.forEach((gender) => {
                if (gender.value) {
                  this.genderChecked.push(gender.id);
                }
              });
            }
            if (response.data.other_gender) {
              this.otherGender = JSON.parse(response.data.other_gender);
            }
            if (response.data.other_pronouns) {
              this.otherPronouns = JSON.parse(response.data.other_pronouns);
            }
          }
          this.isLoading = false;
        })
        .catch((error) => {
          console.log("error loading profile", error.response.data.status.message);
        });
    },
  },
  getters: {},
});
