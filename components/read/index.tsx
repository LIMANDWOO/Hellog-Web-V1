import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import TimeCounting from "time-counting";
import { useGetMyMember } from "../../quries/member/member.query";
import { useDeletePost, useGetPost } from "../../quries/post/post.query";
import dateTransform from "../../util/transform/dateTransform";
import ReadComment from "./ReadComment";
import ReadDropdown from "./ReadDropdown";
import ReadLikeRemote from "./ReadLikeRemote";
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

  const queryClient = useQueryClient();

  const router = useRouter();

  const { data: serverPostData } = useGetPost({ id: Number(id) });

  const { data: serverMyMemberData } = useGetMyMember();

  const deletePostMutation = useDeletePost();

  return (
    <ReadContainer>
      <ReadLikeRemote
        liked={serverPostData?.liked!}
        posting_id={Number(id)}
        prevLikeCount={serverPostData?.like_count!}
      />
      <ReadContentWrap>
        <ReadContentTitleWrap>
          <ReadContentTitle>{serverPostData?.title}</ReadContentTitle>
          {serverMyMemberData?.id === serverPostData?.student.id && (
            <ReadDropdown
              onDelete={() => {
                deletePostMutation.mutate(
                  { posting_id: Number(id) },
                  {
                    onSuccess: () => {
                      queryClient.invalidateQueries("post/getTrendingPosts");
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
          )}
        </ReadContentTitleWrap>
        <ReadContentProfileWrap>
          <ReadContentProfileText>
            {serverPostData?.student.name} ∙{" "}
            {TimeCounting(dateTransform.format(serverPostData?.createdDate!), {
              lang: "ko",
            })}
          </ReadContentProfileText>
        </ReadContentProfileWrap>
        <ReadContentThumbnail src={serverPostData?.thumbnail_url} />
        <EditorViewer content={serverPostData?.content!} />
      </ReadContentWrap>
      <ReadComment postid={Number(id)} comments={serverPostData?.comments!} />
    </ReadContainer>
  );
};

export default Read;
