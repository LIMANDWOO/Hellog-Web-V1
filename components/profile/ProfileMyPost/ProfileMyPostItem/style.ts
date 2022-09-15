import styled from "styled-components";
import { palette } from "../../../../styles/palette";

export const ProfileMyPostItemContainer = styled.div`
  width: 100%;
  height: 585px;
  display: flex;
  flex-direction: column;
`;

export const ProfileMyPostItemBanner = styled.img`
  width: 100%;
  height: 455px;
  object-fit: cover;
`;

export const ProfileMyPostItemTitle = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
  margin-top: 12px;
`;

export const ProfileMyPostItemSummary = styled.p`
  color: ${palette.gray[400]};
  font-size: 16px;
  margin: auto 0px;
`;
