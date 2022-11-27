import { customAxios } from "../../lib/axios/customAxios";
import { MemberInfo } from "../../types/member/member.type";

class MemberRepository {
  public async getMyMember(): Promise<MemberInfo> {
    const { data } = await customAxios.get("/user/myinfo");
    return data;
  }
}

export default new MemberRepository();
