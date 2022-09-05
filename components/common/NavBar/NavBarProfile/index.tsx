import { NavBarProfileContainer, NavBarProfileImg } from "./style";

interface Props {
  imageUrl: string;
}

const NavBarProfile = ({ imageUrl }: Props) => {
  return (
    <NavBarProfileContainer>
      <NavBarProfileImg src={imageUrl} />
    </NavBarProfileContainer>
  );
};

export default NavBarProfile;
