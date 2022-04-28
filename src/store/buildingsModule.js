import { requests } from "../api";
import router from "../router";

export const buildingsModule = {
  state: () => {
    return {
      buildings: {
        data: [],
        building: null,
        loading: false,
      },
    };
  },
  getters: {
    allBuildings(state) {
      return state.buildings.data;
    },
  },
  actions: {
    async fetchBuilding({ commit }, id) {
      try {
        commit("SET_BUILDINGS_LOADING", true);
        const response = await requests.buildings.getById(id);
        commit("SET_BUILDING", response.data);
      } catch (error) {
        console.error(error);
        commit("SET_BUILDINGS_LOADING", false);
      } finally {
        commit("SET_BUILDINGS_LOADING", false);
      }
    },
    async fetchBuildings({ commit }) {
      try {
        commit("SET_BUILDINGS_LOADING", true);
        const response = await requests.buildings.getAll();
        commit("SET_BUILDINGS", response.data);
      } catch (error) {
        console.error(error);
        commit("SET_BUILDINGS_LOADING", false);
      } finally {
        commit("SET_BUILDINGS_LOADING", false);
      }
    },

    async addBuilding({ commit }, data) {
      try {
        commit("SET_BUILDINGS_LOADING", true);
        const response = await requests.buildings.add(data);
        if (response.success) {
          commit("SET_BUILDINGS", response.data);
          router.replace("/");
        }
      } catch (error) {
        console.error(error);
        commit("SET_BUILDINGS_LOADING", false);
      } finally {
        commit("SET_BUILDINGS_LOADING", false);
      }
    },

    async updateBuilding({ commit }, data) {
      try {
        commit("SET_BUILDINGS_LOADING", true);
        const response = await requests.buildings.update(data);
        if (response.success) {
          router.replace("/");
        }
      } catch (error) {
        console.error(error);
        commit("SET_BUILDINGS_LOADING", false);
      } finally {
        commit("SET_BUILDINGS_LOADING", false);
      }
    },

    async deleteBuilding({ commit }, id) {
      try {
        commit("SET_BUILDINGS_LOADING", true);
        const response = await requests.buildings.delete(id);
        if (response.success) {
          commit("SET_BUILDINGS", response.data);
        }
      } catch (error) {
        console.error(error);
        commit("SET_BUILDINGS_LOADING", false);
      } finally {
        commit("SET_BUILDINGS_LOADING", false);
      }
    },
  },

  mutations: {
    SET_BUILDINGS(state, buildings) {
      state.buildings.data = buildings;
    },
    SET_BUILDING(state, building) {
      state.buildings.building = building;
    },
    SET_BUILDINGS_LOADING(state, bool) {
      state.buildings.loading = bool;
    },
  },
};
