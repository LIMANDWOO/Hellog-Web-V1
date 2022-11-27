import styled from "styled-components";

export const ReadCommentDropdownContainer = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: ${({ theme }) => theme.contrast};
  cursor: pointer;
  position: relative;
`;

export const ReadCommentDropdownItemWrap = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  overflow: hidden;
  top: 30px;
  position: absolute;
  left: 0px;
`;

export const ReadCommentDropdownItem = styled.div`
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.contrast};
  padding: 0px 20px;
  box-sizing: border-box;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor2};

  &:hover {
    filter: brightness(95%);
  }
`;
