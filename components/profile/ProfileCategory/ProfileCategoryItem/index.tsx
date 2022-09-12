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
  return (
    <ProfileCategoryItemContainer>
      <ProfileCategoryItemTitle>{data.title}</ProfileCategoryItemTitle>
      <ProfileCategoryItemCount>({data.count})</ProfileCategoryItemCount>
    </ProfileCategoryItemContainer>
  );
};

export default ProfileCategoryItem;
