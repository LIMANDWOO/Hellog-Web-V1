import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const ReadLikeRemoteContainer = styled.div`
  width: 85px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: -100px;
  top: 110px;
`;

export const ReadLikeRemoteLikeButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

export const ReadLikeRemoteLikeButton = styled.button<{ isLike: boolean }>`
  width: 65px;
  height: 65px;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isLike, theme }) =>
    isLike
      ? css`
          border: 0px;
          background-color: ${palette.main};
          color: white;
        `
      : css`
          background-color: ${({ theme }) => theme.backgroundColor2};
          border: 1px solid ${theme.borderColor};
          color: ${palette.gray[300]};
        `}
`;

export const ReadLikeRemoteLikeButtonIcon = styled.div`
  width: 35px;
  height: 35px;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReadLikeRemoteShareButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 100%;
  cursor: pointer;

  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${palette.gray[300]};
`;
