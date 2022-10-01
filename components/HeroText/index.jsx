import styled from "styled-components";
import { SiJavascript, SiReact, SiNextdotjs } from "react-icons/si";
import { IconContext } from "react-icons/lib";

import { useTheme } from "../../utils/provider";
import { SITE_THEME, DEVICES } from "../../utils/variables";
import styles from "./herotext.module.css";

const HeroTextCont = styled.div`
  width: 100%;
  font-size: 3vw;
  height: calc(100vh - 100px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${DEVICES.mobile}) {
    min-height: 720px;
  }
`;

const FirstLine = styled.h2`
  font-size: clamp(30px, 2em, 70px);
  font-weight: 400;
  margin: 0;
  color: ${(props) => props.firstColor};
`;

const SecondLine = styled.h1`
  font-size: clamp(40px, 3em, 100px);
  margin: 10px 0;
  color: ${(props) => props.secondColor};
`;

const IconCont = styled.div`
  width: 40%;
  min-width: 175px;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const IconWrapper = styled.div`
  color: ${(props) => props.iconColor};
  transition: color 0.25s;
  &:hover {
    color: ${(props) => props.iconHoverColor};
  }
`;

const Description = styled.p`
  font-size: clamp(14px, 1.5em, 24px);
  margin: 0 0 20px 0;
  color: ${(props) => props.descriptionColor};
`;

const LogoCont = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
  margin-bottom: 20px;

  @media (min-width: ${DEVICES.mobile}) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: ${DEVICES.mobile}) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: ${DEVICES.desktop}) {
    position: absolute;
    right: 20px;
    top: 120px;
    width: 400px;
    height: 400px;
    opacity: 0.3;
  }
`;

const ICONS = [
  {
    key: "javascript",
    element: SiJavascript,
    class: "iconJavascript",
  },
  {
    key: "react",
    element: SiReact,
    class: "iconReact",
  },
  {
    key: "nextdotjs",
    element: SiNextdotjs,
    class: "iconNextdotjs",
  },
];

export default function HeroText() {
  const { theme } = useTheme();

  return (
    <HeroTextCont>
      <LogoCont src="/logo.svg" alt="Logo" />
      <FirstLine firstColor={SITE_THEME[theme].text}>Ahoy, I am</FirstLine>
      <SecondLine secondColor={SITE_THEME[theme].strong}>
        Danny Nguyen
      </SecondLine>
      <IconCont>
        {ICONS.map((icon) => {
          return (
            <IconContext.Provider
              key={icon.key}
              value={{ className: styles[icon.class] }}
            >
              <IconWrapper iconColor={SITE_THEME[theme].text}>
                <icon.element />
              </IconWrapper>
            </IconContext.Provider>
          );
        })}
      </IconCont>
      <Description descriptionColor={SITE_THEME[theme].text}>
        A front-end developer with a passion for bringing great designs and
        ideas to life.
      </Description>
      <Description descriptionColor={SITE_THEME[theme].text}>
        Currently working on personal projects while looking for job
        opportunities.
      </Description>
    </HeroTextCont>
  );
}
