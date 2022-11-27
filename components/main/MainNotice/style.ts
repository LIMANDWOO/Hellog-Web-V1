import styled from "styled-components";

export const MainNoticeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const MainNoticeItem = styled.div`
  width: 260px;
  height: 426px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 20px;
  box-shadow: 4px 1.2rem 3rem 6px rgb(0 0 0 / 9%);
  padding: 18px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 4px 1.2rem 3rem 6px rgb(0 0 0 / 18%);
    transform: translateY(-5px);
  }
`;

export const MainNoticeItemTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
`;
