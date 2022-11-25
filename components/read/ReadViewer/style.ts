import styled from "styled-components";
import { editorStyle } from "../../../styles/editorStyle";

export const ReadViewerContainer = styled.div`
  width: 100%;
  ${editorStyle}

  color : ${({ theme }) => theme.contrast};
`;
