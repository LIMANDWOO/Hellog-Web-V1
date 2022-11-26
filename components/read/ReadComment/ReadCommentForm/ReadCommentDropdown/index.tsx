import {
  ReadCommentDropdownContainer,
  ReadCommentDropdownItem,
  ReadCommentDropdownItemWrap,
} from "./style";
import { HiDotsVertical } from "@react-icons/all-files/hi/HiDotsVertical";
import { useState } from "react";

const ReadCommentDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ReadCommentDropdownContainer onClick={() => setOpen((prev) => !prev)}>
      <HiDotsVertical />
      {open && (
        <ReadCommentDropdownItemWrap>
          <ReadCommentDropdownItem>수정</ReadCommentDropdownItem>
          <ReadCommentDropdownItem>삭제</ReadCommentDropdownItem>
        </ReadCommentDropdownItemWrap>
      )}
    </ReadCommentDropdownContainer>
  );
};

export default ReadCommentDropdown;
