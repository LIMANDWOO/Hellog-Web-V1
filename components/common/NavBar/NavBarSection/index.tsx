import { NavBarSectionContainer } from "./style";
import LogoIcon from "../../../../assets/icon/HellogLogo.png";
import Image from "next/image";

const NavBarSection = () => {
  return (
    <NavBarSectionContainer>
      <Image
        width={80}
        height={40}
        src={LogoIcon}
        alt={"NavBarSection LogoIcon"}
      />
    </NavBarSectionContainer>
  );
};

export default NavBarSection;
