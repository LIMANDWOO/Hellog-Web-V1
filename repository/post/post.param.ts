import { Post } from "../../types/post/post.type";

export interface getPostParam {
  id: number;
}

export interface getMyPostByTagParam {
  tag: string;
}

export interface postPostParam extends Post {}

export interface postCommentParam {
  content: string;
  posting_id: number;
}
