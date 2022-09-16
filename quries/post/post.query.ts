import { useQuery } from "react-query";
import { getMyPostByTag, getPostParam } from "../../repository/post/post.param";
import postRepository from "../../repository/post/post.repository";

export const useGetPopularPosts = () =>
  useQuery("post/getPopular", () => postRepository.getPopularPosts(), {});

export const useGetPost = ({ id }: getPostParam) =>
  useQuery(["post/getPost", id], () => postRepository.getPost({ id }));

export const useGetMyPosts = () =>
  useQuery("post/getMyPosts", () => postRepository.getMyPosts());

export const useGetMyPostsByTag = ({ tag }: getMyPostByTag) =>
  useQuery("post/getMyPostsByTag", () =>
    postRepository.getMyPostsByTag({ tag })
  );
