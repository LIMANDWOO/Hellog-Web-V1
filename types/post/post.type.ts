import { StudentMember } from "../member/member.type";

export interface Post {
  title: string;
  content: string;
  summary: string;
  thumbnail: string;
  category: string[];
}

export interface PostDetail extends Post {
  readonly id: number;
  status: "ACTIVE" | "BANNED";
  likeCount: number;
  readonly createdDate: string;
  readonly modifiedDate: string;
  student: StudentMember;
}

export interface TrendingPostsResponse {}

export interface PostResponse {}
