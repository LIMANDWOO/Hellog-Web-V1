import { Editor } from "@toast-ui/react-editor";
import { useRouter } from "next/router";
import useWrite from "../../hooks/post/useWrite";
import {
  WriteBottomButtonWrap,
  WriteBottomWrap,
  WriteContainer,
  WriteEditorWrap,
  WriteExitButton,
  WriteHeaderTitleInput,
  WriteHeaderWrap,
  WriteSubmitButton,
} from "./style";
import "@toast-ui/editor/dist/toastui-editor.css";
import WriteSubmitModal from "./WriteSubmitModal";
import { usePostUpload } from "../../quries/upload/upload.query";
import useModifyPost from "../../hooks/post/useModifyPost";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { writeIsCompleteAtom } from "../../store/write/write.store";

const Write = () => {
  const router = useRouter();

  const [isModify, setIsModify] = useState<boolean>(
    router.query.id ? true : false
  );

  const isComplete = useRecoilValue(writeIsCompleteAtom);

  const {
    editorRef,
    postData,
    onChangeContent,
    onCompletePost,
    onChangeText,
    onSubmitPost,
  } = useWrite();

  const {
    modifyEditorRef,
    modifyPostData,
    onModifyText,
    onModifyContent,
    onCompleteModifyPost,
    onSubmitModifyPost,
  } = useModifyPost({
    posting_id: Number(router.query.id),
  });

  const postImageMutation = usePostUpload();

  return (
    <WriteContainer>
      <WriteHeaderWrap>
        <WriteHeaderTitleInput
          placeholder="제목을 입력해주세요"
          value={isModify ? modifyPostData.title : postData.title}
          onChange={isModify ? onModifyText : onChangeText}
          name="title"
        />
      </WriteHeaderWrap>

      <WriteEditorWrap>
        <Editor
          previewStyle="vertical"
          height="740px"
          initialEditType="markdown"
          ref={isModify ? modifyEditorRef : editorRef}
          useCommandShortcut={false}
          onChange={isModify ? onModifyContent : onChangeContent}
          hooks={{
            addImageBlobHook: (blob, callback) => {
              const formData = new FormData();
              formData.append("file", blob);
              postImageMutation.mutateAsync(
                { formData },
                {
                  onSuccess: (data) => {
                    callback(data as string, "alt text");
                  },
                }
              );
            },
          }}
        />
      </WriteEditorWrap>

      <WriteBottomWrap>
        <WriteBottomButtonWrap>
          <WriteExitButton onClick={() => router.back()}>
            돌아가기
          </WriteExitButton>
          <WriteSubmitButton
            onClick={isModify ? onCompleteModifyPost : onCompletePost}
          >
            게시하기
          </WriteSubmitButton>
        </WriteBottomButtonWrap>
      </WriteBottomWrap>
      {isComplete && (
        <WriteSubmitModal
          postData={isModify ? modifyPostData : postData}
          onChangeText={isModify ? onModifyText : onChangeText}
          onSubmitPost={isModify ? onSubmitModifyPost : onSubmitPost}
        />
      )}
    </WriteContainer>
  );
};

export default Write;
