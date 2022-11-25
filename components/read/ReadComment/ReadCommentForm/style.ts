import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const ReadCommentFormContainer = styled.form`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
`;

export const ReadCommentFormInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  padding: 18px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.contrast};
  border: 0px;
  background: none;
`;

export const ReadCommentFormSubmitButton = styled.button`
  width: 60px;
  height: 38px;
  border-radius: 5px;
  background-color: ${palette.main};
  color: white;
  font-size: 16px;
  border: 0px;
  cursor: pointer;
  margin: 0px 10px;
`;
