import styled from "styled-components";

import { useTheme } from "../../utils/provider";
import { SITE_THEME, DEVICES } from "../../utils/variables";

const ProjectsCont = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 1.3rem;
  color: ${(props) => props.titleColor};
  align-self: flex-start;

  @media (min-width: ${DEVICES.mobileS}) {
    font-size: 2rem;
  }
`;

const ProjectCard = styled.div`
  width: 100%;
  aspect-ratio: 16/10;
  background-color: white;
  border-radius: 10px;

  @media (min-width: ${DEVICES.tablet}) {
    aspect-ratio: 3/2;
  }
`;

const ProjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 30px;
  width: 100%;
  max-width: 350px;

  @media (min-width: ${DEVICES.mobile}) {
    grid-template-columns: auto auto;
    max-width: 550px;
  }

  @media (min-width: ${DEVICES.tablet}) {
    grid-template-columns: auto auto auto;
    max-width: 800px;
  }

  @media (min-width: ${DEVICES.desktop}) {
    grid-template-columns: auto auto auto;
    max-width: 1000px;
  }
`;

export default function Projects() {
  const { theme } = useTheme();

  return (
    <ProjectsCont>
      <Title titleColor={SITE_THEME[theme].text}>Check out my projects!</Title>
      <ProjectCardWrapper>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectCardWrapper>
    </ProjectsCont>
  );
}
