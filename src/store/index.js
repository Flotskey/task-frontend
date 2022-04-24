import { createStore } from "vuex";
import { requests } from "../api";
import router from "../router";

export default createStore({
  state: () => {
    return {
      buildings: {
        data: [],
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
        } else {
          alert(response.errorMessage);
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
        } else {
          alert(response.errorMessage);
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
        } else {
          alert(response.errorMessage);
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
    SET_BUILDINGS_LOADING(state, bool) {
      state.buildings.loading = bool;
    },
  },
  modules: {},
});
