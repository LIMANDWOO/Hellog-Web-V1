import { Tag } from "../../../types/tag/tag.type";
import ProfileTagItem from "./ProfileTagItem";
import { ProfileTagContainer, ProfileTagWrap } from "./style";

const TEST: Tag[] = [
  {
    title: "전체조회",
    count: 8,
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
