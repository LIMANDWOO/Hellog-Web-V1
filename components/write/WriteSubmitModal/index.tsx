import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Post } from "../../../types/post/post.type";
import {
  WriteSubmitModalButton,
  WriteSubmitModalButtonWrap,
  WriteSubmitModalCancelButton,
  WriteSubmitModalContainer,
  WriteSubmitModalImgLabel,
  WriteSubmitModalOverlay,
  WriteSubmitModalSummaryTextarea,
} from "./style";

interface Props {
  postData: Post;
  setIsComplete: Dispatch<SetStateAction<boolean>>;
  onChangeText: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmitPost: () => void;
}

const WriteSubmitModal = ({
  postData,
  onChangeText,
  setIsComplete,
  onSubmitPost,
}: Props) => {
  return (
    <>
      <WriteSubmitModalOverlay onClick={() => setIsComplete(false)} />
      <WriteSubmitModalContainer>
        <WriteSubmitModalImgLabel></WriteSubmitModalImgLabel>
        <WriteSubmitModalSummaryTextarea
          onChange={onChangeText}
          name="summary"
          value={postData.summary}
          placeholder="요약을 적어주세요"
        />
        <WriteSubmitModalButtonWrap>
          <WriteSubmitModalCancelButton onClick={() => setIsComplete(false)}>
            돌아가기
          </WriteSubmitModalCancelButton>
          <WriteSubmitModalButton onClick={onSubmitPost}>
            게시하기
          </WriteSubmitModalButton>
        </WriteSubmitModalButtonWrap>
      </WriteSubmitModalContainer>
    </>
  );
};

export default WriteSubmitModal;
