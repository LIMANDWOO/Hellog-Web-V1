import { Post } from "../../types/post/post.type";

export interface getPostParam {
  id: number;
}

export interface getMyPostByTagParam {
  tag: string;
}

export interface postPostParam extends Post {}

export interface deletePostParam {
  posting_id: number;
}

export interface postCommentParam {
  content: string;
  posting_id: number;
}

export interface deleteCommentParam {
  posting_id: number;
}

export interface postLikeParam {
  posting_id: number;
}

export interface deleteLikeParam {
  posting_id: number;
}
