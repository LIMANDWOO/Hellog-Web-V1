import styled from "styled-components";

export const NavBarProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  position: relative;
`;

export const NavBarProfileImgWrap = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
`;

export const NavBarProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
`;
