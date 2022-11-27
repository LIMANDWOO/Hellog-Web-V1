import { useRecoilState } from "recoil";
import { MAIN_HEADER_ITEMS } from "../../constants/main/main.constant";
import { mainHeaderAtom } from "../../store/main/main.store";
import MainNotice from "./MainNotice";
import MainPopular from "./MainPopular";
import { MainContainer, MainHeaderItem, MainHeaderWrap } from "./style";

const Main = () => {
  const [tab, setTab] = useRecoilState(mainHeaderAtom);

  return (
    <MainContainer>
      <MainHeaderWrap>
        {MAIN_HEADER_ITEMS.map((item) => (
          <MainHeaderItem
            isSelect={item.title === tab}
            key={item.title}
            onClick={() => setTab(item.title)}
          >
            {item.title}
          </MainHeaderItem>
        ))}
      </MainHeaderWrap>
      {tab === "트렌딩" && <MainPopular />}
      {tab === "공지사항" && <MainNotice />}
    </MainContainer>
  );
};

export default Main;
