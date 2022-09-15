import styled from "styled-components";
import { ellipsisLine } from "../../../../styles/libStyle";
import { palette } from "../../../../styles/palette";

export const ProfileMyPostItemContainer = styled.div`
  width: 100%;
  height: 685px;
  display: flex;
  flex-direction: column;
  border-bottom: 0.25px solid ${({ theme }) => theme.borderColor};
  border-top: 0.25px solid ${({ theme }) => theme.borderColor};
  padding: 50px 0px;

  &:first-child {
    height: 635px;
    border-top: 0px;
    padding-top: 0px;
  }

  &:last-child {
    height: 635px;
    border-bottom: 0px;
    padding-bottom: 0px;
  }
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
  margin-top: 24px;
`;

export const ProfileMyPostItemSummary = styled.p`
  max-height: 31px;
  font-size: 16px;
  margin-top: 10px;
  ${ellipsisLine(2)}
  color : ${({ theme }) => theme.contrast};
`;

export const ProfileMyPostItemBottomWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: auto;
  column-gap: 10px;
  font-size: 14px;
  color: ${palette.gray[400]};
`;

export const ProfileMyPostItemLikeWrap = styled.div`
  display: flex;
  align-items: center;
  height: 16px;
`;

export const ProfileMyPostItemLikeIcon = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileMyPostItemLikeText = styled.span`
  font-size: 14px;
  margin-left: 3px;
  padding-top: 2px;
`;
