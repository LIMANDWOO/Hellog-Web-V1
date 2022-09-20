import { SETTING_PROFILE_DESCRIPTION_MAX_LENGTH } from "../../../constants/setting/setting.constant";
import useSettingProfile from "../../../hooks/setting/useSettingProfile";
import SettingProfileTab from "./SettingProfileTab";
import {
  SettingProfileContainer,
  SettingProfileDescription,
  SettingProfileDescriptionSubmitButton,
  SettingProfileDescriptionTextArea,
  SettingProfileDescriptionTextAreaMaxLength,
  SettingProfileDescriptionTextAreaWrap,
  SettingProfileDescriptionToggleText,
  SettingProfileImg,
  SettingProfileName,
  SettingProfileWrap,
} from "./style";

const SettingProfile = () => {
  const {
    isModify,
    setIsModify,
    handleProfileData,
    changeProfileData,
    submitDescription,
  } = useSettingProfile();

  return (
    <SettingProfileContainer>
      <SettingProfileWrap>
        <SettingProfileImg
          src={
            "https://velog.velcdn.com/images/ldh3907/profile/0f7e6e83-5dac-4dd2-8893-4a8a741810e1/social.jpeg"
          }
        />
        <SettingProfileName>임동현</SettingProfileName>
        {isModify ? (
          <>
            <SettingProfileDescriptionTextAreaWrap>
              <SettingProfileDescriptionTextArea
                value={handleProfileData}
                onChange={changeProfileData}
              />
              <SettingProfileDescriptionTextAreaMaxLength
                length={handleProfileData.length}
              >
                {handleProfileData.length} /
                {SETTING_PROFILE_DESCRIPTION_MAX_LENGTH}
              </SettingProfileDescriptionTextAreaMaxLength>
            </SettingProfileDescriptionTextAreaWrap>
            <SettingProfileDescriptionSubmitButton onClick={submitDescription}>
              저장
            </SettingProfileDescriptionSubmitButton>
          </>
        ) : (
          <SettingProfileDescription>
            안녕하세요. 한줄 소개 입니다.한줄 소개 입니다. 안녕하세요. 한줄 소개
            입니다.한줄 소개 입니다. 안녕하세요. 한줄 소개 입니다.한줄 소개
            <SettingProfileDescriptionToggleText
              onClick={() => setIsModify(true)}
            >
              수정
            </SettingProfileDescriptionToggleText>
          </SettingProfileDescription>
        )}
      </SettingProfileWrap>
      <SettingProfileTab />
    </SettingProfileContainer>
  );
};

export default SettingProfile;
