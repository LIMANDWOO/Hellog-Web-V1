import { Post } from "../../../types/post/post.type";
import PostCard from "../../common/PostCard";
import { MainPopularContainer } from "./style";

const test: Post[] = [
  {
    id: 0,
    title: "타이틀",
    content: "콘텐츠입니다",
    status: "ACTIVE",
    like__count: 0,
    summary: "요약입니다.",
    image:
      "https://scontent.cdninstagram.com/v/t1.15752-9/287337305_776060853636889_5905437485088614134_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5a057b&_nc_ohc=k4-uJkBUVOUAX_notXH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVJQpk5HAIAHgne9GQNwF5mblYARraZAZLHaH6DyAKbe1w&oe=633975A5",
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
      "https://scontent.cdninstagram.com/v/t1.15752-9/287337305_776060853636889_5905437485088614134_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5a057b&_nc_ohc=k4-uJkBUVOUAX_notXH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVJQpk5HAIAHgne9GQNwF5mblYARraZAZLHaH6DyAKbe1w&oe=633975A5",
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
      "https://scontent.cdninstagram.com/v/t1.15752-9/287337305_776060853636889_5905437485088614134_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5a057b&_nc_ohc=k4-uJkBUVOUAX_notXH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVJQpk5HAIAHgne9GQNwF5mblYARraZAZLHaH6DyAKbe1w&oe=633975A5",
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
      "https://scontent.cdninstagram.com/v/t1.15752-9/287337305_776060853636889_5905437485088614134_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5a057b&_nc_ohc=k4-uJkBUVOUAX_notXH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVJQpk5HAIAHgne9GQNwF5mblYARraZAZLHaH6DyAKbe1w&oe=633975A5",
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
      "https://scontent.cdninstagram.com/v/t1.15752-9/287337305_776060853636889_5905437485088614134_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5a057b&_nc_ohc=k4-uJkBUVOUAX_notXH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVJQpk5HAIAHgne9GQNwF5mblYARraZAZLHaH6DyAKbe1w&oe=633975A5",
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
      "https://scontent.cdninstagram.com/v/t1.15752-9/287337305_776060853636889_5905437485088614134_n.jpg?stp=dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=5a057b&_nc_ohc=k4-uJkBUVOUAX_notXH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=03_AVJQpk5HAIAHgne9GQNwF5mblYARraZAZLHaH6DyAKbe1w&oe=633975A5",
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
