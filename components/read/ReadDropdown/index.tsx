import { BsThreeDotsVertical } from "@react-icons/all-files/bs/BsThreeDotsVertical";
import { useState } from "react";
import {
  ReadDropdownContainer,
  ReadDropdownItem,
  ReadDropdownItemWrap,
} from "./style";

interface Props {
  onDelete: () => void;
  onModify: () => void;
}

const ReadDropdown = ({ onDelete, onModify }: Props) => {
  const [isFold, setIsFold] = useState(true);

  return (
    <ReadDropdownContainer onClick={() => setIsFold((prev) => !prev)}>
      <BsThreeDotsVertical />
      {!isFold && (
        <ReadDropdownItemWrap>
          <ReadDropdownItem onClick={() => onModify()}>수정</ReadDropdownItem>
          <ReadDropdownItem onClick={() => onDelete()}>삭제</ReadDropdownItem>
        </ReadDropdownItemWrap>
      )}
    </ReadDropdownContainer>
  );
};

export default ReadDropdown;
