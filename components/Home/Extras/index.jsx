import styled from "styled-components";

import {
  useTheme,
  useActiveCard,
  useActiveProject,
} from "../../../utils/provider";
import { SITE_THEME, DEVICES, EXTRASLIST } from "../../../utils/variables";

import ProjectCard from "../ProjectCard";

const ExtrasCont = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: 100%;
  max-width: 350px;

  @media (min-width: ${DEVICES.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
  }

  @media (min-width: ${DEVICES.tablet}) {
    max-width: 700px;
  }

  @media (min-width: ${DEVICES.laptop}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 660px;
  }
`;

export default function Extras() {
  const { theme } = useTheme();
  const { setActiveCard } = useActiveCard();
  const { setActiveProject } = useActiveProject();

  const CardOnClick = (e) => {
    setActiveCard(true);
    setActiveProject(e);
  };

  return (
    <ExtrasCont>
      <Title titleColor={SITE_THEME[theme].text}>
        Learn More or Get in Touch!
      </Title>
      <Underline gradient1={SITE_THEME[theme].strong} />
      <ProjectCardWrapper>
        {EXTRASLIST.map((o, i) => (
          <ProjectCard
            key={i}
            ProjectCardLogoSrc={o.logo}
            ProjectCardOnClick={() => CardOnClick(o)}
            ProjectCardDarkColor={o.color_dark}
          />
        ))}
      </ProjectCardWrapper>
    </ExtrasCont>
  );
}
