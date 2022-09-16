import { useRouter } from "next/router";
import TimeCounting from "time-counting";
import { Post } from "../../../../types/post/post.type";
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
  data: Post;
}

const ProfileMyPostItem = ({ data }: Props) => {
  const router = useRouter();

  return (
    <ProfileMyPostItemContainer onClick={() => router.push(`/read/${data.id}`)}>
      <ProfileMyPostItemBanner src={data.image} />
      <ProfileMyPostItemTitle>{data.title}</ProfileMyPostItemTitle>
      <ProfileMyPostItemSummary>{data.summary}</ProfileMyPostItemSummary>
      <ProfileMyPostItemBottomWrap>
        <ProfileMyPostItemLikeText style={{ marginTop: "auto" }}>
          {TimeCounting(data.reg__dt, { lang: "ko" })}
        </ProfileMyPostItemLikeText>
        <ProfileMyPostItemLikeWrap>
          <ProfileMyPostItemLikeIcon>
            <FaHeart />
          </ProfileMyPostItemLikeIcon>
          <ProfileMyPostItemLikeText>
            {data.like__count}
          </ProfileMyPostItemLikeText>
        </ProfileMyPostItemLikeWrap>
      </ProfileMyPostItemBottomWrap>
    </ProfileMyPostItemContainer>
  );
};

export default ProfileMyPostItem;
