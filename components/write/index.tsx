import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  WriteBottomButtonWrap,
  WriteBottomWrap,
  WriteContainer,
  WriteExitButton,
  WriteHeaderTitleInput,
  WriteHeaderWrap,
  WriteSubmitButton,
} from "./style";

const ToastEditor = dynamic(() => import("../common/ToastEditor"), {
  ssr: false,
});

const Write = () => {
  const router = useRouter();

  return (
    <WriteContainer>
      <WriteHeaderWrap>
        <WriteHeaderTitleInput placeholder="제목을 입력해주세요" />
      </WriteHeaderWrap>
      <ToastEditor />
      <WriteBottomWrap>
        <WriteBottomButtonWrap>
          <WriteExitButton onClick={() => router.back()}>
            돌아가기
          </WriteExitButton>
          <WriteSubmitButton>게시하기</WriteSubmitButton>
        </WriteBottomButtonWrap>
      </WriteBottomWrap>
    </WriteContainer>
  );
};

export default Write;
