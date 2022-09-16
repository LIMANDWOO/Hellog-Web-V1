import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";

const useWrite = () => {
  const editorRef = useRef<Editor>(null);

  const onSubmitPost = () => {
    if (editorRef.current && editorRef.current.getInstance) {
      console.log(editorRef.current.getInstance().getMarkdown());
    }
  };

  return {
    editorRef,
    onSubmitPost,
  };
};

export default useWrite;
