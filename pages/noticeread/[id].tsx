import { GetServerSidePropsContext, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import NoticeRead from "../../components/noticeRead";
import noticeRepository from "../../repository/notice/notice.repository";

const NoticePage: NextPage = () => {
  return <NoticeRead />;
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(["notice/getNotice", query.id], () =>
      noticeRepository.getNotice({ notice_id: Number(query.id) })
    ),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default NoticePage;
