import styled from "styled-components";

export const ReadDropdownContainer = styled.div`
  width: 40px;
  height: 40px;
  font-size: 40px;
  color: ${({ theme }) => theme.contrast};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

export const ReadDropdownItemWrap = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  position: absolute;
  top: 45px;
  left: 5px;
  overflow: hidden;
`;

export const ReadDropdownItem = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  color: ${({ theme }) => theme.contrast};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  &:hover {
    filter: brightness(95%);
  }
`;
