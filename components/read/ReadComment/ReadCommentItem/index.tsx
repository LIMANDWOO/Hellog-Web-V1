import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQueryClient } from "react-query";
import useModifyComment from "../../../../hooks/post/useModifyComment";
import { useGetMyMember } from "../../../../quries/member/member.query";
import { useDeleteComment } from "../../../../quries/post/post.query";
import { PostComment } from "../../../../types/post/post.type";
import {
  ReadCommentItemContainer,
  ReadCommentItemModifyInput,
  ReadCommentItemModifyInputWrap,
  ReadCommentItemProfile,
  ReadCommentItemText,
} from "./style";
const ReadCommentDropdown = dynamic(() => import("./ReadCommentDropdown"), {
  ssr: false,
});

interface Props {
  userId: number;
  data: PostComment;
}

const ReadCommentItem = ({ userId, data }: Props) => {
  const router = useRouter();

  const queryClient = useQueryClient();
  const [isModify, setIsModify] = useState(false);

  const deleteCommentMutation = useDeleteComment();

  const { comment, tempComment, onChangeModifyComment, onSubmitModifyComment } =
    useModifyComment({
      prevComment: data.content,
      commentId: data.id,
      setIsModify,
    });

  return (
    <ReadCommentItemContainer>
      <ReadCommentItemProfile src={data.user.profileImage} />
      <ReadCommentItemText>
        {isModify ? (
          <ReadCommentItemModifyInputWrap onSubmit={onSubmitModifyComment}>
            <ReadCommentItemModifyInput
              value={tempComment}
              onChange={onChangeModifyComment}
            />
          </ReadCommentItemModifyInputWrap>
        ) : (
          <>{comment}</>
        )}
        {userId === data.user.id && (
          <ReadCommentDropdown
            onModify={() => setIsModify(true)}
            onDelete={() => {
              deleteCommentMutation.mutateAsync(
                {
                  posting_id: Number(router.query.id),
                },
                {
                  onSuccess: () => {
                    queryClient.invalidateQueries([
                      "post/getPost",
                      Number(router.query.id),
                    ]);
                    window.alert("댓글 삭제 성공");
                  },
                  onError: () => {
                    window.alert("댓글 삭제 실패");
                  },
                }
              );
            }}
          />
        )}
      </ReadCommentItemText>
    </ReadCommentItemContainer>
  );
};

export default ReadCommentItem;
