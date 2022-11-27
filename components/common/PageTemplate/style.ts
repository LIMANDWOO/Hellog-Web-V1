import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";

export const PageTemplateContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const PageTemplateWrap = styled.div`
  width: 1160px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;
