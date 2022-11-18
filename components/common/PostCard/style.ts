import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 260px;
  height: 426px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 4px 1.2rem 3rem 6px rgb(0 0 0 / 9%);

  &:hover {
    box-shadow: 4px 1.2rem 3rem 6px rgb(0 0 0 / 18%);
    transform: translateY(-5px);
  }
`;

export const PostCardBanner = styled.img`
  min-width: 100%;
  min-height: 160px;
  max-height: 160px;
  object-fit: cover;
  background-color: black;
`;

export const PostCardDescriptionWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
