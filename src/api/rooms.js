import { axiosInstance } from "./index";

export const rooms = {
  async getByLocationId(locationId) {
    const response = await axiosInstance.get(`/locations/get/${locationId}`);
    return response.data;
  },

  async add(addRoomDTO) {
    const response = await axiosInstance.post("/locations/add", addRoomDTO);
    return response.data;
  },

  async update(updateRoomDTO) {
    const response = await axiosInstance.put(
      "/locations/update",
      updateRoomDTO
    );
    return response.data;
  },

  async delete(roomId) {
    const response = await axiosInstance.post(`/locations/delete/${roomId}`);
    return response.data;
  },
};
