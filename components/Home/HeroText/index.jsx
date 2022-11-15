import { useState } from "react";
import styled from "styled-components";
import { SiJavascript, SiReact, SiNextdotjs } from "react-icons/si";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { IconContext } from "react-icons/lib";
import { motion } from "framer-motion";

import { useTheme } from "../../../utils/provider";
import { SITE_THEME, DEVICES } from "../../../utils/variables";
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
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: color 0.25s;
  &:hover {
    color: ${(props) => props.iconHoverColor};
    background-color: ${(props) => props.iconBgColor};
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

const ArrowCont = styled(motion.div)`
  width: 50px;
  height: 50px;
  align-self: center;
  position: absolute;
  bottom: 40px;
`;

const ArrowWrapper = styled.a`
  width: 100%;
  height: 100%;
  color: ${(props) => props.arrowColor};
  transition: color 0.25s;

  &:hover {
    color: ${(props) => props.arrowHoverColor};
  }
`;

const ICONS = [
  {
    key: "javascript",
    element: SiJavascript,
    class: "iconJavascript",
    hoverColor: "#f8dc2c",
  },
  {
    key: "react",
    element: SiReact,
    class: "iconReact",
    hoverColor: "#06d7fe",
  },
  {
    key: "nextdotjs",
    element: SiNextdotjs,
    class: "iconNextdotjs",
    hoverColor: "black",
    iconBgColor: "white",
  },
];

const ArrowVariants = {
  initial: {
    y: 0,
  },
  active: {
    y: [-10, 10],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
    },
  },
};

export default function HeroText({ arrowHref = "#" }) {
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
              value={{ className: styles.heroIcon }}
            >
              <IconWrapper
                iconColor={SITE_THEME[theme].text}
                iconHoverColor={icon.hoverColor}
                iconBgColor={icon.iconBgColor}
              >
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
      <ArrowCont initial="initial" animate="active" variants={ArrowVariants}>
        <ArrowWrapper
          href={arrowHref}
          arrowColor={SITE_THEME[theme].text}
          arrowHoverColor={SITE_THEME[theme].strong}
        >
          <HiOutlineChevronDoubleDown size="100%" />
        </ArrowWrapper>
      </ArrowCont>
    </HeroTextCont>
  );
}
