import { defineStore } from "pinia";
import { useAlertStore } from "./useAlertStore.js";
import axios from "axios";

export const useUserStore = defineStore("user", {
  persist: true,
  state: () => ({
    currentTab: "General",
    next: false,
    isLoading: true,
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

    // Profiles
    originalProfile: {},
    profile: {
      acting_reel_url: null,
      agency: null,
      age_low: null,
      age_high: null,
      bio: null,
      eye_color: null,
      hair_color: null,
      headshot_url: null,
      height: null,
      keep_private: false,
      manager: null,
      performance_type: null,
      professional_website: null,
      tech_agent: null,
      tech_manager: null,
      resume_url: null,
      union_status: null,
      vocal_range: null,
    },

    // Accomplishments
    performances: [],
    userPerformances: [],
    awards: [],
    userAwards: [],
    talents: [],
    userTalents: [],
    techTalents: [],
    userTechTalents: [],
    otherUserTechTalents: {},
    trainings: [],
    userTrainings: [],

    // Image/PDF Upload
    maxBytes: 5242880,
    headshotFile: null,
    headshotUpload: null,
    headshotFileTooBig: false,
    headshotFileTypeWrong: false,
    resumeUpload: null,
    resumeFileTooBig: false,
    resumeFileTypeWrong: false,

    // Ethnicities
    ethnicitiesChecked: [],
    ethnicityOptions: [],
    otherUserEthnicities: [],

    // Genders
    gendersChecked: [],
    genderOptions: [],
    otherUserGenders: [],

    // Pronouns
    pronounsChecked: [],
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
    otherUserPronouns: [],

    // Other Traits
    heightOptions: [
      null,
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
    eyeColorOptions: [null, "Blue", "Brown", "Green", "Gray", "Hazel", "Amber", "Red", "Other"],
    hairColorOptions: [
      null,
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
    unionStatus: [null, "Equity", "Non Equity", "SAG-AFTRA"],
  }),
  actions: {
    getTalents() {},
    getAdditionalInfo() {
      axios
        .get("/profile_elements.json")
        .then((response) => {
          this.ethnicityOptions = response.data.ethnicities;
          this.genderOptions = response.data.genders;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTechTalents() {
      axios.get("/tech-talents.json").then((response) => {
        this.techTalents = response.data;
      });
    },
    getCurrentUser() {
      axios.get("/current_user.json").then((response) => {});
    },
    getUserProfile() {
      this.gendersChecked = [];
      this.ethnicitiesChecked = [];
      this.pronounsChecked = [];
      this.isLoading = true;
      axios
        .get("/profile.json")
        .then((response) => {
          this.getUserTechTalents();
          if (response.data) {
            this.profile = response.data;
            this.originalProfile = response.data;
            this.headshotFile = response.data.headshot_url;
            if (response.data.pronouns) {
              let data = JSON.parse(response.data.pronouns);
              this.pronounOptions = data;
              data.forEach((pronoun) => {
                if (pronoun.value) {
                  this.pronounsChecked.push(pronoun.id);
                }
              });
            }
            if (response.data.user_genders) {
              let data = response.data.user_genders;
              data.forEach((gender) => {
                this.gendersChecked.push(gender.gender_id);
              });
            }
            if (response.data.user_ethnicities) {
              let data = response.data.user_ethnicities;
              data.forEach((ethnicity) => {
                this.ethnicitiesChecked.push(ethnicity.ethnicity_id);
              });
            }
            if (response.data.other_gender) {
              this.otherUserGenders = JSON.parse(response.data.other_gender);
            }
            if (response.data.other_pronouns) {
              this.otherUserPronouns = JSON.parse(response.data.other_pronouns);
            }
            if (response.data.other_ethnicities) {
              this.otherUserEthnicities = JSON.parse(response.data.other_ethnicities);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    saveProfile(next) {
      const formData = new FormData();

      // Iterate through the object and append each key-value pair to FormData
      for (const key in this.profile) {
        if (this.profile[key]) {
          formData.append(key, this.profile[key]);
        }
      }

      if (this.headshotUpload?.name) {
        formData.append("image_upload", this.headshotUpload);
      }
      formData.append("image_file", this.headshotFile);
      if (this.resumeUpload?.name) {
        formData.append("resume_upload", this.resumeUpload);
      }

      formData.append("pronouns", JSON.stringify(this.pronounOptions));
      formData.append("other_pronouns", JSON.stringify(this.otherUserPronouns));
      formData.append("other_genders", JSON.stringify(this.otherUserGenders));
      formData.append("other_ethnicities", JSON.stringify(this.otherUserEthnicities));
      formData.append("checked_genders", JSON.stringify([...new Set(this.gendersChecked)]));
      formData.append("checked_ethnicities", JSON.stringify([...new Set(this.ethnicitiesChecked)]));

      this.profile.id ? this.updateProfile(formData, next) : this.createProfile(formData, next);
    },
    saveTechTalents() {
      axios.post("/tech-talents.json", {
        tech_talents: this.userTechTalents,
        other_tech_talents: this.otherUserTechTalents,
      });
    },
    updateProfile(data, next) {
      axios
        .patch(`/profiles/${this.profile.id}.json`, data)
        .then((response) => {
          localStorage.setItem("headshotUrl", response.data.headshot_url);
          this.profile = response.data;
          if (response.data.pronouns) {
            let data = JSON.parse(response.data.pronouns);
            this.pronounOptions = data;
            data.forEach((pronoun) => {
              if (pronoun.value) {
                this.pronounsChecked.push(pronoun.id);
              }
            });
          }
          localStorage.setItem("headshotUrl", response.data.headshot_url);
          this.saveTechTalents();
          let message = {
            title: "Success!",
            body: "Profile successfully saved.",
            icon: "success",
          };
          useAlertStore().setMessage(message);
        })
        .catch((error) => {
          console.error(error);
          // SET ERROR MESSAGE
          let message = {
            title: "Whoops!",
            body: "Looks like something went wrong. Please try again. If error persists, email info@chiartistatlas.com",
            icon: "failure",
          };
          useAlertStore().setMessage(message);
        });
    },
    createProfile(data, next) {
      axios
        .post("/profiles.json", data)
        .then((response) => {
          localStorage.setItem("headshotUrl", response.data.headshot_url);
          this.profile = response.data;
          if (response.data.pronouns) {
            let data = JSON.parse(response.data.pronouns);
            this.pronounOptions = data;
            data.forEach((pronoun) => {
              if (pronoun.value) {
                this.pronounsChecked.push(pronoun.id);
              }
            });
          }
          localStorage.setItem("headshotUrl", response.data.headshot_url);
          this.saveTechTalents();
          let message = {
            title: "Success!",
            body: "Profile successfully saved.",
            icon: "success",
          };
          useAlertStore().setMessage(message);
        })
        .catch((error) => {
          console.error(error);
          // SET ERROR MESSAGE
          let message = {
            title: "Whoops!",
            body: "Looks like something went wrong. Please try again. If error persists, email info@chiartistatlas.com",
            icon: "failure",
          };
          useAlertStore().setMessage(message);
        });
    },
    updateTechTalentCheckbox(event) {
      if (this.userTechTalents.includes(event.id)) {
        const index = this.userTechTalents.indexOf(event.id);
        if (index > -1) {
          this.userTechTalents.splice(index, 1);
        }
      } else {
        this.userTechTalents.push(event.id);
      }
    },
    updateTechTalentText(event, category) {
      if (event.target.value.includes(",")) {
        if (this.otherUserTechTalents[category]) {
          this.otherUserTechTalents[category].push(event.target.value.slice(0, -1));
        } else {
          this.otherUserTechTalents[category] = [event.target.value.slice(0, -1)];
        }
        event.target.value = "";
      }
    },
    removeTechTalent(category, talent) {
      this.otherUserTechTalents[category] = this.otherUserTechTalents[category].filter((t) => t != talent);
    },
    getUserTechTalents() {
      this.otherUserTechTalents = [];
      this.userTechTalents = [];
      axios.get("/user_tech_talents.json").then((response) => {
        response.data.forEach((userTalent) => {
          if (userTalent.other) {
            this.otherUserTechTalents[userTalent.talent.category]
              ? this.otherUserTechTalents[userTalent.talent.category].push(userTalent.other)
              : (this.otherUserTechTalents[userTalent.talent.category] = [userTalent.other]);
          } else {
            this.userTechTalents.push(userTalent.talent_id);
          }
        });
      });
    },
  },
  getters: {},
});
