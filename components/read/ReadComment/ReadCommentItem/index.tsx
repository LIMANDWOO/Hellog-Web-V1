import dynamic from "next/dynamic";
import {
  ReadCommentItemContainer,
  ReadCommentItemProfile,
  ReadCommentItemText,
} from "./style";
const ReadCommentDropdown = dynamic(
  () => import("../ReadCommentForm/ReadCommentDropdown"),
  { ssr: false }
);

const ReadCommentItem = () => {
  return (
    <ReadCommentItemContainer>
      <ReadCommentItemProfile />
      <ReadCommentItemText>
        안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요
        ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요
        ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요
        ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요
        ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요
        ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요 ㅋㅋ안녕하세요
        ㅋㅋ안녕하세요 ㅋㅋ
        <ReadCommentDropdown />
      </ReadCommentItemText>
    </ReadCommentItemContainer>
  );
};

export default ReadCommentItem;
