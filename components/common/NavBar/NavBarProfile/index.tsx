import { useRef, useState } from "react";
import useOutsideClick from "../../../../hooks/common/useOutsideClick";
import DarkmodeButton from "../../DarkmodeButton";
import PostingButton from "../../WritingButton";
import NavBarProfileDropdown from "./NavBarProfileDropdown";
import {
  NavBarProfileContainer,
  NavBarProfileImg,
  NavBarProfileImgWrap,
} from "./style";

interface Props {
  imageUrl: string;
}

const NavBarProfile = ({ imageUrl }: Props) => {
  const profileImgRef = useRef<HTMLDivElement>(null);
  const [fold, setFold] = useState(true);

  useOutsideClick({ setState: setFold, ref: profileImgRef });

  return (
    <NavBarProfileContainer>
      <PostingButton />
      <DarkmodeButton />
      <NavBarProfileImgWrap
        onClick={() => setFold((prev) => !prev)}
        ref={profileImgRef}
      >
        <NavBarProfileImg src={imageUrl} />
        {!fold && <NavBarProfileDropdown />}
      </NavBarProfileImgWrap>
    </NavBarProfileContainer>
  );
};

export default NavBarProfile;
