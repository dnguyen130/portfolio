import styled from "styled-components";

import { DEVICES, SITE_THEME } from "@/utils/variables";
import { useTheme } from "@/utils/provider";

const ProfileCardCont = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ProfileHero = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  position: relative;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc((100vh - 100px) / 2);

  &:first-child {
    margin-bottom: 30px;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
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
  min-height: 50%;
  max-height: 50%;
  border: 5px solid ${(props) => props.bordercolor};
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

const ProfileDescription = styled.p`
  margin: 0;
  color: ${(props) => props.color};
  font-size: 0.9em;
  line-height: 1.3em;

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 1em;
  }

  @media (min-width: ${DEVICES.laptop}) {
    font-size: 1.2em;
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

const Underline = styled.div`
  width: 100%;
  height: 5px;
  background: linear-gradient(
    270deg,
    ${(props) => props.gradient1},
    70%,
    transparent
  );
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
        <Row>
          <ProfileTitle color={SITE_THEME[theme].text}>I am a</ProfileTitle>
          <ProfileTitle color={SITE_THEME[theme].strong}>
            Developer
          </ProfileTitle>
        </Row>
        <Row>
          <ProfileDescription color={SITE_THEME[theme].text}>
            Hey there! <br />
            <br />
            My first experience with the web was back in 2003 when I created my
            first email account to play Neopets, a virtual pet website. Since
            then, my whole life, like many others, has revolved around using the
            web to communicate and learn from others. <br />
            <br />
            At the British Columbia Institute of Technology, I was able to
            experience a fast-paced, cooperative school environment. I developed
            technical and social skills working in teams of designers and
            developers to produce web and mobile applications through their
            Digital Design and Development Program.
          </ProfileDescription>
        </Row>
      </ProfileHero>
      <HeroWrapper bordercolor={SITE_THEME[theme].strong} />
      <GradientTransparency gradientbg={SITE_THEME[theme].background} />
    </ProfileCardCont>
  );
}
