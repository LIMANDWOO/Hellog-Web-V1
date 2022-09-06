import DarkmodeButton from "../../DarkmodeButton";
import PostingButton from "../../PostingButton";
import { NavBarProfileContainer, NavBarProfileImg } from "./style";

interface Props {
  imageUrl: string;
}

const NavBarProfile = ({ imageUrl }: Props) => {
  return (
    <NavBarProfileContainer>
      <PostingButton />
      <DarkmodeButton />
      <NavBarProfileImg src={imageUrl} />
    </NavBarProfileContainer>
  );
};

export default NavBarProfile;
