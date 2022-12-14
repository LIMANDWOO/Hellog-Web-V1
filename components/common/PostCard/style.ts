import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const PostCardContainer = styled.div`
  width: 260px;
  height: 426px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 1.2rem 3rem 6px rgb(0 0 0 / 9%);
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 4px 1.2rem 3rem 6px rgb(0 0 0 / 18%);
    transform: translateY(-5px);
  }
`;

export const PostCardBanner = styled.img`
  width: 100%;
  min-height: 160px;
  object-fit: cover;
  background-color: black;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const PostCardDescriptionWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 18px;
  box-sizing: border-box;
`;

export const PostCardTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
`;

export const PostCardSummary = styled.p`
  color: ${palette.gray[300]};
  font-size: 16px;
  margin-top: 10px;
`;

export const PostCardBottomWrap = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`;

export const PostCardBottomProfileWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const PostCardBottomProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  background-color: black;
`;

export const PostCardBottomProfileText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.contrast};
`;

export const PostCardBottomLikeCountWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3px;
`;

export const PostCardBottomLikeCountIcon = styled.div`
  width: 20px;
  height: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.contrast};
`;

export const PostCardBottomLikeCountText = styled.span`
  font-size: 10px;
  color: ${({ theme }) => theme.contrast};
`;
