import { defineStore } from "pinia";
import axios from "axios";

export const useTheaterStore = defineStore("theater", {
  persist: true,
  state: () => ({
    noTheatersToDisplay: false,
    theaters: [],
    currentTheater: {},
    isLoading: true,
    seasonType: null,
    equity: null,
    searchTerm: null,
    seasonTypes: [
      "Plays",
      "Musicals",
      "Comedy",
      "Classical",
      "Opera",
      "Ballet",
      "Children's Theatre",
      "Avant Garde",
      "Theatre by Young Performers",
    ],
    first: 1,
    current: 1,
    last: null,
  }),
  actions: {
    getTheaters() {
      axios.get("/theaters").then((response) => {
        if (response.data.length > 0) {
          this.theaters = response.data;
          this.currentTheater = this.theaters[0];
          let addressesForTooltip = [];
          let addressArray = [];
          this.theaters.forEach((theater) => {
            if (theater.address) {
              addressesForTooltip.push({
                name: theater.name,
                address: theater.address.full_address,
                phone: theater.phone,
              });
              addressArray.push(theater.address.full_address);
            }
          });
        } else {
          this.noTheatersToDisplay = true;
          this.isLoading = false;
        }
      });
    },
  },
  getters: {
    second(state) {
      if (state.current >= state.last) {
        return null;
      }
      return state.current + 1;
    },
    third(state) {
      if (state.current + 1 >= state.last) {
        return null;
      }
      return state.current + 2;
    },

    formattedTheaters(state) {
      state.isLoading = true;
      let theaters = [...state.theaters];

      //filter theaters
      if (state.seasonType) {
        theaters = theaters.filter((theater) => theater.season_type && theater.season_type.includes(state.seasonType));
      }

      if (state.equity) {
        theaters = theaters.filter((theater) => theater.union_status && theater.union_status == state.equity);
      }

      if (state.searchTerm) {
        theaters = theaters.filter(
          (theater) => theater.name && theater.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
      }

      state.last = Math.ceil(theaters.length / 5);

      //  Pull/show correct number of theaters
      let paginatedTheaters = theaters.slice((state.current - 1) * 5, state.current * 5);

      state.isLoading = false;

      if (!paginatedTheaters.length) {
        state.noTheatersToDisplay = true;
        this.isLoading = false;
      }

      return paginatedTheaters;
    },
  },
});
