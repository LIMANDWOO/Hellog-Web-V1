import SettingFormTab from "./SettingFormTab";
import {
  SettingFormContainer,
  SettingFormHeaderWrap,
  SettingFormWrap,
} from "./style";

const SettingForm = () => {
  return (
    <SettingFormContainer>
      <SettingFormHeaderWrap>
        <SettingFormTab />
      </SettingFormHeaderWrap>
      <SettingFormWrap></SettingFormWrap>
    </SettingFormContainer>
  );
};

export default SettingForm;
