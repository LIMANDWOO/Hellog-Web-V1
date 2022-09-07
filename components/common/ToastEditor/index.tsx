import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

interface Props {}

const ToastEditor = () => {
  return (
    <Editor previewStyle="vertical" height="740px" initialEditType="markdown" />
  );
};

export default ToastEditor;
