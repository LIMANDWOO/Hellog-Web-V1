import AuthOauthButton from "./AuthOauthButton";
import {
  AuthContainer,
  AuthContentWrap,
  AuthDescription,
  AuthHellogIcon,
  AuthOAuthButtonWrap,
  AuthPointImg,
  AuthWrap,
} from "./style";
import DodamDodamLogo from "../../assets/icon/DodamDodamLogo.png";
import HellogLogo from "../../assets/icon/HellogLogo.png";
import HellogPoint from "../../assets/icon/HellogPointIcon.svg";

const Auth = () => {
  return (
    <AuthContainer>
      <AuthWrap>
        <AuthContentWrap>
          <AuthHellogIcon src={HellogLogo.src} />
          <AuthDescription>
            개발의 시작을 기록하다
            <br />
            교내 기술 블로그
          </AuthDescription>
        </AuthContentWrap>
        <AuthPointImg src={HellogPoint.src} />
        <AuthOAuthButtonWrap>
          <AuthOauthButton
            backgroundColor="#ffffff"
            oAuthPlatformIconSrc="data:image/png;base64,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"
            oAuthPlatform="구글"
            onClick={() => {}}
            fontColor="#000000"
          />
          <AuthOauthButton
            backgroundColor="#0067bc"
            oAuthPlatformIconSrc={DodamDodamLogo.src}
            oAuthPlatform="도담도담"
            onClick={() => {}}
            fontColor="#ffffff"
          />
        </AuthOAuthButtonWrap>
      </AuthWrap>
    </AuthContainer>
  );
};

export default Auth;
