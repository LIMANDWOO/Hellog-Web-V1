import { Viewer } from "@toast-ui/react-editor";
import { ReadViewerContainer } from "./style";

interface Props {
  content: string;
}

const ReadViewer = ({ content }: Props) => {
  return (
    <ReadViewerContainer>
      <Viewer initialValue={content} />
    </ReadViewerContainer>
  );
};

export default ReadViewer;
