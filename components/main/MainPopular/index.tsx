import { PostDetail } from "../../../types/post/post.type";
import PostCard from "../../common/PostCard";
import { MainPopularContainer } from "./style";

const test: PostDetail[] = [
  {
    id: 0,
    title: "타이틀",
    content: "콘텐츠입니다",
    status: "ACTIVE",
    like__count: 0,
    summary: "요약입니다.",
    image:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/315212685_534678891821256_6475399020998992713_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=O-YdeV_NhKEAX_Sm77w&tn=NSqt3I-sjWzMwemr&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk3MTIyMTYzODI5ODQ3MDExMw%3D%3D.2-ccb7-5&oh=00_AfARUWwza-p8vZWHK_WpZVdbXGPio6iCuJTxiSLnkGqbkQ&oe=637BD602&_nc_sid=30a2ef",
    reg__dt: "2022-09-03",
    upd__dt: "2022-09-07",
  },
  {
    id: 1,
    title: "타이틀",
    content: "콘텐츠입니다",
    status: "ACTIVE",
    like__count: 0,
    summary: "요약입니다.",
    image:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/315212685_534678891821256_6475399020998992713_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=O-YdeV_NhKEAX_Sm77w&tn=NSqt3I-sjWzMwemr&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk3MTIyMTYzODI5ODQ3MDExMw%3D%3D.2-ccb7-5&oh=00_AfARUWwza-p8vZWHK_WpZVdbXGPio6iCuJTxiSLnkGqbkQ&oe=637BD602&_nc_sid=30a2ef",
    reg__dt: "2022-09-03",
    upd__dt: "2022-09-07",
  },
  {
    id: 2,
    title: "타이틀",
    content: "콘텐츠입니다",
    status: "ACTIVE",
    like__count: 0,
    summary: "요약입니다.",
    image:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/315212685_534678891821256_6475399020998992713_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=O-YdeV_NhKEAX_Sm77w&tn=NSqt3I-sjWzMwemr&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk3MTIyMTYzODI5ODQ3MDExMw%3D%3D.2-ccb7-5&oh=00_AfARUWwza-p8vZWHK_WpZVdbXGPio6iCuJTxiSLnkGqbkQ&oe=637BD602&_nc_sid=30a2ef",
    reg__dt: "2022-09-03",
    upd__dt: "2022-09-07",
  },
  {
    id: 3,
    title: "타이틀",
    content: "콘텐츠입니다",
    status: "ACTIVE",
    like__count: 0,
    summary: "요약입니다.",
    image:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/315212685_534678891821256_6475399020998992713_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=O-YdeV_NhKEAX_Sm77w&tn=NSqt3I-sjWzMwemr&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk3MTIyMTYzODI5ODQ3MDExMw%3D%3D.2-ccb7-5&oh=00_AfARUWwza-p8vZWHK_WpZVdbXGPio6iCuJTxiSLnkGqbkQ&oe=637BD602&_nc_sid=30a2ef",
    reg__dt: "2022-09-03",
    upd__dt: "2022-09-07",
  },
  {
    id: 4,
    title: "타이틀",
    content: "콘텐츠입니다",
    status: "ACTIVE",
    like__count: 0,
    summary: "요약입니다.",
    image:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/315212685_534678891821256_6475399020998992713_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=O-YdeV_NhKEAX_Sm77w&tn=NSqt3I-sjWzMwemr&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk3MTIyMTYzODI5ODQ3MDExMw%3D%3D.2-ccb7-5&oh=00_AfARUWwza-p8vZWHK_WpZVdbXGPio6iCuJTxiSLnkGqbkQ&oe=637BD602&_nc_sid=30a2ef",
    reg__dt: "2022-09-03",
    upd__dt: "2022-09-07",
  },
  {
    id: 5,
    title: "타이틀",
    content: "콘텐츠입니다",
    status: "ACTIVE",
    like__count: 0,
    summary: "요약입니다.",
    image:
      "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/315212685_534678891821256_6475399020998992713_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=O-YdeV_NhKEAX_Sm77w&tn=NSqt3I-sjWzMwemr&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk3MTIyMTYzODI5ODQ3MDExMw%3D%3D.2-ccb7-5&oh=00_AfARUWwza-p8vZWHK_WpZVdbXGPio6iCuJTxiSLnkGqbkQ&oe=637BD602&_nc_sid=30a2ef",
    reg__dt: "2022-09-03",
    upd__dt: "2022-09-07",
  },
];

const MainPopular = () => {
  return (
    <MainPopularContainer>
      {test.map((item) => (
        <PostCard key={item.id} data={item} />
      ))}
    </MainPopularContainer>
  );
};

export default MainPopular;
