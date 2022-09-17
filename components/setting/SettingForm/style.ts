import styled from "styled-components";

export const SettingFormContainer = styled.div`
  width: 755px;
  height: 740px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 5px;
`;

export const SettingFormHeaderWrap = styled.div`
  width: 100%;
  min-height: 120px;
  filter: brightness(95%);
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding: 20px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
`;

export const SettingFormWrap = styled.div`
  width: 100%;
  height: 100%;
`;
