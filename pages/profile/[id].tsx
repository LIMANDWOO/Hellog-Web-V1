import { GetServerSidePropsContext, NextPage } from "next";
import Proflie from "../../components/profile";

const ProfilePage: NextPage = () => {
  return <Proflie />;
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  return {
    props: {},
  };
};

export default ProfilePage;
