import { GetServerSidePropsContext, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import Read from "../../components/read";
import withAuth from "../../HOF/withAuthHOF";
import postRepository from "../../repository/post/post.repository";

const ReadPage: NextPage = () => {
  return <Read />;
};

export const getServerSideProps = withAuth(
  "STUDENT",
  async ({ query }: GetServerSidePropsContext) => {
    const queryClient = new QueryClient();

    await Promise.all([
      queryClient.prefetchQuery(["post/getPost", query.id], () =>
        postRepository.getPost({ id: Number(query.id) })
      ),
    ]);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);

export default ReadPage;
