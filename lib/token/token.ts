import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import jwt, { JwtPayload } from "jsonwebtoken";

class Token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key);
  }

  public decodeToken(key: string): JwtPayload {
    return jwt.decode(this.getToken(key)!) as JwtPayload;
  }

  public setToken(key: string, token: string): void {
    localStorage.setItem(key, token);
  }

  public removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
}
export default new Token();
