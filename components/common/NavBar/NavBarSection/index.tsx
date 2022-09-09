import { NavBarLogoWrap, NavBarSectionContainer } from "./style";
import LogoIcon from "../../../../assets/icon/HellogLogo.png";
import Image from "next/image";
import Link from "next/link";

const NavBarSection = () => {
  return (
    <NavBarSectionContainer>
      <Link href={"/"}>
        <a>
          <Image
            width={80}
            height={40}
            src={LogoIcon}
            alt={"NavBarSection LogoIcon"}
            objectFit={"cover"}
          />
        </a>
      </Link>
    </NavBarSectionContainer>
  );
};

export default NavBarSection;
