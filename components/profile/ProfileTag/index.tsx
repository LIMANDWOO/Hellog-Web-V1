import { Tag } from "../../../types/tag/tag.type";
import ProfileTagItem from "./ProfileTagItem";
import { ProfileTagContainer, ProfileTagWrap } from "./style";

const TEST: Tag[] = [
  {
    title: "전체조회",
    count: 8,
  },
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

const ProfileTag = () => {
  return (
    <ProfileTagContainer>
      <ProfileTagWrap>
        {TEST.map((item, idx) => (
          <ProfileTagItem data={item} key={idx} />
        ))}
      </ProfileTagWrap>
    </ProfileTagContainer>
  );
};

export default ProfileTag;
