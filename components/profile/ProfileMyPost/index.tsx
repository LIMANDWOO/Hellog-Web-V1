import { Post } from "../../../types/post/post.type";
import ProfileMyPostItem from "./ProfileMyPostItem";
import { ProfileMyPostContaienr } from "./style";

const TEST: Post[] = [
  {
    id: 1,
    title: "헬로그 입니다.......",
    content: "헬로그 입니다....... zz",
    status: "ACTIVE",
    like__count: 0,
    summary:
      "헬로그 입니다....... 입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.",
    image:
      "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e",
    reg__dt: "2022-09-05",
    upd__dt: "2022-09-07",
  },
  {
    id: 2,
    title: "헬로그 입니다.......",
    content: "헬로그 입니다....... zz",
    status: "ACTIVE",
    like__count: 0,
    summary: "헬로그 입니다....... 입니다.",
    image:
      "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e",
    reg__dt: "2022-09-05",
    upd__dt: "2022-09-07",
  },
  {
    id: 3,
    title: "헬로그 입니다.......",
    content: "헬로그 입니다....... zz",
    status: "ACTIVE",
    like__count: 0,
    summary: "헬로그 입니다....... 입니다.",
    image:
      "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e",
    reg__dt: "2022-09-05",
    upd__dt: "2022-09-07",
  },
  {
    id: 4,
    title: "헬로그 입니다.......",
    content: "헬로그 입니다....... zz",
    status: "ACTIVE",
    like__count: 0,
    summary: "헬로그 입니다....... 입니다.",
    image:
      "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e",
    reg__dt: "2022-9-15 12:00",
    upd__dt: "2022-10-21",
  },
  {
    id: 5,
    title: "헬로그 입니다.......",
    content: "헬로그 입니다....... zz",
    status: "ACTIVE",
    like__count: 0,
    summary: "헬로그 입니다....... 입니다.",
    image:
      "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e",
    reg__dt: "2022-09-05 ",
    upd__dt: "2022-09-07",
  },
];

const ProfileMyPost = () => {
  return (
    <ProfileMyPostContaienr>
      {TEST.map((item) => (
        <ProfileMyPostItem data={item} key={item.id} />
      ))}
    </ProfileMyPostContaienr>
  );
};

export default ProfileMyPost;
