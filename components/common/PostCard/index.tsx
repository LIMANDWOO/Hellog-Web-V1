import { useRouter } from "next/router";
import { PostDetail } from "../../../types/post/post.type";
import { PostCardBanner, PostCardContainer } from "./style";

interface Props {
  data: PostDetail;
}

const PostCard = ({ data }: Props) => {
  const router = useRouter();

  return (
    <PostCardContainer onClick={() => router.push(`/read/${data?.id}`)}>
      <PostCardBanner src={data?.thumbnail} />
    </PostCardContainer>
  );
};

export default PostCard;
