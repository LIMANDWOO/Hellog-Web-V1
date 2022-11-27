import styled from "styled-components";
import { palette } from "../../styles/palette";

export const NoticeReadContainer = styled.div`
  width: 980px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

export const NoticeReadTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NoticeReadTitle = styled.h1`
  color: ${({ theme }) => theme.contrast};
  font-size: 50px;
  font-weight: bold;
`;

export const NoticeReadProfileWrap = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  margin: 10px 0px;
`;

export const NoticeReadProfileText = styled.span`
  color: ${palette.gray[300]};
  font-size: 1.125rem;
`;
