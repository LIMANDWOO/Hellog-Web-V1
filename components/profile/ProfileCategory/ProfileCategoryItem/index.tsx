import { useRouter } from "next/router";
import { PostCategory } from "../../../../types/post/post.type";
import {
  ProfileCategoryItemContainer,
  ProfileCategoryItemCount,
  ProfileCategoryItemTitle,
} from "./style";

interface Props {
  data: PostCategory;
}

const ProfileCategoryItem = ({ data }: Props) => {
  const router = useRouter();
  const memberId = 1;

  return (
    <ProfileCategoryItemContainer
      onClick={() => router.push(`/profile/${memberId}?tag=${data.title}`)}
    >
      <ProfileCategoryItemTitle>{data.title}</ProfileCategoryItemTitle>
      <ProfileCategoryItemCount>({data.count})</ProfileCategoryItemCount>
    </ProfileCategoryItemContainer>
  );
};

export default ProfileCategoryItem;
