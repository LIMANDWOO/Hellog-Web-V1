import styled from "styled-components";
import { palette } from "../../styles/palette";

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileHeaderWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 5px;
  padding-bottom: 30px;
`;

export const ProfileHeaderLeftWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProfileHeaderMiddleWrap = styled.div`
  min-width: 240px;
  max-width: 240px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileHeaderRightWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProfileHeaderImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  object-fit: cover;
  position: relative;
  top: -20px;
`;

export const ProfileHeaderName = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.contrast};
`;

export const ProfileHeaderDescription = styled.p`
  font-size: 16px;
  color: ${palette.gray[400]};
  margin-top: 10px;
`;

export const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
