import {
  NoticeReadDropdownContainer,
  NoticeReadDropdownItem,
  NoticeReadDropdownItemWrap,
} from "./style";
import { BsThreeDotsVertical } from "@react-icons/all-files/bs/BsThreeDotsVertical";
import { useState } from "react";

interface Props {
  onDelete: () => void;
  onModify: () => void;
}

const NoticeReadDropdown = ({ onDelete, onModify }: Props) => {
  const [isFold, setIsFold] = useState(true);

  return (
    <NoticeReadDropdownContainer onClick={() => setIsFold((prev) => !prev)}>
      <BsThreeDotsVertical />
      {!isFold && (
        <NoticeReadDropdownItemWrap>
          <NoticeReadDropdownItem onClick={() => onModify()}>
            수정
          </NoticeReadDropdownItem>
          <NoticeReadDropdownItem onClick={() => onDelete()}>
            삭제
          </NoticeReadDropdownItem>
        </NoticeReadDropdownItemWrap>
      )}
    </NoticeReadDropdownContainer>
  );
};

export default NoticeReadDropdown;
