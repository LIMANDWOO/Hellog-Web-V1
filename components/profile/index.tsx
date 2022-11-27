import ProfileCategory from "./ProfileTag";
import ProfileMyPost from "./ProfileMyPost";
import {
  ProfileContainer,
  ProfileHeaderDescription,
  ProfileHeaderImg,
  ProfileHeaderLeftWrap,
  ProfileHeaderMiddleWrap,
  ProfileHeaderName,
  ProfileHeaderRightWrap,
  ProfileHeaderWrap,
  ProfileWrap,
} from "./style";
import ProfileMyLink from "./ProfileMyLink";
import { useGetMyMember } from "../../quries/member/member.query";

const Proflie = () => {
  const { data: serverMyMemberData } = useGetMyMember();

  return (
    <ProfileContainer>
      <ProfileHeaderWrap>
        <ProfileHeaderLeftWrap>{/* <ProfileMyLink /> */}</ProfileHeaderLeftWrap>
        <ProfileHeaderMiddleWrap>
          <ProfileHeaderImg src={serverMyMemberData?.user.profileImage} />
          <ProfileHeaderName>{serverMyMemberData?.name}</ProfileHeaderName>
          <ProfileHeaderDescription>
            {serverMyMemberData?.description}
          </ProfileHeaderDescription>
        </ProfileHeaderMiddleWrap>
        <ProfileHeaderRightWrap></ProfileHeaderRightWrap>
      </ProfileHeaderWrap>
      <ProfileWrap>
        {/* <ProfileCategory /> */}
        <ProfileMyPost data={serverMyMemberData?.postings!} />
      </ProfileWrap>
    </ProfileContainer>
  );
};

export default Proflie;
