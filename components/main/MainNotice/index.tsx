import { useGetNotices } from "../../../quries/notice/notice.query";
import { MainNoticeContainer } from "./style";

const MainNotice = () => {
  const { data: serverNoticesData } = useGetNotices();

  return <MainNoticeContainer></MainNoticeContainer>;
};

export default MainNotice;
