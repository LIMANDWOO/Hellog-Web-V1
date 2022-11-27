import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { ACCESS_TOKEN_KEY } from "../../../../constants/token/token.constant";
import useOutsideClick from "../../../../hooks/common/useOutsideClick";
import token from "../../../../lib/token/token";
import { useGetMyMember } from "../../../../quries/member/member.query";
import DarkmodeButton from "../../DarkmodeButton";
import PostingButton from "../../WritingButton";
import NavBarProfileDropdown from "./NavBarProfileDropdown";
import {
  NavBarProfileContainer,
  NavBarProfileImg,
  NavBarProfileImgWrap,
} from "./style";

const NavBarProfile = () => {
  const router = useRouter();

  const profileImgRef = useRef<HTMLDivElement>(null);
  const [fold, setFold] = useState(true);
  const { data: serverMyMemberData, isError: serverMyMemberDataIsError } =
    useGetMyMember();

  useOutsideClick({ setState: setFold, ref: profileImgRef });

  return (
    <NavBarProfileContainer>
      <PostingButton />
      <DarkmodeButton />
      {token.getToken(ACCESS_TOKEN_KEY) === undefined ? (
        <button onClick={() => router.push("/auth")}>로그인</button>
      ) : (
        <>
          {serverMyMemberData && (
            <NavBarProfileImgWrap
              onClick={() => setFold((prev) => !prev)}
              ref={profileImgRef}
            >
              <NavBarProfileImg src={serverMyMemberData?.user?.profileImage} />
              {!fold && (
                <NavBarProfileDropdown
                  role={serverMyMemberData?.user.role!}
                  memberId={serverMyMemberData?.id!}
                />
              )}
            </NavBarProfileImgWrap>
          )}
        </>
      )}
    </NavBarProfileContainer>
  );
};

export default NavBarProfile;
