import styled from "styled-components";

import { useTheme } from "@/utils/provider";

import { SITE_THEME } from "@/utils/variables";

const ProjectCardCont = styled.div`
  width: 100%;
  aspect-ratio: 3/2;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectCardTitle = styled.h2`
  color: ${(props) => props.titleColor};
  font-size: 2rem;
  font-weight: 600;
`;

export default function ProjectCard({ ProjectCardTitleText = "" }) {
  const { theme } = useTheme();

  return (
    <ProjectCardCont>
      <ProjectCardTitle titleColor={SITE_THEME[theme].background}>
        {ProjectCardTitleText}
      </ProjectCardTitle>
    </ProjectCardCont>
  );
}
