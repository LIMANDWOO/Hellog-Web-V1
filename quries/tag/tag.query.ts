import { useQuery } from "react-query";
import tagRepository from "../../repository/tag/tag.repository";

export const useGetMyTags = () =>
  useQuery("tag/getMyTags", () => tagRepository.getMyTags());
