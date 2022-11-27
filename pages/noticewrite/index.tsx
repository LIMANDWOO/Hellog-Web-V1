import { NextPage } from "next";
import NoticeWrite from "../../components/noticeWrite";
import withAuth from "../../HOF/withAuthHOF";

const NoticeWritePage: NextPage = () => {
  return <NoticeWrite />;
};

export const getServerSideProps = withAuth("ADMIN", async () => {
  return {
    props: {},
  };
});

export default NoticeWritePage;
