import { useEffect, useState } from "react";
import { useDeleteLike, usePostLike } from "../../quries/post/post.query";

interface Param {
  posting_id: number;
  prevIsLike: boolean;
  prevLikeCount: number;
}

const useLike = ({ posting_id, prevIsLike, prevLikeCount }: Param) => {
  const [isLike, setIsLike] = useState<boolean>(prevIsLike);
  const [likeCount, setLikeCount] = useState<number>(prevLikeCount);

  const postLikeMutation = usePostLike();
  const deleteLikeMutation = useDeleteLike();

  useEffect(() => {
    setLikeCount(prevLikeCount);
    setIsLike(prevIsLike);
  }, [prevLikeCount, prevIsLike]);

  const onChangeLike = () => {
    if (deleteLikeMutation.isLoading || deleteLikeMutation.isLoading) {
      return;
    }

    if (isLike) {
      deleteLikeMutation.mutate(
        { posting_id },
        {
          onSuccess: () => {
            setIsLike(false);
            setLikeCount((prev) => prev - 1);
          },
        }
      );
    } else {
      postLikeMutation.mutate(
        { posting_id },
        {
          onSuccess: () => {
            setIsLike(true);
            setLikeCount((prev) => prev + 1);
          },
        }
      );
    }
  };

  return { isLike, likeCount, onChangeLike };
};

export default useLike;
