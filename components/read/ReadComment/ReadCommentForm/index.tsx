import useComment from "../../../../hooks/post/useCreateComment";
import {
  ReadCommentFormContainer,
  ReadCommentFormSubmitButton,
  ReadCommentFormInput,
} from "./style";

interface Props {
  postid: number;
}

const ReadCommentForm = ({ postid }: Props) => {
  const { comment, setComment, onSubmitComment } = useComment({
    postId: postid,
  });

  return (
    <ReadCommentFormContainer onSubmit={onSubmitComment}>
      <ReadCommentFormInput
        placeholder="댓글을 입력해주세요"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <ReadCommentFormSubmitButton>등록</ReadCommentFormSubmitButton>
    </ReadCommentFormContainer>
  );
};

export default ReadCommentForm;
