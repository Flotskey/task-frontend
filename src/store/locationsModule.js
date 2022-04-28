import { requests } from "../api";
import router from "../router";

export const locationsModule = {
  state: () => {
    return {
      locations: {
        data: [],
      },
    };
  },
  getters: {
    getLocations() {
      return this.$store.state.locations.data;
    },
  },
  actions: {
    async addLocation({ commit }, addLocationDTO) {
      try {
        const response = await requests.locations.add(addLocationDTO);
        if (response.success) {
          commit("SET_LOCATIONS", response.data);
          router.back();
        }
      } catch (error) {
        console.error(error);
      }
    },

    async deleteLocation({ commit, dispatch }, buildingId) {
      try {
        const response = await requests.locations.deleteByBuildingId(
          buildingId
        );
        if (response.success) {
          dispatch("fetchBuilding", buildingId);
          commit("SET_LOCATIONS", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },

  mutations: {
    SET_LOCATIONS(state, locations) {
      state.locations.data = locations;
    },
  },
};
