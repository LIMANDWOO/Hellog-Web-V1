import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import TimeCounting from "time-counting";
import { useGetMyMember } from "../../quries/member/member.query";
import {
  useDeleteNotice,
  useGetNotice,
} from "../../quries/notice/notice.query";
import dateTransform from "../../util/transform/dateTransform";
import NoticeReadDropdown from "./NoticeReadDropdown";
import {
  NoticeReadContainer,
  NoticeReadProfileText,
  NoticeReadProfileWrap,
  NoticeReadTitle,
  NoticeReadTitleWrap,
} from "./style";

const EditorViewer = dynamic(() => import("../common/EditorViewer/index"), {
  ssr: false,
});

const NoticeRead = () => {
  const router = useRouter();

  const deleteNoticeMutation = useDeleteNotice();

  const { data: serverNoticeData } = useGetNotice({
    notice_id: Number(router.query.id),
  });

  const { data: serverMyMemberData } = useGetMyMember();

  return (
    <NoticeReadContainer>
      <NoticeReadTitleWrap>
        <NoticeReadTitle>{serverNoticeData?.title}</NoticeReadTitle>
        {serverMyMemberData?.id === serverNoticeData?.user.id && (
          <NoticeReadDropdown
            onDelete={() => {
              deleteNoticeMutation.mutate(
                { notice_id: Number(router.query.id) },
                {
                  onSuccess: () => {
                    window.alert("공지사항 삭제 성공");
                    router.push("/");
                  },
                  onError: () => {
                    window.alert("공지사항 삭제 실패");
                  },
                }
              );
            }}
            onModify={() => {}}
          />
        )}
      </NoticeReadTitleWrap>
      <NoticeReadProfileWrap>
        <NoticeReadProfileText>{`${"임동현"} ∙ ${TimeCounting(
          dateTransform.format(serverNoticeData?.createdDate!),
          {
            lang: "ko",
          }
        )}`}</NoticeReadProfileText>
      </NoticeReadProfileWrap>
      <EditorViewer content={serverNoticeData?.content!} />
    </NoticeReadContainer>
  );
};

export default NoticeRead;
