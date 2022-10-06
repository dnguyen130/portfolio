import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "@/utils/provider";

import { SITE_THEME } from "@/utils/variables";

const ProjectCardCont = styled.div`
  width: 100%;
  aspect-ratio: 3/2;
  background: ${(props) => props.bgcolor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ProjectCardLogo = styled.img`
  width: 60%;
`;

export default function ProjectCard({
  ProjectCardLogoSrc = "",
  ProjectCardOnClick = () => {},
}) {
  const { theme } = useTheme();

  return (
    <ProjectCardCont
      bgcolor={SITE_THEME[theme].text}
      onClick={ProjectCardOnClick}
    >
      <ProjectCardLogo src={ProjectCardLogoSrc} />
    </ProjectCardCont>
  );
}
