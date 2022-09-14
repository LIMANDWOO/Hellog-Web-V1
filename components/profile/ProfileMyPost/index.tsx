import { Post } from "../../../types/post/post.type";
import ProfileMyPostItem from "./ProfileMyPostItem";
import { ProfileMyPostContaienr } from "./style";

const TEST: Post[] = [
  {
    id: 1,
    title: "hellog",
    content: "hellog zz",
    status: "ACTIVE",
    like__count: 0,
    summary: "hellog 입니다.",
    image:
      "https://velog.velcdn.com/images/ldh3907/post/b49958ad-b47d-474c-81e8-ae563dd80ca4/image.png",
    reg__dt: "2022-10-10",
    upd__dt: "2022-10-21",
  },
  {
    id: 2,
    title: "hellog",
    content: "hellog zz",
    status: "ACTIVE",
    like__count: 0,
    summary: "hellog 입니다.",
    image:
      "https://velog.velcdn.com/images/ldh3907/post/b49958ad-b47d-474c-81e8-ae563dd80ca4/image.png",
    reg__dt: "2022-10-10",
    upd__dt: "2022-10-21",
  },
  {
    id: 3,
    title: "hellog",
    content: "hellog zz",
    status: "ACTIVE",
    like__count: 0,
    summary: "hellog 입니다.",
    image:
      "https://velog.velcdn.com/images/ldh3907/post/b49958ad-b47d-474c-81e8-ae563dd80ca4/image.png",
    reg__dt: "2022-10-10",
    upd__dt: "2022-10-21",
  },
  {
    id: 4,
    title: "hellog",
    content: "hellog zz",
    status: "ACTIVE",
    like__count: 0,
    summary: "hellog 입니다.",
    image:
      "https://velog.velcdn.com/images/ldh3907/post/b49958ad-b47d-474c-81e8-ae563dd80ca4/image.png",
    reg__dt: "2022-10-10",
    upd__dt: "2022-10-21",
  },
  {
    id: 5,
    title: "hellog",
    content: "hellog zz",
    status: "ACTIVE",
    like__count: 0,
    summary: "hellog 입니다.",
    image:
      "https://velog.velcdn.com/images/ldh3907/post/b49958ad-b47d-474c-81e8-ae563dd80ca4/image.png",
    reg__dt: "2022-10-10",
    upd__dt: "2022-10-21",
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
