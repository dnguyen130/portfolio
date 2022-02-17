import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import Carousel from "../Carousel";
import Button from "../Button";

const ProjectsCont = styled.div`
  display: flex;
  padding: 0 10%;
`

const ProjectHeader = styled.h1`
  color: ${props=>props.headercolor};
  margin: 0;
  font-family: Genos, sans-serif;
  font-size: 64px;
`

const ProjectDescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props=>props.desccolor};
  font-size: 1.2em;
`

const StrongSpan = styled.span`
  color: ${props=>props.strongcolor};
  font-size: 1.5em;
  margin: 5px 0;
  text-align: center;
`

const ProjectList = styled.ul`
  color: ${props=>props.desccolor};
  font-size: 1em;
`

const ProjectListItem = styled.li`
  margin-bottom: 10px;
`

const ProjectTechCont = styled.div`
  display: flex;
  font-size: 1.5em;
  color: ${props=>props.techcolor};
  width: 100%;
  justify-content: space-around;
  margin: 10px 0;
`

const ProjectTech = styled.div`
  font-family: Genos, sans-serif;
`

const ButtonCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Projects = () => {

  const {theme} = useTheme();

  return(
    <ProjectsCont>
      <Carousel />
      <ProjectDescriptionCont>
      <ProjectHeader headercolor={site_theme[theme].onme}>OnMe</ProjectHeader>
      <ProjectDescription desccolor={site_theme[theme].text}>
      <ProjectTechCont techcolor={site_theme[theme].onme}>
          <ProjectTech>React Native</ProjectTech>
          <ProjectTech>Expo</ProjectTech>
          <ProjectTech>styled-components</ProjectTech>
          <ProjectTech>PHP/SQL</ProjectTech>
        </ProjectTechCont>
        <StrongSpan strongcolor={site_theme[theme].text}>"Create a connection with a little liquid courage."</StrongSpan>
        <ProjectList>
          <ProjectListItem>Go to a restaurant, pick a drink, and send it to any recipient within the restaurant to start a conversation!</ProjectListItem>
          <ProjectListItem>The restaurant will receive your order, deliver the selected drink to the recipient according to seat number and leave a message!</ProjectListItem>
          <ProjectListItem>This project was designed and developed from scratch by my exceptional team of developers and designers in 12 weeks, which we then presented to over 100 people, including students, faculty, and industry experts.</ProjectListItem>
        </ProjectList>
        <ButtonCont>
          <Button btnText="GitHub" btnLink="https://github.com/dnguyen130/onme" height="40px" width="140px" bgcolor={site_theme[theme].text} bghover={site_theme[theme].onme} clr={site_theme[theme].background} />
        </ButtonCont>
      </ProjectDescription>
      </ProjectDescriptionCont>
    </ProjectsCont>
  )
}

export default Projects;