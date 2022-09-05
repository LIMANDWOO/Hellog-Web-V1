import axios from "axios";
import config from "../../config/config.json";

export const customAxios = axios.create({
  baseURL: config.HELLOG_V1_SERVER,
});
