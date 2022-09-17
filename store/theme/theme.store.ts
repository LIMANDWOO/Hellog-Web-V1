import { atom } from "recoil";
import { ETheme } from "../../enum/theme/theme.enum";
import { getTheme } from "../../util/theme/getTheme";
import { v1 } from "uuid";

export const themeMode = atom<ETheme>({
  key: `theme/themeMode${v1()}`,
  default: getTheme(),
});
