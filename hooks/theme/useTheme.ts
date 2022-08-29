import { useRecoilState } from "recoil";
import { THEME_KEY } from "../../constants/theme/theme.constant";
import { ETheme } from "../../enum/theme/theme.enum";
import { themeMode } from "../../store/theme/theme.store";
import { darkTheme, lightTheme } from "../../styles/theme";

const useTheme = () => {
  const [theme, setTheme] = useRecoilState<ETheme>(themeMode);

  const { LIGHT, DARK } = ETheme;

  const toggleTheme = () => {
    const switchTheme = theme === LIGHT ? DARK : LIGHT;
    localStorage.setItem(THEME_KEY, switchTheme);
    setTheme(switchTheme);
  };

  const styledTheme = () => (theme === LIGHT ? lightTheme : darkTheme);

  const enumTheme = () => (theme === LIGHT ? LIGHT : DARK);

  return {
    toggleTheme,
    styledTheme,
    enumTheme,
  };
};

export default useTheme;
