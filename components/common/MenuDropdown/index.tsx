import { useState } from "react";
import {
  MenuDropdownContainer,
  MenuDropdownItem,
  MenuDropdownItemWrap,
} from "./style";
import { BsThreeDotsVertical } from "@react-icons/all-files/bs/BsThreeDotsVertical";

interface Props {
  onDelete: () => void;
  onModify: () => void;
}
const MenuDropdown = ({ onDelete, onModify }: Props) => {
  const [isFold, setIsFold] = useState(true);

  return (
    <MenuDropdownContainer onClick={() => setIsFold((prev) => !prev)}>
      <BsThreeDotsVertical />
      {!isFold && (
        <MenuDropdownItemWrap>
          <MenuDropdownItem onClick={() => onModify()}>수정</MenuDropdownItem>
          <MenuDropdownItem onClick={() => onDelete()}>삭제</MenuDropdownItem>
        </MenuDropdownItemWrap>
      )}
    </MenuDropdownContainer>
  );
};

export default MenuDropdown;
