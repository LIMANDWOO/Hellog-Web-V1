import axios from "axios";
import { LoginWithGoogleOAuthResponse } from "../../types/auth/auth.type";
import { postLoginWithGoogleOAuthParam } from "./auth.param";
import config from "../../config/config.json";

class AuthRepository {
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
