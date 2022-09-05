import type { NextPage } from "next";
import Main from "../components/main";
import useMain from "../hooks/main/useMain";

const MainPage: NextPage = () => {
  useMain();

  return <Main />;
};

export default MainPage;
