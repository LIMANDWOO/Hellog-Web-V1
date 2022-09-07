import {
  WritingButtonContainer,
  WritingButtonIcon,
  WritingButtonText,
} from "./style";
import { AiOutlinePlus } from "@react-icons/all-files/ai/AiOutlinePlus";
import { useRouter } from "next/router";

const WritingButton = () => {
  const router = useRouter();

  return (
    <WritingButtonContainer onClick={() => router.push("/write")}>
      <WritingButtonIcon>
        <AiOutlinePlus />
      </WritingButtonIcon>
      <WritingButtonText>글 쓰기</WritingButtonText>
    </WritingButtonContainer>
  );
};

export default WritingButton;
