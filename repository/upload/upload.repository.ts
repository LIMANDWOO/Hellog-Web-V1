import { customAxios } from "../../lib/axios/customAxios";
import { UploadResponse } from "../../types/upload/upload.type";
import { postUploadParam } from "./upload.param";

class UploadRepository {
  public async postUpload({ formData }: postUploadParam): Promise<String> {
    const { data } = await customAxios.post("/upload", formData);
    return data;
  }
}

export default new UploadRepository();
