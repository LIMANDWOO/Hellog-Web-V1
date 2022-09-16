import { NextPage } from "next";
import dynamic from "next/dynamic";
const Write = dynamic(() => import("../../components/write"), { ssr: false });

const WritePage: NextPage = () => {
  return <Write />;
};

export default WritePage;
