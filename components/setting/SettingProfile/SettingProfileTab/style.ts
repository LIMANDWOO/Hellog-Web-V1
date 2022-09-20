import styled, { css } from "styled-components";
import { palette } from "../../../../styles/palette";

export const SettingProfileTabContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SettingProfileTabItem = styled.div<{ isSelect: boolean }>`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-size: 15px;
  text-align: start;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;

  ${({ isSelect }) =>
    isSelect
      ? css`
          background-color: ${palette.main};
          color: white;
        `
      : css`
          color: ${palette.gray[400]};
          background: none;
        `}
`;
