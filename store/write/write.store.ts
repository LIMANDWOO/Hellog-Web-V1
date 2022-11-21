import { atom } from "recoil";
import { v1 } from "uuid";

export const writeImageSrcAtom = atom<string>({
  key: `write/writeImageSrcAtom${v1()}`,
  default: "",
});
