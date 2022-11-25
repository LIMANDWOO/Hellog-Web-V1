import { useMutation, useQuery } from "react-query";
import {
  getMyPostByTagParam,
  getPostParam,
  postCommentParam,
  postPostParam,
} from "../../repository/post/post.param";
import postRepository from "../../repository/post/post.repository";

export const useGetTrendingPosts = () =>
  useQuery("post/getTrendingPosts", () => postRepository.getTrendingPosts(), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
  });

export const useGetPost = ({ id }: getPostParam) =>
  useQuery(["post/getPost", id], () => postRepository.getPost({ id }), {
    cacheTime: 1000 * 60 * 30,
    staleTime: 1000 * 60,
  });

export const useGetMyPosts = () =>
  useQuery("post/getMyPosts", () => postRepository.getMyPosts());

export const useGetMyPostsByTag = ({ tag }: getMyPostByTagParam) =>
  useQuery("post/getMyPostsByTag", () =>
    postRepository.getMyPostsByTag({ tag })
  );

export const usePostPost = () => {
  const mutation = useMutation((postData: postPostParam) =>
    postRepository.postPost(postData)
  );

  return mutation;
};

export const usePostComment = () => {
  const mutation = useMutation(({ content, posting_id }: postCommentParam) =>
    postRepository.postComment({ content, posting_id })
  );

  return mutation;
};
