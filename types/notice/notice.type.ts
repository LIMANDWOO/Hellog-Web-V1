import { Member } from "../member/member.type";

export interface Notice {
  content: string;
  title: string;
}

export interface NoticeDetail extends Notice {
  createdDate: string;
  id: number;
  modifiedDate: string;
  user: Member;
}
