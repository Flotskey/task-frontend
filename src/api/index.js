import axios from "axios";
import { buildings } from "./buildings";

const baseURL = "http://localhost:5065/api/";
export const axiosInstance = axios.create({ baseURL });

export const requests = {
  buildings,
};
