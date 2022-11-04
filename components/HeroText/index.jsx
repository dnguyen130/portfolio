import styled from "styled-components";
import { SiJavascript, SiReact, SiNextdotjs } from "react-icons/si";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
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
  text-align: center;
  align-items: center;
  overflow: hidden;

  @media (min-width: ${DEVICES.laptop}) {
    text-align: left;
    align-items: flex-start;
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
  width: 60%;
  min-width: 150px;
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ArrowCont = styled.div`
  width: 50px;
  height: 50px;
  align-self: center;
  position: absolute;
  bottom: 40px;
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
      <ArrowCont>
        <HiOutlineChevronDoubleDown size="100%" color="white" />
      </ArrowCont>
    </HeroTextCont>
  );
}
