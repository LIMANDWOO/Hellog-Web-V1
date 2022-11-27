import NavBarProfile from "./NavBarProfile";
import NavBarSection from "./NavBarSection";
import { NavBarContainer, NavBarWrap } from "./style";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarWrap>
        <NavBarSection />
        <NavBarProfile />
      </NavBarWrap>
    </NavBarContainer>
  );
};

export default NavBar;
