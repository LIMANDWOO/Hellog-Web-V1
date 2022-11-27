import { GetServerSidePropsContext } from "next";
import memberRepository from "../repository/member/member.repository";

const withAuth = (gssp: any) => {
  return async (context: GetServerSidePropsContext) => {
    const data = await memberRepository.getMyMember();

    console.log(data);

    const gsspData = await gssp(context);

    return {
      props: {
        ...gsspData.props,
        data,
      },
    };
  };
};

export default withAuth;
