import { customAxios } from "../../lib/axios/customAxios";
import { PostDetail } from "../../types/post/post.type";
import {
  deleteCommentParam,
  deleteLikeParam,
  deletePostParam,
  getMyPostByTagParam,
  getPostParam,
  postCommentParam,
  postLikeParam,
  postPostParam,
  putPostParam,
} from "./post.param";

class PostRepository {
  public async getTrendingPosts(): Promise<PostDetail[]> {
    const { data } = await customAxios.get("/posting/trending");
    return data;
  }

  public async getPost({ id }: getPostParam): Promise<PostDetail> {
    const { data } = await customAxios.get(`/posting/${id}`);
    return data;
  }

  public async getMyPosts(): Promise<any> {
    const { data } = await customAxios.get("/post/my");
    return data;
  }

  public async getMyPostsByTag({ tag }: getMyPostByTagParam): Promise<any> {
    const { data } = await customAxios.get(`/post?tag=${tag}`);
    return data;
  }

  public async postPost(postData: postPostParam): Promise<void> {
    await customAxios.post("/posting", { ...postData });
  }

  public async putPost({
    title,
    content,
    thumbnail_url,
    summary,
    id,
  }: putPostParam): Promise<void> {
    await customAxios.put("/posting", {
      title,
      content,
      thumbnail_url,
      summary,
      id,
    });
  }

  public async deletePost({ posting_id }: deletePostParam): Promise<void> {
    await customAxios.delete(`/posting/${posting_id}`);
  }

  public async postComment({
    content,
    posting_id,
  }: postCommentParam): Promise<void> {
    await customAxios.post("/posting/comment", { content, posting_id });
  }

  public async deleteComment({
    posting_id,
  }: deleteCommentParam): Promise<void> {
    await customAxios.delete(`/posting/comment/${posting_id}`);
  }

  public async postLike({ posting_id }: postLikeParam): Promise<void> {
    await customAxios.post(`/posting/like/${posting_id}`);
  }

  public async deleteLike({ posting_id }: deleteLikeParam): Promise<void> {
    await customAxios.delete(`/posting/like/${posting_id}`);
  }
}

export default new PostRepository();
