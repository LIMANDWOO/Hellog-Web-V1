import { AuthOAuthButtonContainer, AuthOAuthButtonIcon } from "./style";

interface Props {
  backgroundColor: string;
  oAuthPlatform: string;
  oAuthPlatformIconSrc: string;
  fontColor: string;
  onClick: () => void;
}

const AuthOauthButton = ({
  backgroundColor,
  oAuthPlatform,
  oAuthPlatformIconSrc,
  fontColor,
  onClick,
}: Props) => {
  return (
    <AuthOAuthButtonContainer
      fontColor={fontColor}
      backgroundColor={backgroundColor}
    >
      <AuthOAuthButtonIcon src={oAuthPlatformIconSrc} />
      {oAuthPlatform} 계정으로 로그인
    </AuthOAuthButtonContainer>
  );
};

export default AuthOauthButton;
