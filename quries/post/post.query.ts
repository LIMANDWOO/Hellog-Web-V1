import { useMutation, useQuery } from "react-query";
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
    staleTime: 1000 * 30,
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

export const usePutPost = () => {
  const mutation = useMutation(
    ({ title, content, thumbnail_url, summary, id }: putPostParam) =>
      postRepository.putPost({ title, content, thumbnail_url, summary, id })
  );

  return mutation;
};

export const useDeletePost = () => {
  const mutation = useMutation(({ posting_id }: deletePostParam) =>
    postRepository.deletePost({ posting_id })
  );

  return mutation;
};

export const usePostComment = () => {
  const mutation = useMutation(({ content, posting_id }: postCommentParam) =>
    postRepository.postComment({ content, posting_id })
  );

  return mutation;
};

export const useDeleteComment = () => {
  const mutation = useMutation(({ posting_id }: deleteCommentParam) =>
    postRepository.deleteComment({ posting_id })
  );

  return mutation;
};

export const usePostLike = () => {
  const mutation = useMutation(({ posting_id }: postLikeParam) =>
    postRepository.postLike({ posting_id })
  );

  return mutation;
};

export const useDeleteLike = () => {
  const mutation = useMutation(({ posting_id }: deleteLikeParam) =>
    postRepository.deleteLike({ posting_id })
  );

  return mutation;
};
