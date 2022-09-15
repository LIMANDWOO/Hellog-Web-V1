import { GetServerSidePropsContext, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import Proflie from "../../components/profile";
import memberRepository from "../../repository/member/member.repository";
import postRepository from "../../repository/post/post.repository";
import tagRepository from "../../repository/tag/tag.repository";

const ProfilePage: NextPage = () => {
  return <Proflie />;
};

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  // await Promise.all([
  //   query.tag !== "전체조회"
  //     ? queryClient.prefetchQuery(["post/getMyPostsByTag", query.tag], () =>
  //         postRepository.getMyPostsByTag({ tag: query.tag as string })
  //       )
  //     : queryClient.prefetchQuery("post/getMyPosts", () =>
  //         postRepository.getMyPosts()
  //       ),
  //   queryClient.prefetchQuery("member/getMyMember", () =>
  //     memberRepository.getMyMember()
  //   ),
  //   queryClient.prefetchQuery("tag/getMyTags", () => tagRepository.getMyTags()),
  // ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ProfilePage;
