import NavBarSection from "./NavBarSection";
import { NavBarContainer, NavBarWrap } from "./style";
import dynamic from "next/dynamic";
const NavBarProfile = dynamic(() => import("./NavBarProfile"), { ssr: false });

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
