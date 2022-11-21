import { customAxios } from "../../lib/axios/customAxios";
import { PostDetail } from "../../types/post/post.type";
import { getMyPostByTagParam, getPostParam, postPostParam } from "./post.param";

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
    await customAxios.post("/post", { ...postData });
  }
}

export default new PostRepository();
