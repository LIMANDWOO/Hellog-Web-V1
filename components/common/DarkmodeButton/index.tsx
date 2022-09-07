import { DarkmodeButtonContainer, DarkmodeButtonIcon } from "./style";
import { HiSun } from "@react-icons/all-files/hi/HiSun";
import { HiMoon } from "@react-icons/all-files/hi/HiMoon";
import useTheme from "../../../hooks/theme/useTheme";
import { ETheme } from "../../../enum/theme/theme.enum";

const DarkmodeButton = () => {
  const { enumTheme, toggleTheme } = useTheme();

  const { LIGHT, DARK } = ETheme;

  return (
    <DarkmodeButtonContainer onClick={toggleTheme}>
      <DarkmodeButtonIcon>
        {enumTheme === LIGHT ? <HiSun /> : <HiMoon />}
      </DarkmodeButtonIcon>
    </DarkmodeButtonContainer>
  );
};

export default DarkmodeButton;
