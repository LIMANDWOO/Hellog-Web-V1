import { useRouter } from "next/router";
import token from "../../../../../lib/token/token";
import {
  NavBarProfileDropdownContainer,
  NavBarProfileDropdownItemContainer,
} from "./style";

const NavBarProfileDropdown = () => {
  const router = useRouter();

  const logout = () => {
    token.removeToken();
    router.push("/auth");
  };

  const memberId = 1;

  return (
    <NavBarProfileDropdownContainer
      onClick={() => router.push(`/profile/${memberId}?tag=전체조회`)}
    >
      <NavBarProfileDropdownItemContainer>
        내 프로필
      </NavBarProfileDropdownItemContainer>
      <NavBarProfileDropdownItemContainer>
        설정
      </NavBarProfileDropdownItemContainer>
      <NavBarProfileDropdownItemContainer onClick={logout}>
        로그아웃
      </NavBarProfileDropdownItemContainer>
    </NavBarProfileDropdownContainer>
  );
};

export default NavBarProfileDropdown;
