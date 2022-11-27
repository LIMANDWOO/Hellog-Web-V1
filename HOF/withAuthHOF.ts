import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ACCESS_TOKEN_KEY } from "../constants/token/token.constant";
import { customAxiosSetAccessToken } from "../lib/axios/customAxios";
import memberRepository from "../repository/member/member.repository";
import { MemberRole } from "../types/member/member.type";

const withAuth = (role: MemberRole, getServerSideProps: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    const cookieItems = context.req.headers.cookie?.split(";");

    let accessToken = "";

    cookieItems?.some((item) => {
      item = item.replace(" ", "");
      const key = item.split("=");
      if (key[0] === ACCESS_TOKEN_KEY) {
        accessToken = key[1];
        return true;
      }
    });

    if (accessToken === "") {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }

    customAxiosSetAccessToken(accessToken);

    try {
      const data = await memberRepository.getMyMember();

      if (
        (data.user.role === "GUEST" && role === "STUDENT") ||
        ((data.user.role === "STUDENT" || data.user.role === "GUEST") &&
          role === "ADMIN")
      ) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    } catch (error) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }

    try {
      return await getServerSideProps(context);
    } catch (error) {}
  };
};

export default withAuth;
