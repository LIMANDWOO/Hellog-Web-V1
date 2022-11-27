import { PostDetail } from "../post/post.type";

export type MemberStatus = "ACTIVE" | "BANNED";

export type MemberRole = "ADMIN" | "STUDENT" | "GUEST";

export interface Member {
  createdDate: string;
  email: string;
  id: number;
  modifiedDate: string;
  profileImage: string;
  role: MemberRole;
  status: MemberStatus;
}

export interface MemberInfo {
  description: string;
  generation: number;
  id: number;
  name: string;
  user: Member;
  postings : PostDetail[]
}
