import { Editor } from "@toast-ui/react-editor";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { usePostPost } from "../../quries/post/post.query";
import {
  writeImageSrcAtom,
  writeIsCompleteAtom,
} from "../../store/write/write.store";
import { Post } from "../../types/post/post.type";

const useWrite = () => {
  const router = useRouter();

  const [postData, setPostData] = useState<Post>({
    title: "",
    content: "",
    summary: "",
    thumbnail_url: "",
  });

  const [image, setImage] = useRecoilState(writeImageSrcAtom);

  const [, setIsComplete] = useRecoilState(writeIsCompleteAtom);

  const editorRef = useRef<Editor>(null);

  const postPostMutation = usePostPost();

  useEffect(() => {
    setPostData((prev) => ({ ...prev, thumbnail_url: image }));
  }, [image]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown("");
    }
  }, []);

  const onChangeContent = () => {
    if (editorRef.current) {
      setPostData((prev) => ({
        ...prev,
        content: editorRef.current!.getInstance().getMarkdown(),
      }));
    }
  };

  const onChangeText = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onCompletePost = () => {
    const { content, title } = postData;

    if (content === "" || title === "") {
      window.alert("내용을 입력해주세요");
      return;
    }

    setIsComplete(true);
  };

  const onSubmitPost = async () => {
    const { summary } = postData;

    if (summary === "") {
      window.alert("내용을 입력해주세요");
      return;
    }

    if (image === "") {
      window.alert("썸네일을 추가해주세요");
      return;
    }

    postPostMutation.mutateAsync(postData, {
      onSuccess: () => {
        window.alert("게시물 등록 성공");
        setImage("");
        setIsComplete(false);
        router.push("/");
      },
      onError: () => {
        window.alert("게시물 등록 실패");
      },
    });
  };

  return {
    editorRef,
    postData,
    onCompletePost,
    onChangeContent,
    onChangeText,
    onSubmitPost,
  };
};

export default useWrite;
