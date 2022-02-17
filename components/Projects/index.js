import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import Carousel from "../Carousel";

const ProjectsCont = styled.div`
  display: flex;
`

const ProjectHeader = styled.h1`
  color: ${props=>props.headercolor};
  margin: 0;
`

const Projects = () => {

  const {theme} = useTheme();

  return(
    <ProjectsCont>
      <Carousel />
      <ProjectHeader headercolor={site_theme[theme].strong}>Steady</ProjectHeader>
    </ProjectsCont>
  )
}

export default Projects;