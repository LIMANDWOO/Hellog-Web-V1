import { Editor } from "@toast-ui/react-editor";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Post } from "../../types/post/post.type";

const useWrite = () => {
  const [postData, setPostData] = useState<Post>({
    title: "",
    content: "",
    summary: "",
  });

  const [isComplete, setIsComplete] = useState(false);

  const editorRef = useRef<Editor>(null);

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

  const onSubmitPost = () => {
    const { summary } = postData;

    if (summary === "") {
      window.alert("내용을 입력해주세요");
      return;
    }

    console.log(postData);
  };

  return {
    editorRef,
    postData,
    onCompletePost,
    onChangeContent,
    onChangeText,
    isComplete,
    setIsComplete,
    onSubmitPost,
  };
};

export default useWrite;
