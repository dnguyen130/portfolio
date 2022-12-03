import styled from "styled-components";

import { DEVICES, SITE_THEME } from "@/utils/variables";
import { useTheme } from "@/utils/provider";

const ProfileCardCont = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ProfileHero = styled.div`
  width: 100%;
  height: 100%;
  border-right: 5px solid ${(props) => props.bordercolor};
`;

const HeroWrapper = styled.div`
  background-size: cover;
  background-position: center center;
  background-image: url("/test.JPEG");
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ProfileTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.color};
  font-size: 100px;
  z-index: 2;
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
  z-index: -1;
`;

export default function ProfileCard() {
  const { theme } = useTheme();

  return (
    <ProfileCardCont>
      <ProfileHero bordercolor={SITE_THEME[theme].strong}>
        <ProfileTitle color={SITE_THEME[theme].text}>Hello</ProfileTitle>
      </ProfileHero>
      <HeroWrapper />
      <GradientTransparency gradientbg={SITE_THEME[theme].background} />
    </ProfileCardCont>
  );
}
