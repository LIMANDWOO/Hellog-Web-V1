import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { settingFormModifyModeAtom } from "../../store/setting/setting.store";

const useSettingController = () => {
  const [modes, setModes] = useRecoilState(settingFormModifyModeAtom);

  const onClickMode = (e: any) => {
    const { id } = e.target;

    setModes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return {
    modes,
    onClickMode,
  };
};

export default useSettingController;
