import { FormEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { usePostComment } from "../../quries/post/post.query";

interface Param {
  postId: number;
}

const useComment = ({ postId }: Param) => {
  const queryClient = useQueryClient();

  const [comment, setComment] = useState<string>("");

  const postCommentMutatioin = usePostComment();

  const onSubmitComment = (e: FormEvent) => {
    e.preventDefault();

    if (postCommentMutatioin.isLoading) {
      return;
    }

    postCommentMutatioin.mutateAsync(
      { posting_id: postId, content: comment },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(`/posting/${postId}`);
          window.alert("댓글 등록 성공");
          setComment("");
        },
        onError: () => {
          window.alert("댓글 등록 성공");
        },
      }
    );
  };

  return {
    comment,
    setComment,
    onSubmitComment,
  };
};

export default useComment;
