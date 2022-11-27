import { useMutation, useQuery } from "react-query";
import {
  deleteNoticeParam,
  getNoticeParam,
  postNoticeParam,
} from "../../repository/notice/notice.param";
import noticeRepository from "../../repository/notice/notice.repository";

export const useGetNotices = () =>
  useQuery("notice/getNotices", () => noticeRepository.getNotices(), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });

export const useGetNotice = ({ notice_id }: getNoticeParam) =>
  useQuery(
    ["notice/getNotice", notice_id],
    () => noticeRepository.getNotice({ notice_id }),
    { cacheTime: 1000 * 60 * 30, staleTime: 1000 * 60 }
  );

export const usePostNotice = () => {
  const mutation = useMutation((noticeData: postNoticeParam) =>
    noticeRepository.postNotice(noticeData)
  );

  return mutation;
};

export const useDeleteNotice = () => {
  const mutation = useMutation(({ notice_id }: deleteNoticeParam) =>
    noticeRepository.deleteNotice({ notice_id })
  );

  return mutation;
};
