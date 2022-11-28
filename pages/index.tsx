import type { NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import Main from "../components/main";
import noticeRepository from "../repository/notice/notice.repository";
import postRepository from "../repository/post/post.repository";

const MainPage: NextPage = () => {
  return <Main />;
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery("post/getPopular", () =>
      postRepository.getTrendingPosts()
    ),
    queryClient.prefetchQuery("notice/getNotices", () =>
      noticeRepository.getNotices()
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MainPage;
