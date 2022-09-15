import { GetServerSidePropsContext, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import postRepository from "../../repository/post/post.repository";

const ReadPage: NextPage = () => {
  return <div>읽기</div>;
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery(["post/getPost", query.id], () =>
  //   postRepository.getPost({ id: Number(query.id) })
  // );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ReadPage;
