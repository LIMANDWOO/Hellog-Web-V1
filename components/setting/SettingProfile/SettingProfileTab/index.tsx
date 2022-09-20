import { useState } from "react";
import { SETTING_FORM_TAB_ITEMS } from "../../../../constants/setting/setting.constant";
import { SettingProfileTabContainer, SettingProfileTabItem } from "./style";

const SettingProfileTab = () => {
  const [tab, setTab] = useState("내정보 변경");

  return (
    <SettingProfileTabContainer>
      {SETTING_FORM_TAB_ITEMS.map((item) => (
        <SettingProfileTabItem
          isSelect={tab === item}
          key={item}
          onClick={() => setTab(item)}
        >
          {item}
        </SettingProfileTabItem>
      ))}
    </SettingProfileTabContainer>
  );
};

export default SettingProfileTab;
