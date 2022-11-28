import { useGetMyMember } from "../../../quries/member/member.query";
import { PostComment } from "../../../types/post/post.type";
import ReadCommentForm from "./ReadCommentForm";
import ReadCommentItem from "./ReadCommentItem";
import { ReadCommentContainer, ReadCommentItemWrap } from "./style";

interface Props {
  postid: number;
  comments: PostComment[];
}

const ReadComment = ({ postid, comments }: Props) => {
  const { data: serverMyMemberData } = useGetMyMember();

  return (
    <ReadCommentContainer>
      <ReadCommentForm postid={postid} />
      <ReadCommentItemWrap>
        {comments?.map((comment) => (
          <ReadCommentItem
            userId={serverMyMemberData?.id!}
            data={comment}
            key={comment.id}
          />
        ))}
      </ReadCommentItemWrap>
    </ReadCommentContainer>
  );
};

export default ReadComment;
