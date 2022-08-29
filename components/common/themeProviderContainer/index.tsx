import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/theme/useTheme";
import GlobalStyle from "../../../styles/globalStyle";

const ThemeProviderContainer = ({ Component, pageProps }: any) => {
  const { styledTheme } = useTheme();

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
