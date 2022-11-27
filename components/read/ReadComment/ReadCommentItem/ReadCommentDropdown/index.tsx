import {
  ReadCommentDropdownContainer,
  ReadCommentDropdownItem,
  ReadCommentDropdownItemWrap,
} from "./style";
import { HiDotsVertical } from "@react-icons/all-files/hi/HiDotsVertical";
import { useState } from "react";

interface Props {
  onModify: () => void;
  onDelete: () => void;
}

const ReadCommentDropdown = ({ onModify, onDelete }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ReadCommentDropdownContainer onClick={() => setOpen((prev) => !prev)}>
      <HiDotsVertical />
      {open && (
        <ReadCommentDropdownItemWrap>
          <ReadCommentDropdownItem onClick={() => onModify()}>
            수정
          </ReadCommentDropdownItem>
          <ReadCommentDropdownItem onClick={() => onDelete()}>
            삭제
          </ReadCommentDropdownItem>
        </ReadCommentDropdownItemWrap>
      )}
    </ReadCommentDropdownContainer>
  );
};

export default ReadCommentDropdown;
