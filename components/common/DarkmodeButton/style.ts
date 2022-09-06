import styled from "styled-components";

export const DarkmodeButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const DarkmodeButtonIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: ${({ theme }) => theme.contrast};
`;
