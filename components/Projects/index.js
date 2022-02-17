import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import PhoneCarousel from "../PhoneCarousel";
import Carousel from "../Carousel";
import Button from "../Button";

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectsCont = styled.div`
  display: flex;
  padding: 0 0 100px;
`

const ProjectsCont2 = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
`

const ProjectHeader = styled.h1`
  color: ${props=>props.headercolor};
  margin: 0;
  font-family: Genos, sans-serif;
  font-size: 3em;
`

const ProjectHeader2 = styled.h1`
  color: ${props=>props.headercolor};
  margin: 0;
  font-family: Genos, sans-serif;
  font-size: 3em;
  text-align: right;
`

const ProjectDescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props=>props.desccolor};
  font-size: 1.2em;
`

const StrongSpan = styled.span`
  color: ${props=>props.strongcolor};
  font-size: 1.2em;
  margin: 15px 0;
  text-align: center;
`

const ProjectList = styled.ul`
  color: ${props=>props.desccolor};
  font-size: 1em;
`

const ProjectListItem = styled.li`
  margin-bottom: 30px;
`

const ProjectTechCont = styled.div`
  display: flex;
  font-size: 1.2em;
  color: ${props=>props.techcolor};
  width: 100%;
  justify-content: space-around;
  margin: 15px 0;
`

const ProjectTech = styled.div`
  font-family: Genos, sans-serif;
`

const ButtonCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const ButtonCont2 = styled.div`
  width: 100%;
  display: flex;
`

const Projects = () => {

  const {theme} = useTheme();

  return(
    <ProjectsWrapper>
      <ProjectsCont>
        <PhoneCarousel />
        <ProjectDescriptionCont>
        <ProjectHeader headercolor={site_theme[theme].onme}>OnMe</ProjectHeader>
        <ProjectDescription desccolor={site_theme[theme].text}>
        <ProjectTechCont techcolor={site_theme[theme].onme}>
            <ProjectTech>React Native</ProjectTech>
            <ProjectTech>Expo</ProjectTech>
            <ProjectTech>styled-components</ProjectTech>
            <ProjectTech>PHP/SQL</ProjectTech>
          </ProjectTechCont>
          <StrongSpan strongcolor={site_theme[theme].text}><q>Create a connection with a little liquid courage.</q></StrongSpan>
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
      <ProjectsCont2>
        <Carousel />
        <ProjectDescriptionCont>
        <ProjectHeader2 headercolor={site_theme[theme].steady}>Steady</ProjectHeader2>
        <ProjectDescription desccolor={site_theme[theme].text}>
        <ProjectTechCont techcolor={site_theme[theme].steady}>
            <ProjectTech>React</ProjectTech>
            <ProjectTech>Next.js</ProjectTech>
            <ProjectTech>styled-components</ProjectTech>
          </ProjectTechCont>
          <StrongSpan strongcolor={site_theme[theme].text}><q>Get back on track to a happy life.</q></StrongSpan>
          <ProjectList>
            <ProjectListItem>At the end of the day, check in with Steady to self-assess your own mood and habits!</ProjectListItem>
            <ProjectListItem>Go through each category, answer the questions as truthfully as you can, and get some helpful advice at the end.</ProjectListItem>
            <ProjectListItem>This was one of the first major projects given to us to apply our new knowledge of web development to create a no-database application, using local storage to store answers and give matching advice at the end. </ProjectListItem>
          </ProjectList>
          <ButtonCont2>
            <Button btnText="GitHub" btnLink="https://github.com/wilyyy/Steady" height="40px" width="140px" bgcolor={site_theme[theme].text} bghover={site_theme[theme].steady} clr={site_theme[theme].background} />
          </ButtonCont2>
        </ProjectDescription>
        </ProjectDescriptionCont>
      </ProjectsCont2>
    </ProjectsWrapper>
  )
}

export default Projects;