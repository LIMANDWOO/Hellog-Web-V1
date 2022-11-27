import { Member, MemberInfo } from "../member/member.type";

export interface Post {
  title: string;
  content: string;
  summary: string;
  thumbnail_url: string;
}

export interface PostDetail extends Post {
  comments: PostComment[];
  readonly id: number;
  status: "ACTIVE" | "BANNED";
  likeCount: number;
  readonly createdDate: string;
  readonly modifiedDate: string;
  student: MemberInfo;
  liked: boolean;
}

export interface PostComment {
  content: string;
  readonly createdDate: string;
  readonly id: number;
  modifiedDate: string;
  user: Member;
}

export interface TrendingPostsResponse {}

export interface PostResponse {}
