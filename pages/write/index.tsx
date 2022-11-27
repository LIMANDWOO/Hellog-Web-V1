import { NextPage } from "next";
import dynamic from "next/dynamic";
import withAuth from "../../HOF/withAuthHOF";
const Write = dynamic(() => import("../../components/write"), { ssr: false });

const WritePage: NextPage = () => {
  return <Write />;
};

export const getServerSideProps = withAuth("STUDENT", async () => {
  return {
    props: {},
  };
});

export default WritePage;
