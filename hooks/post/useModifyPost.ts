import { Editor } from "@toast-ui/react-editor";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { useGetPost, usePutPost } from "../../quries/post/post.query";
import {
  writeImageSrcAtom,
  writeIsCompleteAtom,
} from "../../store/write/write.store";
import { Post } from "../../types/post/post.type";

interface Param {
  posting_id: number;
}

const useModifyPost = ({ posting_id }: Param) => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const modifyEditorRef = useRef<Editor>(null);

  const [image, setImage] = useRecoilState(writeImageSrcAtom);

  const [, setIsComplete] = useRecoilState(writeIsCompleteAtom);

  const putPostMutation = usePutPost();

  const { data: serverPostData } = useGetPost({ id: posting_id });

  const [tempModifyPostData, setTempModifyPostData] = useState<Post>({
    title: "",
    content: "",
    summary: "",
    thumbnail_url: "",
  });

  const [modifyPostData, setModifyPostData] = useState<Post>({
    title: "",
    content: "",
    summary: "",
    thumbnail_url: "",
  });

  useEffect(() => {
    if (serverPostData) {
      const { title, content, summary, thumbnail_url } = serverPostData;

      setTempModifyPostData((prev) => ({
        ...prev,
        title,
        content,
        summary,
        thumbnail_url,
      }));
      setModifyPostData((prev) => ({
        ...prev,
        title,
        content,
        summary,
        thumbnail_url,
      }));

      setImage(thumbnail_url);

      if (modifyEditorRef.current) {
        modifyEditorRef.current.getInstance().setMarkdown(content);
      }
    }
  }, [serverPostData, setImage]);

  const onModifyText = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setModifyPostData((prev) => ({ ...prev, [name]: value }));
  };

  const onModifyContent = () => {
    if (modifyEditorRef.current) {
      setModifyPostData((prev) => ({
        ...prev,
        content: modifyEditorRef.current!.getInstance().getMarkdown(),
      }));
    }
  };

  const onCompleteModifyPost = () => {
    const { content, title } = modifyPostData;

    if (content === "" || title === "") {
      window.alert("????????? ??????????????????");
      return;
    }

    console.log(content);

    setIsComplete(true);
  };

  const onSubmitModifyPost = () => {
    const { summary } = modifyPostData;

    if (summary === "") {
      window.alert("????????? ??????????????????");
      return;
    }

    if (image === "") {
      window.alert("???????????? ??????????????????");
      return;
    }

    if (
      Object.entries(modifyPostData).toString() ===
      Object.entries(tempModifyPostData).toString()
    ) {
      window.alert("?????? ??????????????????");
      return;
    }

    putPostMutation.mutateAsync(
      { ...modifyPostData, id: posting_id },
      {
        onSuccess: () => {
          window.alert("????????? ?????? ??????");
          setImage("");
          setIsComplete(false);
          queryClient.invalidateQueries(["post/getPost", posting_id]);
          router.push(`/read/${posting_id}`);
        },
      }
    );
  };

  return {
    modifyEditorRef,
    modifyPostData,
    onModifyText,
    onModifyContent,
    onCompleteModifyPost,
    onSubmitModifyPost,
  };
};

export default useModifyPost;
