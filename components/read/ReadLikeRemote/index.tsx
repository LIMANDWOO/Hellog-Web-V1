import useLike from "../../../hooks/post/useLike";
import {
  ReadLikeRemoteContainer,
  ReadLikeRemoteLikeButton,
  ReadLikeRemoteLikeButtonIcon,
  ReadLikeRemoteLikeButtonWrap,
  ReadLikeRemoteShareButton,
} from "./style";
import { HiHeart } from "@react-icons/all-files/hi/HiHeart";

interface Props {
  liked: boolean;
  posting_id: number;
  prevLikeCount: number;
}

const ReadLikeRemote = ({ liked, posting_id, prevLikeCount }: Props) => {
  const { isLike, likeCount, onChangeLike } = useLike({
    prevIsLike: liked,
    posting_id,
    prevLikeCount,
  });

  return (
    <ReadLikeRemoteContainer>
      <ReadLikeRemoteLikeButtonWrap>
        <ReadLikeRemoteLikeButton onClick={onChangeLike} isLike={isLike}>
          <ReadLikeRemoteLikeButtonIcon>
            <HiHeart />
          </ReadLikeRemoteLikeButtonIcon>
        </ReadLikeRemoteLikeButton>
        {likeCount}
      </ReadLikeRemoteLikeButtonWrap>
      <ReadLikeRemoteShareButton></ReadLikeRemoteShareButton>
    </ReadLikeRemoteContainer>
  );
};

export default ReadLikeRemote;
