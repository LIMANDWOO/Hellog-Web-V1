import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const SettingProfileContainer = styled.div`
  width: 325px;
  height: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 5px;
  padding: 20px;
`;

export const SettingProfileImg = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 100%;
`;

export const SettingProfileName = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.contrast};
  margin-top: 20px;
`;

export const SettingProfileDescription = styled.pre`
  width: 100%;
  height: 100%;
  color: ${palette.gray[400]};
  margin-top: 10px;
  font-size: 14px;
  white-space: pre-wrap;
`;

export const SettingProfileDescriptionToggleText = styled.span`
  font-size: 14px;
  color: ${palette.main};
  cursor: pointer;
  margin-left: 3px;
`;

export const SettingProfileDescriptionTextAreaWrap = styled.div`
  width: 100%;
  height: 107px;
  position: relative;
  margin-top: 10px;
`;

export const SettingProfileDescriptionTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor};
  resize: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
`;

export const SettingProfileDescriptionTextAreaMaxLength = styled.span<{
  length: number;
}>`
  font-size: 14px;
  color: ${({ length }) =>
    length > 30 ? palette.red[300] : palette.gray[400]};
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export const SettingProfileDescriptionSubmitButton = styled.button`
  width: 70px;
  height: 30px;
  margin-top: 10px;
  margin-left: auto;
  background-color: ${palette.main};
  border-radius: 20px;
  color: white;
  border: 0px;
  cursor: pointer;
`;
