import { ProfileMyLinkItemContainer, ProfileMyLinkItemImg } from "./style";

interface Props {
  img: string;
  redirectUrl: string;
}

const ProfileMyLinkItem = ({ img, redirectUrl }: Props) => {
  return (
    <ProfileMyLinkItemContainer onClick={() => window.open(redirectUrl)}>
      <ProfileMyLinkItemImg src={img} />
    </ProfileMyLinkItemContainer>
  );
};

export default ProfileMyLinkItem;
