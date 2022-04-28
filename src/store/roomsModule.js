import { requests } from "../api";

export const roomsModule = {
  state: () => {
    return {
      rooms: {
        data: [],
      },
    };
  },
  getters: {
    getRooms() {
      return this.state.rooms.data;
    },
  },
  actions: {
    async addRoom({ commit }, addRoomDTO) {
      try {
        const response = await requests.rooms.add(addRoomDTO);
        if (response.success) {
          commit("SET_ROOMS", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async updateRoom({ commit }, updateRoomDTO) {
      try {
        const response = await requests.rooms.update(updateRoomDTO);
        if (response.success) {
          commit("SET_ROOMS", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async deleteRoom({ commit }, roomId) {
      try {
        const response = await requests.rooms.delete(roomId);
        if (response.success) {
          commit("SET_ROOMS", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },

  mutations: {
    SET_ROOMS(state, rooms) {
      state.rooms.data = rooms;
    },
  },
};
