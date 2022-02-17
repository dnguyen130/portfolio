import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";

const ProjectsCont = styled.div`
  display: flex;
  width: 100%;
`

const Projects = () => {
  return(
    <ProjectsCont>
    </ProjectsCont>
  )
}

export default Projects;