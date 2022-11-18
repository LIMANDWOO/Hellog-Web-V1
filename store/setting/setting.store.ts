import { atom } from "recoil";
import { v1 } from "uuid";
import { SETTING_FORM_TAB_ITEMS } from "../../constants/setting/setting.constant";

export const settimgTabAtom = atom<string>({
  key: `setting/settimgTabAtom${v1()}`,
  default: SETTING_FORM_TAB_ITEMS[0],
});

export const settingFormModifyModeAtom = atom<{
  [key: string]: boolean;
}>({
  key: `setting/settingFormModifyModeAtom${v1()}`,
  default: {
    modifyMyLink: false,
    modifyMyName: false,
  },
});
