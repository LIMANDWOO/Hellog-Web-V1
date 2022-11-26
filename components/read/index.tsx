import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useGetPost } from "../../quries/post/post.query";
import ReadComment from "./ReadComment";
import {
  ReadContainer,
  ReadContentProfileText,
  ReadContentProfileWrap,
  ReadContentThumbnail,
  ReadContentTitle,
  ReadContentTitleWrap,
  ReadContentWrap,
} from "./style";

const ReadViewer = dynamic(() => import("./ReadViewer/index"), { ssr: false });

const Read = () => {
  const { id } = useRouter().query;

  const { data: serverPostData } = useGetPost({ id: Number(id) });

  return (
    <ReadContainer>
      <ReadContentWrap>
        <ReadContentTitleWrap>
          <ReadContentTitle>안녕하세요 ㅋㅋㅋ</ReadContentTitle>
        </ReadContentTitleWrap>
        <ReadContentProfileWrap>
          <ReadContentProfileText>임동현 ∙ 4일전</ReadContentProfileText>
        </ReadContentProfileWrap>
        <ReadContentThumbnail
          src={
            "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e"
          }
        />
        <ReadViewer
          content={
            "# 위에 내 이상형임\n # 안녕하세요\n ## 안뇽하세요\n# 안녕하세요\nasdas# 안녕하세요\n# 안녕하세요\nasdas"
          }
        />
      </ReadContentWrap>
      <ReadComment postid={Number(id)} comments={[]} />
    </ReadContainer>
  );
};

export default Read;
