import { THEME_KEY } from "../../constants/theme/theme.constant";
import { ETheme } from "../../enum/theme/theme.enum";

export const getTheme = (): ETheme => {
  let themeMode = null;

  if (typeof window !== "undefined") {
    themeMode = localStorage.getItem(THEME_KEY);
  }

  if (typeof window !== "undefined" && themeMode === null) {
    const isDarkTheme: boolean = window.matchMedia(
      `(prefers-color-scheme: dark)`
    ).matches;

    if (isDarkTheme) {
      return ETheme.DARK;
    }
    return ETheme.LIGHT;
  }

  const theme: ETheme = themeMode as ETheme;

  if (theme === ETheme.DARK) {
    return ETheme.DARK;
  }

  return ETheme.LIGHT;
};
