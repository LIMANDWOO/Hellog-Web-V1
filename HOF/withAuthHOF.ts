import { GetServerSideProps, GetServerSidePropsContext } from "next";
import cookies from "next-cookies";
import { ACCESS_TOKEN_KEY } from "../constants/token/token.constant";
import { customAxiosSetAccessToken } from "../lib/axios/customAxios";
import memberRepository from "../repository/member/member.repository";
import { MemberRole } from "../types/member/member.type";

const withAuth = (role: MemberRole, getServerSideProps: GetServerSideProps) => {
  return async (context: GetServerSidePropsContext) => {
    console.log();

    const accessToken = cookies(context)[ACCESS_TOKEN_KEY];

    if (accessToken === undefined) {
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
