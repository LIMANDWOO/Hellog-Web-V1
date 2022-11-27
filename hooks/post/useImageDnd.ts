import { ChangeEvent, DragEvent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { usePostUpload } from "../../quries/upload/upload.query";
import { writeImageSrcAtom } from "../../store/write/write.store";

const useImageDnd = () => {
  const [, setImage] = useRecoilState(writeImageSrcAtom);
  const [isDrag, setIsDrag] = useState(false);

  const postUploadMutation = usePostUpload();

  const onChangeImage = useCallback(
    async (e: ChangeEvent<HTMLInputElement> | any) => {
      let image: File;
      if (e.type === "drop") {
        image = e.dataTransfer.files[0];
      } else {
        image = e.target.files[0];
      }
      const formData = new FormData();

      formData.append("file", image);

      postUploadMutation.mutateAsync(
        { formData },
        {
          onSuccess: (res) => {
            window.alert("이미지 업로드 성공");
            setImage(res as string);
          },
          onError: () => {
            window.alert("이미지 업로드 실패");
          },
        }
      );
    },
    [setImage]
  );

  const dropHandler = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDrag(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onChangeImage(e);
        e.dataTransfer.clearData();
      }
    },
    [onChangeImage]
  );

  const dragHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      setIsDrag(true);
    }
  }, []);

  const dragInHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const dragOutHandler = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDrag(false);
  }, []);

  return {
    dropHandler,
    dragHandler,
    dragInHandler,
    dragOutHandler,
    isDrag,
    onChangeImage,
    isUploading: postUploadMutation.isLoading,
  };
};

export default useImageDnd;
