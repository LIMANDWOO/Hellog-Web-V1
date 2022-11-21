import { Post } from "../../types/post/post.type";

export interface getPostParam {
  id: number;
}

export interface getMyPostByTagParam {
  tag: string;
}

export interface postPostParam extends Post {}
