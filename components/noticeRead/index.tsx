import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import TimeCounting from "time-counting";
import { useDeleteNotice } from "../../quries/notice/notice.query";
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

  return (
    <NoticeReadContainer>
      <NoticeReadTitleWrap>
        <NoticeReadTitle>공지사항입니다</NoticeReadTitle>
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
      </NoticeReadTitleWrap>
      <NoticeReadProfileWrap>
        <NoticeReadProfileText>{`${"임동현"} ∙ ${TimeCounting("2022-11-24", {
          lang: "ko",
        })}`}</NoticeReadProfileText>
      </NoticeReadProfileWrap>
      <EditorViewer
        content={
          "# 위에 내 이상형임\n # 안녕하세요\n ## 안뇽하세요\n# 안녕하세요\nasdas# 안녕하세요\n# 안녕하세요\nasdas"
        }
      />
    </NoticeReadContainer>
  );
};

export default NoticeRead;
