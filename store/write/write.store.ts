import { atom } from "recoil";
import { v1 } from "uuid";

export const writeImageSrcAtom = atom<string>({
  key: `write/writeImageSrcAtom${v1()}`,
  default: "",
});

export const writeIsCompleteAtom = atom<boolean>({
  key: `write/writeIsComplete${v1()}`,
  default: false,
});
