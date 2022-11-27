import { PostComment } from "../../../types/post/post.type";
import ReadCommentForm from "./ReadCommentForm";
import ReadCommentItem from "./ReadCommentItem";
import { ReadCommentContainer, ReadCommentItemWrap } from "./style";

interface Props {
  postid: number;
  comments: PostComment[];
}

const ReadComment = ({ postid, comments }: Props) => {
  return (
    <ReadCommentContainer>
      <ReadCommentForm postid={postid} />
      <ReadCommentItemWrap>
        {comments?.map((comment) => (
          <ReadCommentItem data={comment} key={comment.id} />
        ))}
      </ReadCommentItemWrap>
    </ReadCommentContainer>
  );
};

export default ReadComment;
