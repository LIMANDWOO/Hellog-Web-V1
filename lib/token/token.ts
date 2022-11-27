import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import Cookie from "js-cookie";

class Token {
  public getToken(key: string): string | null {
    return Cookie.get(key) || null;
  }

  public setToken(key: string, token: string): void {
    Cookie.set(key, token);
  }

  public removeToken(): void {
    Cookie.remove(ACCESS_TOKEN_KEY);
    Cookie.remove(REFRESH_TOKEN_KEY);
  }
}
export default new Token();
