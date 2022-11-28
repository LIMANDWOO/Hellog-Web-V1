import { GetServerSidePropsContext, NextPage } from "next";
import dynamic from "next/dynamic";
import { dehydrate, QueryClient } from "react-query";
import withAuth from "../../../HOF/withAuthHOF";
import postRepository from "../../../repository/post/post.repository";
const Write = dynamic(() => import("../../../components/write"), {
  ssr: false,
});

const WriteModifyPage: NextPage = () => {
  return <Write />;
};

export const getServerSideProps = withAuth(
  "STUDENT",
  async ({ query }: GetServerSidePropsContext) => {
    const queryClient = new QueryClient();

    await Promise.all([
      queryClient.prefetchQuery(["post/getPost", query.id], () =>
        postRepository.getPost({ id: Number(query.id) })
      ),
      {
        cacheTime: 1000 * 30,
      },
    ]);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);

export default WriteModifyPage;
