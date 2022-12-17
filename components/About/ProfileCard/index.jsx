import styled from "styled-components";

import { DEVICES, SITE_THEME } from "@/utils/variables";
import { useTheme } from "@/utils/provider";

import Underline from "@/components/Shared/Underline";

const ProfileCardCont = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ProfileHero = styled.div`
  width: 100%;
  min-height: calc(50vh - 100px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  position: relative;
`;

const HeroWrapper = styled.div`
  background-size: cover;
  background-position: 55% center;
  background-image: url("/test.JPEG");
  z-index: -2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  border: 5px solid ${(props) => props.bordercolor};
  border-left: 0px;
  border-right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ProfileTitle = styled.h2`
  margin: 0;
  color: ${(props) => props.color};
  font-size: 3.5rem;
  z-index: 1;

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 4rem;
  }
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

const Titles = [
  {
    src: "/test.JPEG",
    name: "CODER",
  },
];

export default function ProfileCard() {
  const { theme } = useTheme();

  return (
    <ProfileCardCont>
      <ProfileHero bordercolor={SITE_THEME[theme].strong}>
        <ProfileTitle color={SITE_THEME[theme].strong}>About Me</ProfileTitle>
      </ProfileHero>
      <HeroWrapper bordercolor={SITE_THEME[theme].strong} />
      <GradientTransparency gradientbg={SITE_THEME[theme].background} />
    </ProfileCardCont>
  );
}
