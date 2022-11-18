import { MyLink } from "../../../../types/myLink/myLink.type";
import { ProfileMyLinkItemContainer, ProfileMyLinkItemImg } from "./style";

interface Props {
  data: MyLink;
}

const ProfileMyLinkItem = ({ data }: Props) => {
  return (
    <ProfileMyLinkItemContainer onClick={() => window.open(data.redirectUrl)}>
      <ProfileMyLinkItemImg src={data.img} />
    </ProfileMyLinkItemContainer>
  );
};

export default ProfileMyLinkItem;
