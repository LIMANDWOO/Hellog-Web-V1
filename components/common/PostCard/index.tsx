import { useRouter } from "next/router";
import { PostDetail } from "../../../types/post/post.type";
import {
  PostCardBanner,
  PostCardBottomProfileImg,
  PostCardBottomProfileText,
  PostCardBottomWrap,
  PostCardContainer,
  PostCardDescriptionWrap,
  PostCardSummary,
  PostCardTitle,
} from "./style";

interface Props {
  data: PostDetail;
}

const PostCard = ({ data }: Props) => {
  const router = useRouter();

  return (
    <PostCardContainer onClick={() => router.push(`/read/${data?.id}`)}>
      <PostCardBanner src={data?.thumbnail_url} />
      <PostCardDescriptionWrap>
        <PostCardTitle>{data.title}</PostCardTitle>
        <PostCardSummary>{data.summary}</PostCardSummary>
        <PostCardBottomWrap>
          <PostCardBottomProfileImg src={data.student.user.profileImage} />
          <PostCardBottomProfileText>
            {data.student.name}
          </PostCardBottomProfileText>
        </PostCardBottomWrap>
      </PostCardDescriptionWrap>
    </PostCardContainer>
  );
};

export default PostCard;
