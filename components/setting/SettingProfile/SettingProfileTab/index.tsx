import { useRecoilState } from "recoil";
import { SETTING_FORM_TAB_ITEMS } from "../../../../constants/setting/setting.constant";
import { settimgTabAtom } from "../../../../store/setting/setting.store";
import { SettingProfileTabContainer, SettingProfileTabItem } from "./style";

const SettingProfileTab = () => {
  const [tab, setTab] = useRecoilState(settimgTabAtom);

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
