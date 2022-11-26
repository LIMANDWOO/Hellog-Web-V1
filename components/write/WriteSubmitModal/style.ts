import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const WriteSubmitModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
`;

export const WriteSubmitModalContainer = styled.div`
  width: 522px;
  height: 520px;
  position: absolute;
  z-index: 3;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  input[type="file"] {
    display: none;
  }
`;

export const WriteSubmitModalImgPreview = styled.img`
  width: 100%;
  height: 246px;
  border-radius: 5px;
  object-fit: cover;
`;

export const WriteSubmitModalImgLabel = styled.label`
  width: 100%;
  height: 100%;
  background-color: ${palette.gray[300]};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WriteSubmitModalSummaryTextarea = styled.textarea`
  width: 100%;
  height: 165px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  outline: none;
  border: 0px;
  resize: none;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 15px;
`;

export const WriteSubmitModalButtonWrap = styled.div`
  display: flex;
  justify-content: end;
  column-gap: 5px;
`;

export const WriteSubmitModalCancelButton = styled.button`
  width: 100px;
  min-height: 50px;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  background: none;
  color: ${({ theme }) => theme.contrast};

  &:hover {
    background-color: rgba(1, 1, 1, 0.1);
  }
`;

export const WriteSubmitModalButton = styled.button`
  width: 100px;
  min-height: 50px;
  border-radius: 5px;
  background-color: ${palette.main};
  border: 0px;
  cursor: pointer;
  color: white;
  font-size: 16px;

  &:hover {
    opacity: 80%;
  }
`;
