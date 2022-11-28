import { useRouter } from "next/router";
import { PostDetail } from "../../../types/post/post.type";
import {
  PostCardBanner,
  PostCardBottomLikeCountIcon,
  PostCardBottomLikeCountText,
  PostCardBottomLikeCountWrap,
  PostCardBottomProfileImg,
  PostCardBottomProfileText,
  PostCardBottomProfileWrap,
  PostCardBottomWrap,
  PostCardContainer,
  PostCardDescriptionWrap,
  PostCardSummary,
  PostCardTitle,
} from "./style";
import { HiHeart } from "@react-icons/all-files/hi/HiHeart";

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
          <PostCardBottomProfileWrap>
            <PostCardBottomProfileImg src={data.student.user.profileImage} />
            <PostCardBottomProfileText>
              {data.student.name}
            </PostCardBottomProfileText>
          </PostCardBottomProfileWrap>
          <PostCardBottomLikeCountWrap>
            <PostCardBottomLikeCountIcon>
              <HiHeart />
            </PostCardBottomLikeCountIcon>
            <PostCardBottomLikeCountText>
              {data.like_count}
            </PostCardBottomLikeCountText>
          </PostCardBottomLikeCountWrap>
        </PostCardBottomWrap>
      </PostCardDescriptionWrap>
    </PostCardContainer>
  );
};

export default PostCard;
