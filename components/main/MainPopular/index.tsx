import { useGetTrendingPosts } from "../../../quries/post/post.query";
import { PostDetail } from "../../../types/post/post.type";
import PostCard from "../../common/PostCard";
import { MainPopularContainer } from "./style";

const MainPopular = () => {
  const { data: serverPopularPostsData } = useGetTrendingPosts();

  return (
    <MainPopularContainer>
      {serverPopularPostsData?.map((item) => (
        <PostCard key={item.id} data={item} />
      ))}
    </MainPopularContainer>
  );
};

export default MainPopular;
