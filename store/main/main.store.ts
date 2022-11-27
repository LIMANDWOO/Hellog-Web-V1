import { atom } from "recoil";
import { v1 } from "uuid";

export const mainHeaderAtom = atom({
  key: `main/mainHeaderAtom${v1()}`,
  default: "트렌딩",
});
