import axios from "axios";
import { buildings } from "./buildings";

const baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5065/api/"
    : "https://task-backend.ddns.net:7065/api";

export const axiosInstance = axios.create({ baseURL });

export const requests = {
  buildings,
};
