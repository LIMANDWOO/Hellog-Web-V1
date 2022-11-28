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
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  font-size: 17px;
  line-height: 22px;
  display: flex;
  column-gap: 20px;
  color: ${({ theme }) => theme.contrast};
`;

export const ReadCommentItemModifyInputWrap = styled.form`
  width: 830px;
  height: 60px;
  display: flex;
`;

export const ReadCommentItemModifyInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 17px;
  color: ${({ theme }) => theme.contrast};
  outline: none;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  padding: 18px;
`;
