import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const WritingButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  cursor: pointer;
  border: 0px;
  background-color: ${palette.main};
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  overflow: hidden;

  &:hover {
    border: 1px solid ${palette.main};
    background-color: ${({ theme }) => theme.backgroundColor};
    width: 100px;
    justify-content: space-evenly;
  }
`;

export const WritingButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: white;

  ${WritingButtonContainer}:hover & {
    transform: rotate(180deg);
    color: ${palette.main};
  }
`;

export const WritingButtonText = styled.p`
  color: white;
  transition: all 0.3s ease;
  font-size: 0px;
  white-space: nowrap;
  display: none;
  font-weight: bold;

  ${WritingButtonContainer}:hover & {
    font-size: 15px;
    color: ${palette.main};
    display: block;
  }
`;
