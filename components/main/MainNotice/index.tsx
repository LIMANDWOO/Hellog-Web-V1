import { useGetNotices } from "../../../quries/notice/notice.query";
import {
  MainNoticeContainer,
  MainNoticeItem,
  MainNoticeItemTitle,
} from "./style";

const MainNotice = () => {
  const { data: serverNoticesData } = useGetNotices();

  return (
    <MainNoticeContainer>
      {serverNoticesData?.map((notice) => (
        <MainNoticeItem key={notice.id}>
          <MainNoticeItemTitle>{notice.title}</MainNoticeItemTitle>
        </MainNoticeItem>
      ))}
    </MainNoticeContainer>
  );
};

export default MainNotice;
