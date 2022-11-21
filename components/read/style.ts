import styled from "styled-components";

export const ReadContainer = styled.div`
  width: 980px;
  margin: 0px auto;
  padding-bottom: 60px;
`;

export const ReadContentWrap = styled.div`
  width: 100%;
`;

export const ReadContentTitle = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
`;

export const ReadContentThumbnail = styled.img`
  width: 100%;
  height: 570px;
  object-fit: cover;
  margin: 20px 0px;
`;
