import styled from "styled-components";

import { useTheme } from "../../utils/provider";
import { SITE_THEME, DEVICES } from "../../utils/variables";

const ProjectsCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.3rem;
  margin: 0;
  color: ${(props) => props.titleColor};
  align-self: flex-start;

  @media (min-width: ${DEVICES.mobileL}) {
    font-size: 1.8rem;
  }
`;

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    ${(props) => props.gradient1},
    transparent
  );
  border-radius: 1px;
  margin: 0 0 20px;
`;

const ProjectCard = styled.div`
  width: 100%;
  aspect-ratio: 3/2;
  background-color: white;
  border-radius: 10px;
`;

const ProjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 30px;
  width: 100%;
  max-width: 350px;

  @media (min-width: ${DEVICES.mobile}) {
    grid-template-columns: auto auto;
    max-width: 600px;
  }

  @media (min-width: ${DEVICES.tablet}) {
    grid-template-columns: auto auto;
    max-width: 700px;
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
      <Underline gradient1={SITE_THEME[theme].strong} />
      <ProjectCardWrapper>
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
