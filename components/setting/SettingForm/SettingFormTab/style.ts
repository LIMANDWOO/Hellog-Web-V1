import styled, { css } from "styled-components";
import { palette } from "../../../../styles/palette";

export const SettingFormTabContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-top: auto;
  display: flex;
  column-gap: 15px;
`;

export const SettingFormTabItem = styled.div<{ isSelect: boolean }>`
  padding: 0px 10px;
  padding-bottom: 8px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme.contrast};
  transition: border-bottom 0.1s ease-out;

  ${({ isSelect }) =>
    isSelect
      ? css`
          border-bottom: 3px solid ${palette.main};
          color: ${({ theme }) => theme.contrast};
        `
      : css`
          border: 0px;
          color: ${palette.gray[400]};
        `}
`;
