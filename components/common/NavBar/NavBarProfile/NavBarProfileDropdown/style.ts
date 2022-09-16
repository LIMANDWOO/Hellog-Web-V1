import styled from "styled-components";

export const NavBarProfileDropdownContainer = styled.div`
  width: 180px;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  top: 50px;
  right: 0px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const NavBarProfileDropdownItemContainer = styled.div`
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  color: ${({ theme }) => theme.contrast};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  font-size: 15px;

  &:hover {
    filter: brightness(95%);
  }
`;
