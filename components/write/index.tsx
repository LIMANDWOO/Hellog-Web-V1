import { Editor } from "@toast-ui/react-editor";
import { useRouter } from "next/router";
import useWrite from "../../hooks/write/useWrite";
import {
  WriteBottomButtonWrap,
  WriteBottomWrap,
  WriteContainer,
  WriteExitButton,
  WriteHeaderTitleInput,
  WriteHeaderWrap,
  WriteSubmitButton,
} from "./style";
import "@toast-ui/editor/dist/toastui-editor.css";

const Write = () => {
  const router = useRouter();
  const { editorRef, onSubmitPost } = useWrite();

  return (
    <WriteContainer>
      <WriteHeaderWrap>
        <WriteHeaderTitleInput placeholder="제목을 입력해주세요" />
      </WriteHeaderWrap>

      <Editor
        previewStyle="vertical"
        height="740px"
        initialEditType="markdown"
        ref={editorRef}
        useCommandShortcut={false}
      />

      <WriteBottomWrap>
        <WriteBottomButtonWrap>
          <WriteExitButton onClick={() => router.back()}>
            돌아가기
          </WriteExitButton>
          <WriteSubmitButton onClick={onSubmitPost}>게시하기</WriteSubmitButton>
        </WriteBottomButtonWrap>
      </WriteBottomWrap>
    </WriteContainer>
  );
};

export default Write;
