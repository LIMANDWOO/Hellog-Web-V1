import { useRouter } from "next/router";
import { Tag } from "../../../../types/tag/tag.type";
import {
  ProfileTagItemContainer,
  ProfileTagItemCount,
  ProfileTagItemTitle,
} from "./style";

interface Props {
  data: Tag;
}

const ProfileTagItem = ({ data }: Props) => {
  const router = useRouter();
  const memberId = 1;

  return (
    <ProfileTagItemContainer
      onClick={() => router.push(`/profile/${memberId}?tag=${data.title}`)}
    >
      <ProfileTagItemTitle isSelect={router.query.tag === data.title}>
        {data.title}
      </ProfileTagItemTitle>
      <ProfileTagItemCount>({data.count})</ProfileTagItemCount>
    </ProfileTagItemContainer>
  );
};

export default ProfileTagItem;
