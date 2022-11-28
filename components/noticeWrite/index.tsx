import { Editor } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useWriteNotice from "../../hooks/notice/useWriteNotice";
import { usePostUpload } from "../../quries/upload/upload.query";

import {
  NoticeWriteBottomButtonWrap,
  NoticeWriteBottomWrap,
  NoticeWriteContainer,
  NoticeWriteEditorWrap,
  NoticeWriteExitButton,
  NoticeWriteHeaderTitleInput,
  NoticeWriteHeaderWrap,
  NoticeWriteSubmitButton,
} from "./style";

const NoticeWrite = () => {
  const router = useRouter();

  const {
    editorRef,
    noticeData,
    onChangeTextValue,
    onChangeContent,
    onSubmitNotice,
  } = useWriteNotice();

  const postImageMutation = usePostUpload();

  return (
    <NoticeWriteContainer>
      <NoticeWriteHeaderWrap>
        <NoticeWriteHeaderTitleInput
          placeholder="공지사항 제목을 입력해주세요"
          onChange={onChangeTextValue}
          value={noticeData.title}
          name="title"
        />
      </NoticeWriteHeaderWrap>
      <NoticeWriteEditorWrap>
        <Editor
          previewStyle="vertical"
          height="740px"
          initialEditType="markdown"
          ref={editorRef}
          useCommandShortcut={false}
          onChange={onChangeContent}
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
      </NoticeWriteEditorWrap>
      <NoticeWriteBottomWrap>
        <NoticeWriteBottomButtonWrap>
          <NoticeWriteExitButton onClick={() => router.back()}>
            돌아가기
          </NoticeWriteExitButton>
          <NoticeWriteSubmitButton onClick={onSubmitNotice}>
            게시하기
          </NoticeWriteSubmitButton>
        </NoticeWriteBottomButtonWrap>
      </NoticeWriteBottomWrap>
    </NoticeWriteContainer>
  );
};
export default NoticeWrite;
