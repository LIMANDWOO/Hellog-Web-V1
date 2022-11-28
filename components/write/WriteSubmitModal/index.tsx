import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useRecoilValue } from "recoil";
import useImageDnd from "../../../hooks/post/useImageDnd";
import { writeImageSrcAtom } from "../../../store/write/write.store";
import { Post } from "../../../types/post/post.type";
import {
  WriteSubmitModalButton,
  WriteSubmitModalButtonWrap,
  WriteSubmitModalCancelButton,
  WriteSubmitModalContainer,
  WriteSubmitModalImgLabel,
  WriteSubmitModalImgLabelIcon,
  WriteSubmitModalImgLabelText,
  WriteSubmitModalImgPreview,
  WriteSubmitModalOverlay,
  WriteSubmitModalSummaryTextarea,
} from "./style";
import { MdCameraAlt } from "@react-icons/all-files/md/MdCameraAlt";

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
  const image = useRecoilValue(writeImageSrcAtom);

  const {
    dropHandler,
    dragHandler,
    dragInHandler,
    dragOutHandler,
    onChangeImage,
    isUploading,
  } = useImageDnd();

  return (
    <>
      <WriteSubmitModalOverlay onClick={() => setIsComplete(false)} />
      <WriteSubmitModalContainer>
        <input type="file" id="writeThumbnail" onChange={onChangeImage} />
        {image === "" ? (
          <WriteSubmitModalImgLabel
            htmlFor="writeThumbnail"
            draggable={true}
            onDrop={dropHandler}
            onDragOver={dragHandler}
            onDragLeave={dragOutHandler}
            onDragEnter={dragInHandler}
          >
            <WriteSubmitModalImgLabelIcon>
              <MdCameraAlt />
            </WriteSubmitModalImgLabelIcon>
            <WriteSubmitModalImgLabelText>
              이미지를 등록해주세요
            </WriteSubmitModalImgLabelText>
          </WriteSubmitModalImgLabel>
        ) : (
          <WriteSubmitModalImgPreview src={image} />
        )}
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
