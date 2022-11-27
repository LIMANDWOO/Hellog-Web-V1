import { PostDetail } from "../../../types/post/post.type";
import ProfileMyPostItem from "./ProfileMyPostItem";
import { ProfileMyPostContaienr } from "./style";

interface Props {
  data: PostDetail[];
}

const ProfileMyPost = ({ data }: Props) => {
  return (
    <ProfileMyPostContaienr>
      {data?.map((post) => (
        <ProfileMyPostItem data={post} key={post.id} />
      ))}
    </ProfileMyPostContaienr>
  );
};

export default ProfileMyPost;
