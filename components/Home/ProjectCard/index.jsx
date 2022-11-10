import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

import { Dialog } from "../../Shared/Dialog";

import { useTheme, useActiveCard, useActiveProject } from "@/utils/provider";
import { SITE_THEME } from "@/utils/variables";

const ProjectCardCont = styled(motion.div)`
  width: 100%;
  aspect-ratio: 3/2;
  background: ${(props) => props.bgcolor};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const ProjectCardWrapper = styled(motion.div)`
  background: linear-gradient(
    to left,
    ${(props) => props.hovercolor1},
    ${(props) => props.hovercolor2}
  );
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
`;

const ProjectCardLogo = styled.img`
  width: 60%;
  position: absolute;
  pointer-events: none;
  user-select: none;
`;

const hiddenMask = `linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 0, rgba(0,0,0,0) 100%)`;
const visibleMask = `linear-gradient(to left, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)`;

export default function ProjectCard({
  ProjectCardLogoSrc,
  ProjectCardOnClick = () => {},
  ProjectCardLightColor,
  ProjectCardDarkColor,
}) {
  const { theme } = useTheme();
  const { activeCard, setActiveCard } = useActiveCard();
  const { activeProject, setActiveProject } = useActiveProject();

  const CardClick = () => {
    setActiveCard(true);
    setIsHover(false);
  };

  const WrapperVariants = {
    hover: {
      WebkitMaskImage: visibleMask,
      maskImage: visibleMask,
      transition: { duration: 0.2 },
    },
    notHover: {
      WebkitMaskImage: hiddenMask,
      maskImage: hiddenMask,
      transition: { duration: 0.2 },
    },
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <ProjectCardCont
      bgcolor={SITE_THEME[theme].text}
      onClick={ProjectCardOnClick}
      whileTap={{ scale: 0.95 }}
    >
      <ProjectCardWrapper
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        animate={isHover ? "hover" : "notHover"}
        variants={WrapperVariants}
        hovercolor1={ProjectCardDarkColor}
        hovercolor2={SITE_THEME[theme].text}
      />
      <ProjectCardLogo src={ProjectCardLogoSrc} />
    </ProjectCardCont>
  );
}
