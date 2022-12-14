import axios from "axios";
import config from "../../config/config.json";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/token/token.constant";
import token from "../token/token";
import { customAxiosErrorInterceptor } from "./interceptor";

export const customAxios = axios.create({
  baseURL: config.HELLOG_V1_SERVER,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

customAxios.interceptors.response.use(
  (res) => res,
  customAxiosErrorInterceptor
);

export const customAxiosSetAccessToken = (token: string) => {
  customAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};
