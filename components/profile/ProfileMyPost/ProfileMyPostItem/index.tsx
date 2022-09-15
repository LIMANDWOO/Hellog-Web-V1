import { Post } from "../../../../types/post/post.type";
import {
  ProfileMyPostItemBanner,
  ProfileMyPostItemContainer,
  ProfileMyPostItemSummary,
  ProfileMyPostItemTitle,
} from "./style";

interface Props {
  data: Post;
}

const ProfileMyPostItem = ({ data }: Props) => {
  return (
    <ProfileMyPostItemContainer>
      <ProfileMyPostItemBanner src={data.image} />
      <ProfileMyPostItemTitle>{data.title}</ProfileMyPostItemTitle>
      <ProfileMyPostItemSummary>{data.summary}</ProfileMyPostItemSummary>
    </ProfileMyPostItemContainer>
  );
};

export default ProfileMyPostItem;
