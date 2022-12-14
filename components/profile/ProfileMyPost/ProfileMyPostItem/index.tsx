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
import dateTransform from "../../../../util/transform/dateTransform";

interface Props {
  data: PostDetail;
}

const ProfileMyPostItem = ({ data }: Props) => {
  const router = useRouter();

  console.log(data.like_count);

  return (
    <ProfileMyPostItemContainer onClick={() => router.push(`/read/${data.id}`)}>
      <ProfileMyPostItemBanner src={data.thumbnail_url} />
      <ProfileMyPostItemTitle>{data.title}</ProfileMyPostItemTitle>
      <ProfileMyPostItemSummary>{data.summary}</ProfileMyPostItemSummary>
      <ProfileMyPostItemBottomWrap>
        <ProfileMyPostItemLikeText style={{ marginTop: "auto" }}>
          {TimeCounting(dateTransform.format(data.createdDate), { lang: "ko" })}
        </ProfileMyPostItemLikeText>
        <ProfileMyPostItemLikeWrap>
          <ProfileMyPostItemLikeIcon>
            <FaHeart />
          </ProfileMyPostItemLikeIcon>
          <ProfileMyPostItemLikeText>
            {data.like_count}
          </ProfileMyPostItemLikeText>
        </ProfileMyPostItemLikeWrap>
      </ProfileMyPostItemBottomWrap>
    </ProfileMyPostItemContainer>
  );
};

export default ProfileMyPostItem;
