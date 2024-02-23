import { defineStore } from "pinia";
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
      age_low: "18-22",
      age_high: "33-37",
      bio: null,
      eye_color: "Brown",
      hair_color: "Brown",
      headshot_url: null,
      height: "5' 7\"",
      keep_private: false,
      manager: null,
      performance_type: null,
      professional_website: null,
      tech_agent: null,
      tech_manager: null,
      resume_url: null,
      union_status: "Equity",
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
    otherUserTechTalents: [],
    trainings: [],
    userTrainings: [],

    // Image/PDF Upload
    headshotFile: null,
    headshotUpload: null,
    maxBytes: 5242880,
    fileTooBig: false,
    fileTypeWrong: false,

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
    eyeColorOptions: ["Blue", "Brown", "Green", "Gray", "Hazel", "Amber", "Red", "Other"],
    hairColorOptions: [
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
    unionStatus: {
      selected: "Equity",
      options: ["Equity", "Non Equity", "SAG-AFTRA"],
    },
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
          console.log("couldn't fetch ethnicity list", error);
        });
    },
    getTechTalents() {
      axios.get("/tech-talents.json").then((response) => {
        this.techTalents = response.data;
      });
    },
    getCurrentUser() {
      axios.get("/current_user.json").then((response) => {
        // console.log(response.data, "current user");
      });
    },
    getUserProfile() {
      this.isLoading = true;
      axios
        .get("/profile.json")
        .then((response) => {
          if (response.data) {
            console.log(response.data, "profile");
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
            if (response.data.other_gender) {
              this.otherUserGenders = JSON.parse(response.data.other_gender);
            }
            if (response.data.other_pronouns) {
              this.otherUserPronouns = JSON.parse(response.data.other_pronouns);
            }
          }
        })
        .catch((error) => {
          console.log("error loading profile", error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    handleSetFile(event) {
      if (event.target.files.length > 0) {
        this.fileTooBig = false;
        this.fileTypeWrong = false;
        this.headshotFile = null;
        this.headshotUpload = null;
        this.headshotUpload = event.target.files[0];
        if (event.target.files[0].type.includes("image")) {
          if (event.target.files[0].size > this.maxBytes) {
            this.fileTooBig = true;
          } else {
            let reader = new FileReader();
            reader.onload = (event) => {
              this.headshotFile = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
          }
        } else {
          this.fileTypeWrong = true;
        }
      }
    },
    saveProfile(next) {
      let data = {
        ...this.profile,
        image_upload: this.headshotUpload,
        image_file: this.headshotFile,
        pronouns: JSON.stringify(this.pronounOptions),
        other_pronouns: JSON.stringify(this.otherUserPronouns),
        other_gender: JSON.stringify(this.otherUserGenders),
        other_ethnicities: JSON.stringify(this.otherUserEthnicities),
      };
      this.profile.id ? this.updateProfile(data, next) : this.createProfile(data, next);
    },
    updateProfile(data, next) {
      axios.patch(`/profiles/${this.profile.id}.json`, data).then((response) => {
        localStorage.setItem("headshotUrl", response.data.headshot_url);
        this.profile = response.data;
        if (next) {
          this.$router.push("/user/profile/talents");
        } else {
          this.alertMessage();
        }
      });
    },
    createProfile(data, next) {
      console.log(data, next, "create");
      // axios.post("/profiles.json", data).then((response) => {
      //   localStorage.setItem("headshotUrl", response.data.headshot_url);
      //   this.$store.commit("users/setProfile", response.data);
      //   if (this.next) {
      //     this.$router.push("/user/profile/talents");
      //   } else {
      //     this.alertMessage();
      //   }
      // });
    },
    updateTechTalentCheckbox(option, checked) {
      console.log("update tech talent checkbox", option, checked);
      if (checked) {
        this.talentsToSave[option.id] = null;
      } else {
        delete this.talentsToSave[option.id];
      }
    },
    updateTechTalentText(event, category) {
      console.log("update tech talent text", event, category);
      if (event.target.value.includes(",")) {
        if (this.otherTalents[category]) {
          this.otherTalents[category].push(event.target.value.slice(0, -1));
        } else {
          this.otherTalents[category] = [event.target.value.slice(0, -1)];
        }
        event.target.value = "";
      }
    },
  },
  getters: {},
});
