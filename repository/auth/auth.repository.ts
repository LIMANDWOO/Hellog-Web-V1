import axios from "axios";
import {
  LoginWithGoogleOAuthResponse,
  RefreshResponse,
} from "../../types/auth/auth.type";
import { postLoginWithGoogleOAuthParam, postRefreshParam } from "./auth.param";
import config from "../../config/config.json";

class AuthRepository {
  public async postRefresh({
    refreshToken,
  }: postRefreshParam): Promise<RefreshResponse> {
    const { data } = await axios.post(
      `${config.HELLOG_V1_SERVER}/auth/refresh`,
      { refreshToken }
    );

    return data;
  }

  public async postLoginWithGoogleOAuth({
    email,
    picture,
    name,
  }: postLoginWithGoogleOAuthParam): Promise<LoginWithGoogleOAuthResponse> {
    const { data } = await axios.post(
      `${config.HELLOG_V1_SERVER}/auth/login/google`,
      {
        email,
        picture,
        name,
      }
    );
    return data;
  }
}

export default new AuthRepository();
