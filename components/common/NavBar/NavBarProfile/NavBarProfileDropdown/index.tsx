import { useRouter } from "next/router";
import token from "../../../../../lib/token/token";
import { MemberRole } from "../../../../../types/member/member.type";
import {
  NavBarProfileDropdownContainer,
  NavBarProfileDropdownItemContainer,
} from "./style";

interface Props {
  memberId: number;
  role: MemberRole;
}

const NavBarProfileDropdown = ({ memberId, role }: Props) => {
  const router = useRouter();

  const logout = () => {
    token.removeToken();
    router.push("/auth");
  };

  return (
    <NavBarProfileDropdownContainer>
      <NavBarProfileDropdownItemContainer
        onClick={() => router.push(`/profile/${memberId}`)}
      >
        내 프로필
      </NavBarProfileDropdownItemContainer>
      {role === "ADMIN" && (
        <NavBarProfileDropdownItemContainer
          onClick={() => router.push(`/setting/${memberId}`)}
        >
          공지사항 작성
        </NavBarProfileDropdownItemContainer>
      )}
      <NavBarProfileDropdownItemContainer
        onClick={() => router.push(`/setting/${memberId}`)}
      >
        설정
      </NavBarProfileDropdownItemContainer>
      <NavBarProfileDropdownItemContainer onClick={logout}>
        로그아웃
      </NavBarProfileDropdownItemContainer>
    </NavBarProfileDropdownContainer>
  );
};

export default NavBarProfileDropdown;
