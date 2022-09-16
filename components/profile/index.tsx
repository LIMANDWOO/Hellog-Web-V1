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

const Proflie = () => {
  return (
    <ProfileContainer>
      <ProfileHeaderWrap>
        <ProfileHeaderLeftWrap>
          <ProfileMyLink />
        </ProfileHeaderLeftWrap>
        <ProfileHeaderMiddleWrap>
          <ProfileHeaderImg
            src={
              "https://velog.velcdn.com/images/ldh3907/profile/0f7e6e83-5dac-4dd2-8893-4a8a741810e1/social.jpeg"
            }
          />
          <ProfileHeaderName>임동현</ProfileHeaderName>
          <ProfileHeaderDescription>
            혁신적인 FE를 선호합니다
          </ProfileHeaderDescription>
        </ProfileHeaderMiddleWrap>
        <ProfileHeaderRightWrap></ProfileHeaderRightWrap>
      </ProfileHeaderWrap>
      <ProfileWrap>
        <ProfileCategory />
        <ProfileMyPost />
      </ProfileWrap>
    </ProfileContainer>
  );
};

export default Proflie;
