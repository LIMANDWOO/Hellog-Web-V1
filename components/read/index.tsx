import { useRouter } from "next/router";
import { useGetPost } from "../../quries/post/post.query";
import { PostDetail } from "../../types/post/post.type";
import {
  ReadContainer,
  ReadContentThumbnail,
  ReadContentTitle,
  ReadContentWrap,
} from "./style";

const Read = () => {
  const { id } = useRouter().query;

  const { data: serverPostData } = useGetPost({ id });

  return (
    <ReadContainer>
      <ReadContentWrap>
        <ReadContentTitle>안녕하세요 ㅋㅋㅋ</ReadContentTitle>
        <ReadContentThumbnail
          src={
            "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e"
          }
        />
      </ReadContentWrap>
    </ReadContainer>
  );
};

export default Read;
