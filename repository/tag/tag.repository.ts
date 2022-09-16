import { customAxios } from "../../lib/axios/customAxios";

class TagRepository {
  public async getMyTags(): Promise<any> {
    const { data } = await customAxios.get("/tag/my");
    return data;
  }
}

export default new TagRepository();
