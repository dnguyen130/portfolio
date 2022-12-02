import styled from "styled-components";

import { DEVICES, SITE_THEME } from "@/utils/variables";
import { useTheme } from "@/utils/provider";

const ProfileCardCont = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ProfileHero = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-image: url("/test.JPEG");
`;

const GradientTransparency = styled.div`
  position: absolute;
  background: linear-gradient(
    to right,
    ${(props) => props.gradientbg},
    70%,
    rgba(0, 0, 0, 0)
  );
  width: 100%;
  height: 100%;
`;

export default function ProfileCard() {
  const { theme } = useTheme();

  return (
    <ProfileCardCont>
      <ProfileHero />
      <GradientTransparency gradientbg={SITE_THEME[theme].background} />
    </ProfileCardCont>
  );
}
