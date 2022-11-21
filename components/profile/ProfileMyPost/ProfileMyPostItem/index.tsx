import { useRouter } from "next/router";
import TimeCounting from "time-counting";
import { Post, PostDetail } from "../../../../types/post/post.type";
import {
  ProfileMyPostItemBanner,
  ProfileMyPostItemBottomWrap,
  ProfileMyPostItemContainer,
  ProfileMyPostItemLikeIcon,
  ProfileMyPostItemLikeText,
  ProfileMyPostItemLikeWrap,
  ProfileMyPostItemSummary,
  ProfileMyPostItemTitle,
} from "./style";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";

interface Props {
  data: PostDetail;
}

const ProfileMyPostItem = ({ data }: Props) => {
  const router = useRouter();

  return (
    <ProfileMyPostItemContainer onClick={() => router.push(`/read/${data.id}`)}>
      <ProfileMyPostItemBanner src={data.thumbnail} />
      <ProfileMyPostItemTitle>{data.title}</ProfileMyPostItemTitle>
      <ProfileMyPostItemSummary>{data.summary}</ProfileMyPostItemSummary>
      <ProfileMyPostItemBottomWrap>
        <ProfileMyPostItemLikeText style={{ marginTop: "auto" }}>
          {TimeCounting(data.createdDate, { lang: "ko" })}
        </ProfileMyPostItemLikeText>
        <ProfileMyPostItemLikeWrap>
          <ProfileMyPostItemLikeIcon>
            <FaHeart />
          </ProfileMyPostItemLikeIcon>
          <ProfileMyPostItemLikeText>
            {data.likeCount}
          </ProfileMyPostItemLikeText>
        </ProfileMyPostItemLikeWrap>
      </ProfileMyPostItemBottomWrap>
    </ProfileMyPostItemContainer>
  );
};

export default ProfileMyPostItem;
