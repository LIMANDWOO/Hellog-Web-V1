import styled from "styled-components";

export const AuthOAuthButtonContainer = styled.button<{
  backgroundColor: string;
  fontColor: string;
}>`
  width: 100%;
  height: 62px;
  border-radius: 5px;
  padding: 10px 70px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 15px;
  color: ${({ fontColor }) => fontColor};
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.borderColor};

  &:hover {
    filter: brightness(95%);
  }
`;

export const AuthOAuthButtonIcon = styled.img`
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 100%;
  overflow: hidden;
`;
