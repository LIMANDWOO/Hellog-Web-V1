import { customAxios } from "../../lib/axios/customAxios";
import { getMyPostByTag, getPostParam } from "./post.param";

class PostRepository {
  public async getPopularPosts(): Promise<any> {
    const { data } = await customAxios.get("/post/popular");
    return data;
  }

  public async getPost({ id }: getPostParam): Promise<any> {
    const { data } = await customAxios.get(`/post/${id}`);
    return data;
  }

  public async getMyPosts(): Promise<any> {
    const { data } = await customAxios.get("/post/my");
    return data;
  }

  public async getMyPostsByTag({ tag }: getMyPostByTag): Promise<any> {
    const { data } = await customAxios.get(`/post?tag=${tag}`);
    return data;
  }
}

export default new PostRepository();
