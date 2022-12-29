import styled from "styled-components";
import { motion } from "framer-motion";

import {
  useTheme,
  useActiveCard,
  useActiveProject,
} from "../../../utils/provider";
import { SITE_THEME, DEVICES, PROJECTLIST } from "../../../utils/variables";

import ProjectCard from "../ProjectCard";
import Underline from "@/components/Shared/Underline";

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
  color: ${(props) => props.titlecolor};
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

const ProjectCardWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  width: 100%;
  max-width: 350px;
  min-height: 660px;

  @media (min-width: ${DEVICES.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
    min-height: 410px;
  }

  @media (min-width: ${DEVICES.tablet}) {
    max-width: 700px;
    min-height: 430px;
  }

  @media (min-width: ${DEVICES.laptop}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1000px;
    min-height: 200px;
  }
`;

export default function Projects({ id }) {
  const { theme } = useTheme();
  const { setActiveCard } = useActiveCard();
  const { setActiveProject } = useActiveProject();

  const CardOnClick = (e) => {
    setActiveCard(true);
    setActiveProject(e);
  };

  return (
    <ProjectsCont>
      <Anchor id={id} />
      <Title titlecolor={SITE_THEME[theme].text}>Check out my projects!</Title>
      <Underline
        height="1px"
        gradientangle="90deg"
        gradient1={SITE_THEME[theme].strong}
        f
        borderradius="1px"
        marginbottom="30px"
      />

      <ProjectCardWrapper>
        {PROJECTLIST.map((o, i) => (
          <ProjectCard
            key={i}
            ProjectCardLogoSrc={o.logo}
            ProjectCardOnClick={() => CardOnClick(o)}
            ProjectCardDarkColor={o.color_dark}
          />
        ))}
      </ProjectCardWrapper>
    </ProjectsCont>
  );
}
