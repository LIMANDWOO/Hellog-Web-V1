import { NextPage } from "next";
import dynamic from "next/dynamic";
import withAuth from "../../HOF/withAuthHOF";

const NoticeWrite = dynamic(() => import("../../components/noticeWrite"), {
  ssr: false,
});

const NoticeWritePage: NextPage = () => {
  return <NoticeWrite />;
};

export const getServerSideProps = withAuth("ADMIN", async () => {
  return {
    props: {},
  };
});

export default NoticeWritePage;
