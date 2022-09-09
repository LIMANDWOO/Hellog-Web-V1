import { NextPage } from "next";
import Proflie from "../../components/profile";
import { Context } from "../../types/util/context.type";

const ProfilePage: NextPage = () => {
  return <Proflie />;
};

export const getServerSideProps = async ({ query }: Context) => {
  return {
    props: {},
  };
};

export default ProfilePage;
