import PostCard from "../../common/PostCard";
import { MainPopularContainer } from "./style";

const MainPopular = () => {
  const arr = Array.from({ length: 10 });

  return (
    <MainPopularContainer>
      {arr.map((item, i) => (
        <PostCard key={i} />
      ))}
    </MainPopularContainer>
  );
};

export default MainPopular;
