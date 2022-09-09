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

  return (
    <NavBarProfileDropdownContainer onClick={() => router.push("/profile/1")}>
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
