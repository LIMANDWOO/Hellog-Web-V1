import { PostCategory } from "../../../types/post/post.type";
import ProfileCategoryItem from "./ProfileCategoryItem";
import { ProfileCategoryContainer } from "./style";

const TEST: PostCategory[] = [
  {
    title: "react",
    count: 8,
  },
  {
    title: "vue",
    count: 2,
  },
  {
    title: "angular",
    count: 5,
  },
  {
    title: "recoil",
    count: 3,
  },
  {
    title: "axios",
    count: 7,
  },
  {
    title: "webpack",
    count: 8,
  },
  {
    title: "react-query",
    count: 10,
  },
];

const ProfileCategory = () => {
  return (
    <ProfileCategoryContainer>
      {TEST.map((item, idx) => (
        <ProfileCategoryItem data={item} key={idx} />
      ))}
    </ProfileCategoryContainer>
  );
};

export default ProfileCategory;
