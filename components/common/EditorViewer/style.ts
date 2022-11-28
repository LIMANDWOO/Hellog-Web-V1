import styled from "styled-components";
import { editorStyle } from "../../../styles/editorStyle";

export const EditorViewerContainer = styled.div`
  width: 100%;
  ${editorStyle}

  color: ${({ theme }) => theme.contrast};
`;
