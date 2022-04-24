import { axiosInstance } from "./index";

export const buildings = {
  async getAll() {
    const response = await axiosInstance.get("buildings");
    return response.data;
  },

  async getById(id) {
    const response = await axiosInstance.get(`buildings/${id}`);
    return response.data;
  },

  async add(addBuildingDTO) {
    const response = await axiosInstance.post(`buildings/add`, addBuildingDTO);
    return response.data;
  },

  async update(updateBuildingDTO) {
    const response = await axiosInstance.put(
      `buildings/update`,
      updateBuildingDTO
    );
    return response.data;
  },

  async delete(id) {
    const response = await axiosInstance.delete(`buildings/delete/${id}`);
    return response.data;
  },
};
