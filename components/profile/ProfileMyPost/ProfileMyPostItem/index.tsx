import { Post } from "../../../../types/post/post.type";
import { ProfileMyPostItemBanner, ProfileMyPostItemContainer } from "./style";

interface Props {
  data: Post;
}

const ProfileMyPostItem = ({ data }: Props) => {
  return (
    <ProfileMyPostItemContainer>
      <ProfileMyPostItemBanner src={data.image} />
      <p>{data.content}</p>
    </ProfileMyPostItemContainer>
  );
};

export default ProfileMyPostItem;
