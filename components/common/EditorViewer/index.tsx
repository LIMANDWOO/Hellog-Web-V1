import { Viewer } from "@toast-ui/react-editor";
import { EditorViewerContainer } from "./style";

interface Props {
  content: string;
}

const EditorViewer = ({ content }: Props) => {
  return (
    <EditorViewerContainer>
      <Viewer initialValue={content} />
    </EditorViewerContainer>
  );
};

export default EditorViewer;
