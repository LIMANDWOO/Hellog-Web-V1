import { useRecoilValue } from "recoil";
import { settimgTabAtom } from "../../../store/setting/setting.store";
import SettingMyInfoForm from "./SettingMyInfoForm";
import {
  SettinFormTitle,
  SettingFormContainer,
  SettingFormWrap,
} from "./style";

const SettingForm = () => {
  const tab = useRecoilValue(settimgTabAtom);

  const settingForms = [
    {
      id: "내정보 변경",
      component: <SettingMyInfoForm key={"settingMyInfoForm"} />,
    },
    {
      id: "비밀번호 변경",
      component: <></>,
    },
    {
      id: "아이디 변경",
      component: <></>,
    },
  ];

  return (
    <SettingFormContainer>
      <SettingFormWrap>
        <SettinFormTitle>{tab}</SettinFormTitle>
        {settingForms.map((item) => item.id === tab && item.component)}
      </SettingFormWrap>
    </SettingFormContainer>
  );
};

export default SettingForm;
