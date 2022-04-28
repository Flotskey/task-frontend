import axios from "axios";
import { buildings } from "./buildings";
import { locations } from "./locations";
import { rooms } from "./rooms";

const baseURL = "http://localhost:5065/api/";

export const axiosInstance = axios.create({
  baseURL,
  validateStatus: (status) => status < 500,
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (!response.data.success) {
      alert(response.data.errorMessage);
    }
    return response;
  },
  (error) => {
    console.log("ERROR!", error);
    return error;
  }
);

export const requests = {
  buildings,
  locations,
  rooms,
};
