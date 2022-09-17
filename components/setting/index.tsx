import SettingForm from "./SettingForm";
import SettingProfile from "./SettingProfile";
import { SettingContainer, SettingWrap } from "./style";

const Setting = () => {
  return (
    <SettingContainer>
      <SettingWrap>
        <SettingProfile />
        <SettingForm />
      </SettingWrap>
    </SettingContainer>
  );
};

export default Setting;
