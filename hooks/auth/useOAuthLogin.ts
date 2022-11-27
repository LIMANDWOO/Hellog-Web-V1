import { useRouter } from "next/router";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import { customAxiosSetAccessToken } from "../../lib/axios/customAxios";
import token from "../../lib/token/token";
import authRepository from "../../repository/auth/auth.repository";

const useOAuthLogin = () => {
  const router = useRouter();

  const requsetLoginWithGoogle = async (
    email: string,
    picture: string,
    name: string
  ) => {
    try {
      const data = await authRepository.postLoginWithGoogleOAuth({
        email,
        picture,
        name,
      });

      token.setToken(ACCESS_TOKEN_KEY, data.access_token);
      token.setToken(REFRESH_TOKEN_KEY, data.refresh_token);

      customAxiosSetAccessToken(data.access_token);

      window.alert("로그인 성공");

      router.push("/");
    } catch (error) {
      window.alert("로그인 실패");

      router.push("/auth");
    }
  };

  return { requsetLoginWithGoogle };
};
export default useOAuthLogin;
