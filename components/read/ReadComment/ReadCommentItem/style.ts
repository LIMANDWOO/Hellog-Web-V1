import styled from "styled-components";

export const ReadCommentItemContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

export const ReadCommentItemProfile = styled.img`
  min-width: 55px;
  height: 55px;
  border-radius: 100%;
  object-fit: cover;
  background-color: gray;
`;

export const ReadCommentItemText = styled.p`
  padding: 20px;
  padding-right: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  font-size: 17px;
  line-height: 22px;
  display: flex;
  column-gap: 20px;
  color: ${({ theme }) => theme.contrast};
`;
