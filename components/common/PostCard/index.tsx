import { useRouter } from "next/router";
import { Post } from "../../../types/post/post.type";
import { PostCardBanner, PostCardContainer } from "./style";

interface Props {
  data: Post;
}

const PostCard = ({ data }: Props) => {
  const router = useRouter();

  return (
    <PostCardContainer onClick={() => router.push(`/read/${data?.id}`)}>
      <PostCardBanner src={data?.image} />
    </PostCardContainer>
  );
};

export default PostCard;
