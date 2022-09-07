import { useRouter } from "next/router";
import { useEffect } from "react";
import { ACCESS_TOKEN_KEY } from "../../constants/token/token.constant";
import token from "../../lib/token/token";

const useMain = () => {
  const router = useRouter();

  //   useEffect(() => {
  //     if (token.getToken(ACCESS_TOKEN_KEY) === null) {
  //       router.push("/auth");
  //     }
  //   }, []);

  return {};
};

export default useMain;
