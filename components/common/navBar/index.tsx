import NavBarProfile from "./NavBarProfile";
import NavBarSection from "./NavBarSection";
import { NavBarContainer } from "./style";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarSection />
      <NavBarProfile
        imageUrl={
          "https://velog.velcdn.com/images/ldh3907/profile/0f7e6e83-5dac-4dd2-8893-4a8a741810e1/social.jpeg"
        }
      />
    </NavBarContainer>
  );
};

export default NavBar;
