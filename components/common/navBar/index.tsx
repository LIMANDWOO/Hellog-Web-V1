import { useGetMyMember } from "../../../quries/member/member.query";
import NavBarProfile from "./NavBarProfile";
import NavBarSection from "./NavBarSection";
import { NavBarContainer, NavBarWrap } from "./style";

const NavBar = () => {
  const { data: serverMyMemberData } = useGetMyMember();

  return (
    <NavBarContainer>
      <NavBarWrap>
        <NavBarSection />
        <NavBarProfile
          imageUrl={
            "https://velog.velcdn.com/images/ldh3907/profile/0f7e6e83-5dac-4dd2-8893-4a8a741810e1/social.jpeg"
          }
        />
      </NavBarWrap>
    </NavBarContainer>
  );
};

export default NavBar;
