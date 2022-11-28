import { AxiosError } from "axios";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import authRepository from "../../repository/auth/auth.repository";
import token from "../token/token";
import { customAxiosSetAccessToken } from "./customAxios";

export const customAxiosErrorInterceptor = async (config: AxiosError) => {
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);
  const refreshToken = token.getToken(REFRESH_TOKEN_KEY);

  if (accessToken && refreshToken && config.response?.status === 401) {
    try {
      const { accessToken } = await authRepository.postRefresh({
        refreshToken,
      });
      token.setToken(ACCESS_TOKEN_KEY, accessToken);
      customAxiosSetAccessToken(accessToken);
    } catch (error) {
      token.removeToken();
      window.location.href = "/";
    }
  }
};
