import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

interface Param {
  prevComment: string;
  commentId: number;
  setIsModify: Dispatch<SetStateAction<boolean>>;
}

const useModifyComment = ({ prevComment, commentId, setIsModify }: Param) => {
  const [tempComment, setTempComment] = useState(prevComment);
  const [comment, setComment] = useState(prevComment);

  const onChangeModifyComment = (e: ChangeEvent<HTMLInputElement>) =>
    setTempComment(e.target.value);

  const onSubmitModifyComment = (e: FormEvent) => {
    if (tempComment === comment) {
      return;
    }

    setIsModify(false);

    e.preventDefault();
  };

  return {
    comment,
    tempComment,
    onChangeModifyComment,
    onSubmitModifyComment,
  };
};

export default useModifyComment;
