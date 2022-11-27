import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const SettingFormContainer = styled.div`
  width: 755px;
  min-height: 740px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 5px;
  padding: 30px 20px;
`;

export const SettingFormWrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const SettinFormTitle = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.contrast};
  font-weight: bold;
  margin-bottom: 30px;
`;

export const SettingFormSubTitle = styled.h2`
  font-size: 16px;
  color: ${palette.gray[400]};
`;

export const SettingFormModifyText = styled.button`
  font-size: 16px;
  color: ${palette.main};
  cursor: pointer;
  background: none;
  border: 0px;
  outline: none;
`;

export const SettingFormSaveButton = styled.button`
  width: 110px;
  height: 48px;
`;
