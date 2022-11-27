import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import useOAuthLogin from "../../hooks/auth/useOAuthLogin";

const AuthLoading: NextPage = () => {
  const { data } = useSession();

  const { requsetLoginWithGoogle } = useOAuthLogin();

  useEffect(() => {
    if (data && data.provider === "google" && data.user) {
      requsetLoginWithGoogle(
        data.user?.email as string,
        data.user?.image as string,
        data.user?.name as string
      );
    }
  }, [requsetLoginWithGoogle, data]);

  return <div></div>;
};

export default AuthLoading;
