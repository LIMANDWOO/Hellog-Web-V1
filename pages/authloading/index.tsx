import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import useOAuthLogin from "../../hooks/auth/useOAuthLogin";

const AuthLoading: NextPage = () => {
  const { data } = useSession();

  const { requsetLoginWithGoogle } = useOAuthLogin();

  useEffect(() => {
    console.log(data);

    if (data) {
      if (data.provider === "google") {
        requsetLoginWithGoogle(
          data.user?.email,
          data.user?.image,
          data.user?.name
        );
      }
    }
  }, [requsetLoginWithGoogle, data]);

  return <div></div>;
};

export default AuthLoading;
