import styled from "styled-components";

export const SettingMyInfoFormMyLinkContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const SettingMyInfoFormMyLinkInputImg = styled.img`
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 100%;
`;

export const SettingMyInfoFormMyLinkInput = styled.input`
  width: 400px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};
  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 1px solid ${({ theme }) => theme.borderColor};
  outline: none;
`;

export const SettingMyInfoFormMyLinkText = styled.p`
  padding: 0px 15px;
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};
`;
