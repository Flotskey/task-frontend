import { axiosInstance } from "./index";

export const locations = {
  async add(addLocationDTO) {
    const response = await axiosInstance.post("/locations/add", addLocationDTO);
    return response.data;
  },
  async deleteByBuildingId(buildingId) {
    const response = await axiosInstance.delete(
      `/locations/delete/${buildingId}`
    );
    return response.data;
  },
};
