import styled, { css } from "styled-components";
import { palette } from "../../../../styles/palette";

export const ProfileTagItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
`;

export const ProfileTagItemTitle = styled.h1<{
  isSelect: boolean;
}>`
  color: ${({ theme }) => theme.contrast};

  ${({ isSelect }) =>
    isSelect &&
    css`
      color: ${palette.main};
    `};

  ${ProfileTagItemContainer}:hover & {
    text-decoration: underline;
  }
`;

export const ProfileTagItemCount = styled.span`
  color: ${palette.gray[400]};

  ${ProfileTagItemContainer}:hover & {
    text-decoration: underline;
  }
`;
