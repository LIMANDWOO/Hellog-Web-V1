import styled from "styled-components";
import { palette } from "../../styles/palette";

export const AuthContainer = styled.div`
  width: 100%;
  height: calc(100vh - 240px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthWrap = styled.div`
  width: 444px;
  height: 505px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthContentWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  margin: auto 0px;
`;

export const AuthHellogIcon = styled.img`
  width: 140px;
`;

export const AuthDescription = styled.p`
  color: ${palette.main};
  font-size: 16px;
  padding-top: 16px;
`;

export const AuthPointImg = styled.img`
  width: 140px;
  object-fit: scale-down;
  margin-left: auto;
  margin-top: auto;
  margin-right: 20px;
`;

export const AuthOAuthButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px 0px;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
`;
