import { Editor } from "@toast-ui/react-editor";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Notice } from "../../types/notice/notice.type";
import { usePostNotice } from "../../quries/notice/notice.query";
import { useRouter } from "next/router";

const useWriteNotice = () => {
  const router = useRouter();

  const [noticeData, setNoticeData] = useState<Notice>({
    title: "",
    content: "",
  });

  const editorRef = useRef<Editor>(null);

  const postNoticeMutation = usePostNotice();

  const onChangeTextValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNoticeData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeContent = () => {
    if (editorRef.current) {
      setNoticeData((prev) => ({
        ...prev,
        content: editorRef.current!.getInstance().getMarkdown(),
      }));
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown("");
    }
  }, []);

  const onSubmitNotice = () => {
    const { title, content } = noticeData;

    if (title === "") {
      window.alert("제목을 입력해주세요");
      return;
    }

    if (content === "") {
      window.alert("내용을 입력해주세요");
      return;
    }

    postNoticeMutation.mutate(noticeData, {
      onSuccess: () => {
        window.alert("공지사항 작성 성공");
        router.push("/");
      },
      onError: () => {
        window.alert("공지사항 작성 실패");
      },
    });
  };

  return {
    editorRef,
    noticeData,
    onChangeTextValue,
    onChangeContent,
    onSubmitNotice,
  };
};

export default useWriteNotice;
