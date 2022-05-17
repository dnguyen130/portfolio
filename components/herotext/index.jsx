import styled from "styled-components";
import { SiJavascript, SiReact, SiNextdotjs, SiJava } from "react-icons/si";
import { IconContext } from "react-icons/lib";

import { useTheme } from "../../utils/provider";
import { SITE_THEME, DEVICES } from "../../utils/variables";
import styles from "./herotext.module.css";

const HeroTextCont = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const FirstLine = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  color: ${(props) => props.firstColor};

  @media (min-width: ${DEVICES.mobileS}) {
    font-size: 2rem;
  }

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 3rem;
  }
`;

const SecondLine = styled.h1`
  font-size: 2.25rem;
  margin: 10px 0;
  color: ${(props) => props.secondColor};

  @media (min-width: ${DEVICES.mobileS}) {
    font-size: 2.5rem;
  }

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 4rem;
  }
`;

const IconCont = styled.div`
  width: 60%;
  max-width: 250px;
  min-width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  @media (min-width: ${DEVICES.tablet}) {
    max-width: 350px;
  }
`;

const IconWrapper = styled.div`
  color: ${(props) => props.iconColor};
  transition: color 0.25s;
  &:hover {
    color: ${(props) => props.iconHoverColor};
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${(props) => props.descriptionColor};

  @media (min-width: ${DEVICES.mobileS}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 2rem;
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
      <FirstLine firstColor={SITE_THEME[theme].text}>Ahoy I am</FirstLine>
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
    </HeroTextCont>
  );
}
