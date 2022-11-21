import { Post, PostDetail } from "../../../types/post/post.type";
import ProfileMyPostItem from "./ProfileMyPostItem";
import { ProfileMyPostContaienr } from "./style";

const TEST: PostDetail[] = [
  {
    id: 1,
    title: "헬로그 입니다.......",
    content: "헬로그 입니다....... zz",
    status: "ACTIVE",
    likeCount: 5,
    summary:
      "헬로그 입니다....... 입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.입니다.",
    thumbnail:
      "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e",
    modifiedDate: "2022-09-07",
    category: [],
    createdDate: "",
  },
  {
    id: 2,
    title: "헬로그 입니다.......",
    content: "헬로그 입니다....... zz",
    status: "ACTIVE",
    likeCount: 5,
    summary: "헬로그 입니다....... 입니다.",
    thumbnail:
      "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e",
    modifiedDate: "2022-09-07",
    category: [],
    createdDate: "",
  },
  {
    id: 3,
    title: "헬로그 입니다.......",
    content: "헬로그 입니다....... zz",
    status: "ACTIVE",
    likeCount: 5,
    summary: "헬로그 입니다....... 입니다.",
    thumbnail:
      "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e",
    modifiedDate: "2022-09-07",
    category: [],
    createdDate: "",
  },
  {
    id: 4,
    title: "헬로그 입니다.......",
    content: "헬로그 입니다....... zz",
    status: "ACTIVE",
    likeCount: 5,
    summary: "헬로그 입니다....... 입니다.",
    thumbnail:
      "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e",
    modifiedDate: "2022-10-21",
    category: [],
    createdDate: "",
  },
  {
    id: 5,
    title: "헬로그 입니다.......",
    content: "헬로그 입니다....... zz",
    status: "ACTIVE",
    likeCount: 5,
    summary: "헬로그 입니다....... 입니다.",
    thumbnail:
      "https://tistory2.daumcdn.net/tistory/5382242/attach/a7f3ba8beb0f4d969da1a359f451377e",
    modifiedDate: "2022-09-07",
    category: [],
    createdDate: "",
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
