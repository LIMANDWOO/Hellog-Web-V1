import { useRecoilState } from "recoil";
import { SETTING_FORM_TAB_ITEMS } from "../../../../constants/setting/setting.constant";
import { settimgTabAtom } from "../../../../store/setting/setting.store";
import { SettingFormTabContainer, SettingFormTabItem } from "./style";

const SettingFormTab = () => {
  const [tab, setTab] = useRecoilState(settimgTabAtom);

  return (
    <SettingFormTabContainer>
      {SETTING_FORM_TAB_ITEMS.map((item) => (
        <SettingFormTabItem
          isSelect={tab === item}
          key={item}
          onClick={() => setTab(item)}
        >
          {item}
        </SettingFormTabItem>
      ))}
    </SettingFormTabContainer>
  );
};

export default SettingFormTab;
