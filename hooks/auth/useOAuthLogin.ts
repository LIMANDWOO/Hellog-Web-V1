import authRepository from "../../repository/auth/auth.repository";

const useOAuthLogin = () => {
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

      console.log(data);
    } catch (error) {}
  };

  return { requsetLoginWithGoogle };
};
export default useOAuthLogin;
