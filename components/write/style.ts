import styled from "styled-components";
import { editorStyle } from "../../styles/editorStyle";
import { palette } from "../../styles/palette";

export const WriteContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #f8f9fa;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const WriteHeaderWrap = styled.div`
  width: 100%;
  height: 80px;
`;

export const WriteEditorWrap = styled.div`
  width: 100%;
  ${editorStyle}
`;

export const WriteHeaderTitleInput = styled.input`
  width: 50%;
  height: 100%;
  padding: 0px 30px;
  border: 0px;
  background: none;
  font-size: 30px;
  color: black;
  outline: none;
  font-weight: bold;
`;

export const WriteBottomWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 68px;
  padding: 0px 10px;
`;

export const WriteBottomButtonWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-left: auto;
`;

export const WriteExitButton = styled.button`
  width: 148px;
  height: 50px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.gray[300]};

  &:hover {
    background-color: rgba(1, 1, 1, 0.4);
  }
`;

export const WriteSubmitButton = styled.button`
  width: 148px;
  height: 50px;
  background-color: ${palette.main};
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 80%;
  }
`;
