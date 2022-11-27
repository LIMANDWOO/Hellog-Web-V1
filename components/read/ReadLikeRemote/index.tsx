import { ReadLikeRemoteContainer, ReadLikeRemoteLikeButton } from "./style";

const ReadLikeRemote = () => {
  return (
    <ReadLikeRemoteContainer>
      <ReadLikeRemoteLikeButton isLike={true}></ReadLikeRemoteLikeButton>
    </ReadLikeRemoteContainer>
  );
};

export default ReadLikeRemote;
