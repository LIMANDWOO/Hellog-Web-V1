import React from "react";
import { MyLink } from "../../../../../types/myLink/myLink.type";
import {
  SettingMyInfoFormMyLinkContainer,
  SettingMyInfoFormMyLinkInput,
  SettingMyInfoFormMyLinkInputImg,
} from "./style";

interface Props {
  idx: number;
  data: MyLink;
  onChangeLinkUrl: (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => void;
  onDeleteLink: (id: number) => void;
}

const SettingMyInfoFormMyLink = ({
  idx,
  data,
  onChangeLinkUrl,
  onDeleteLink,
}: Props) => {
  return (
    <SettingMyInfoFormMyLinkContainer>
      <SettingMyInfoFormMyLinkInputImg src={data.img} />
      <SettingMyInfoFormMyLinkInput
        value={data.redirectUrl}
        onChange={(e) => onChangeLinkUrl(e, idx)}
      />
    </SettingMyInfoFormMyLinkContainer>
  );
};

export default SettingMyInfoFormMyLink;
