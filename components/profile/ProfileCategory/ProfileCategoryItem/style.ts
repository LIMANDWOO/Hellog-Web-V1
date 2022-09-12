import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const ProfileCategoryItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
`;

export const ProfileCategoryItemTitle = styled.h1`
  color: ${({ theme }) => theme.contrast};

  ${ProfileCategoryItemContainer}:hover & {
    text-decoration: underline;
  }
`;

export const ProfileCategoryItemCount = styled.span`
  color: ${palette.gray[400]};

  ${ProfileCategoryItemContainer}:hover & {
    text-decoration: underline;
  }
`;
