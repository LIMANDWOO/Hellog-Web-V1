import { ChangeEvent, useState } from "react";

const useSettingProfile = () => {
  const [isModify, setIsModify] = useState(false);

  const [handleProfileData, setHandleProfileData] = useState("");

  const changeProfileData = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setHandleProfileData(e.target.value);
  };

  const submitDescription = () => {
    if (handleProfileData.length > 30) {
    }

    setIsModify(false);
  };

  return {
    isModify,
    setIsModify,
    handleProfileData,
    changeProfileData,
    submitDescription,
  };
};

export default useSettingProfile;
