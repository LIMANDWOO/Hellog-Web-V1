import { customAxios } from "../../lib/axios/customAxios";

class MemberRepository {
  public async getMyMember(): Promise<any> {
    const { data } = await customAxios.get("/member/getMyMember");
    return data;
  }
}

export default new MemberRepository();
