import { Editor } from "@toast-ui/react-editor";
import { useRouter } from "next/router";
import useWrite from "../../hooks/write/useWrite";
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

const Write = () => {
  const router = useRouter();
  const {
    editorRef,
    postData,
    onChangeContent,
    onCompletePost,
    onChangeText,
    isComplete,
    setIsComplete,
    onSubmitPost,
  } = useWrite();

  return (
    <WriteContainer>
      <WriteHeaderWrap>
        <WriteHeaderTitleInput
          placeholder="제목을 입력해주세요"
          value={postData.title}
          onChange={onChangeText}
          name="title"
        />
      </WriteHeaderWrap>

      <WriteEditorWrap>
        <Editor
          previewStyle="vertical"
          height="740px"
          initialEditType="markdown"
          ref={editorRef}
          useCommandShortcut={false}
          onChange={onChangeContent}
        />
      </WriteEditorWrap>

      <WriteBottomWrap>
        <WriteBottomButtonWrap>
          <WriteExitButton onClick={() => router.back()}>
            돌아가기
          </WriteExitButton>
          <WriteSubmitButton onClick={onCompletePost}>
            게시하기
          </WriteSubmitButton>
        </WriteBottomButtonWrap>
      </WriteBottomWrap>
      {isComplete && (
        <WriteSubmitModal
          postData={postData}
          onChangeText={onChangeText}
          setIsComplete={setIsComplete}
          onSubmitPost={onSubmitPost}
        />
      )}
    </WriteContainer>
  );
};

export default Write;
