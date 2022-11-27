import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const ReadLikeRemoteContainer = styled.div`
  width: 85px;
  height: 185px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: -100px;
  top: 0px;
`;

export const ReadLikeRemoteLikeButton = styled.button<{ isLike: boolean }>`
  width: 85px;
  height: 85px;
  border-radius: 100%;

  ${({ isLike, theme }) =>
    isLike
      ? css`
          border: 0px;
          background-color: ${palette.main};
          color: white;
        `
      : css`
          border: 1px solid ${theme.borderColor};
          color: ${palette.gray[300]};
        `}
`;
