import { customAxios } from "../../lib/axios/customAxios";
import { NoticeDetail } from "../../types/notice/notice.type";
import {
  deleteNoticeParam,
  getNoticeParam,
  postNoticeParam,
} from "./notice.param";

class NoticeRepository {
  public async getNotices(): Promise<NoticeDetail[]> {
    const { data } = await customAxios.get("/notice/all");
    return data;
  }

  public async getNotice({ notice_id }: getNoticeParam): Promise<NoticeDetail> {
    const { data } = await customAxios.get(`/notice/${notice_id}`);
    return data;
  }

  public async postNotice(noticeData: postNoticeParam): Promise<void> {
    await customAxios.post("/notice", noticeData);
  }

  public async putNotice() {}

  public async deleteNotice({ notice_id }: deleteNoticeParam): Promise<void> {
    await customAxios.delete(`/notice/${notice_id}`);
  }
}

export default new NoticeRepository();
