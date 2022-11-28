import { useRouter } from "next/router";
import { useGetNotices } from "../../../quries/notice/notice.query";
import {
  MainNoticeContainer,
  MainNoticeItem,
  MainNoticeItemBottomProfileImg,
  MainNoticeItemBottomProfileText,
  MainNoticeItemBottomWrap,
  MainNoticeItemTitle,
} from "./style";

const MainNotice = () => {
  const router = useRouter();

  const { data: serverNoticesData } = useGetNotices();

  return (
    <MainNoticeContainer>
      {serverNoticesData?.map((notice) => (
        <MainNoticeItem
          onClick={() => router.push(`/noticeread/${notice.id}`)}
          key={notice.id}
        >
          <MainNoticeItemTitle>{notice.title}</MainNoticeItemTitle>
          <MainNoticeItemBottomWrap>
            <MainNoticeItemBottomProfileImg src={notice.user.profileImage} />
            <MainNoticeItemBottomProfileText>
              임동현
            </MainNoticeItemBottomProfileText>
          </MainNoticeItemBottomWrap>
        </MainNoticeItem>
      ))}
    </MainNoticeContainer>
  );
};

export default MainNotice;
