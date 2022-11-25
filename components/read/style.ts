import styled from "styled-components";
import { palette } from "../../styles/palette";

export const ReadContainer = styled.div`
  width: 980px;
  margin: 0px auto;
  border-radius: 5px;
  padding-bottom: 60px;
`;

export const ReadContentWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 60px;
  margin-bottom: 60px;
`;

export const ReadContentTitleWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReadContentTitle = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
`;

export const ReadContentProfileWrap = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  margin: 10px 0px;
`;

export const ReadContentProfileText = styled.span`
  color: ${palette.gray[300]};
  font-size: 1.125rem;
`;

export const ReadContentThumbnail = styled.img`
  width: 100%;
  height: 570px;
  object-fit: cover;
  margin: 20px 0px;
  border-radius: 5px;
`;
