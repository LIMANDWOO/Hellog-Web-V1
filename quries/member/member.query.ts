import { useQuery } from "react-query";
import memberRepository from "../../repository/member/member.repository";

export const useGetMyMember = () =>
  useQuery("member/getMyMember", () => memberRepository.getMyMember());
