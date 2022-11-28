import styled from "styled-components";

export const MainNoticeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const MainNoticeItem = styled.div`
  width: 260px;
  height: 213px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 20px;
  box-shadow: 4px 1.2rem 3rem 6px rgb(0 0 0 / 9%);
  padding: 18px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 4px 1.2rem 3rem 6px rgb(0 0 0 / 18%);
    transform: translateY(-5px);
  }
`;

export const MainNoticeItemBottomWrap = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const MainNoticeItemBottomProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  background-color: black;
`;

export const MainNoticeItemBottomProfileText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.contrast};
`;

export const MainNoticeItemTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
`;
