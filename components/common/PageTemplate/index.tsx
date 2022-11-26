import { useRouter } from "next/router";
import { ReactNode } from "react";
import NavBar from "../NavBar";
import { PageTemplateContainer, PageTemplateWrap } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  const { asPath } = useRouter();

  return (
    <PageTemplateContainer>
      {!(
        asPath === "/write" ||
        asPath === "/auth" ||
        asPath === "/authloading"
      ) && <NavBar />}
      <PageTemplateWrap>{children}</PageTemplateWrap>
    </PageTemplateContainer>
  );
};

export default PageTemplate;
