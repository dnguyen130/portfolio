import styled from "styled-components";

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
  transition: 0.2s;

  &:hover {
    transform: scale(1.03);
  }
`;

const ProjectCardLogo = styled.img`
  width: 60%;
`;

export default function ProjectCard({ ProjectCardLogoSrc = "" }) {
  const { theme } = useTheme();

  return (
    <ProjectCardCont bgcolor={SITE_THEME[theme].text}>
      <ProjectCardLogo src={ProjectCardLogoSrc} />
    </ProjectCardCont>
  );
}
