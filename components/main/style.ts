import styled, { css } from "styled-components";
import { palette } from "../../styles/palette";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const MainHeaderWrap = styled.div`
  width: 100%;
  display: flex;
`;

export const MainHeaderItem = styled.div<{ isSelect: boolean }>`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;

  ${({ isSelect }) =>
    isSelect
      ? css`
          color: ${({ theme }) => theme.contrast};
          border-bottom: 3px solid ${({ theme }) => theme.contrast};
        `
      : css`
          color: ${palette.gray[300]};
        `}
`;
