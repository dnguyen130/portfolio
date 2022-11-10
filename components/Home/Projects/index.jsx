import styled from "styled-components";

import {
  useTheme,
  useActiveCard,
  useActiveProject,
} from "../../../utils/provider";
import { SITE_THEME, DEVICES, PROJECTLIST } from "../../../utils/variables";

import ProjectCard from "../ProjectCard";

const ProjectsCont = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Anchor = styled.div`
  display: block;
  position: relative;
  top: -110px;
  visibility: hidden;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
  color: ${(props) => props.titleColor};
  align-self: flex-start;

  @media (min-width: ${DEVICES.mobile}) {
    font-size: 1.8rem;
  }

  @media (min-width: ${DEVICES.tablet}) {
    font-size: 2rem;
  }

  @media (min-width: ${DEVICES.desktop}) {
    font-size: 2.5rem;
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
  margin: 0 0 30px;
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

  @media (min-width: ${DEVICES.laptop}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1000px;
  }
`;

export default function Projects({ id }) {
  const { theme } = useTheme();
  const { setActiveCard } = useActiveCard();
  const { activeProject, setActiveProject } = useActiveProject();

  const CardOnClick = (e) => {
    setActiveCard(true);
    setActiveProject(e);
  };

  return (
    <ProjectsCont>
      <Anchor id={id} />
      <Title titleColor={SITE_THEME[theme].text}>Check out my projects!</Title>
      <Underline gradient1={SITE_THEME[theme].strong} />
      <ProjectCardWrapper>
        {PROJECTLIST.map((o, i) => (
          <ProjectCard
            key={i}
            ProjectCardLogoSrc={o.logo}
            ProjectCardTitle="hi"
            ProjectCardOnClick={() => CardOnClick(o)}
            ProjectCardDarkColor={o.color_dark}
          />
        ))}
      </ProjectCardWrapper>
    </ProjectsCont>
  );
}
