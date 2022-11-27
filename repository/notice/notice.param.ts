import { Notice } from "../../types/notice/notice.type";

export interface getNoticeParam {
  notice_id: number;
}

export interface postNoticeParam extends Notice {}

export interface deleteNoticeParam {
  notice_id: number;
}
