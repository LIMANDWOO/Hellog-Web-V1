import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useDeletePost, useGetPost } from "../../quries/post/post.query";
import ReadComment from "./ReadComment";
import ReadDropdown from "./ReadDropdown";
import {
  ReadContainer,
  ReadContentProfileText,
  ReadContentProfileWrap,
  ReadContentThumbnail,
  ReadContentTitle,
  ReadContentTitleWrap,
  ReadContentWrap,
} from "./style";

const EditorViewer = dynamic(() => import("../common/EditorViewer/index"), {
  ssr: false,
});

const Read = () => {
  const { id } = useRouter().query;

  const router = useRouter();

  const { data: serverPostData } = useGetPost({ id: Number(id) });

  const deletePostMutation = useDeletePost();

  return (
    <ReadContainer>
      <ReadContentWrap>
        <ReadContentTitleWrap>
          <ReadContentTitle>안녕하세요 ㅋㅋㅋ</ReadContentTitle>
          <ReadDropdown
            onDelete={() => {
              deletePostMutation.mutate(
                { posting_id: Number(id) },
                {
                  onSuccess: () => {
                    window.alert("게시물 삭제 성공");
                    router.push("/");
                  },
                  onError: () => {
                    window.alert("게시물 삭제 실패");
                  },
                }
              );
            }}
            onModify={() => {}}
          />
        </ReadContentTitleWrap>
        <ReadContentProfileWrap>
          <ReadContentProfileText>임동현 ∙ 4일전</ReadContentProfileText>
        </ReadContentProfileWrap>
        <ReadContentThumbnail
          src={
            "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e"
          }
        />
        <EditorViewer
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
