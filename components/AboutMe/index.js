import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

const AboutMeCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AboutMeText = styled.p`
  color: ${props=>props.color};
  font-size: 22px;
  width: 70%;
`

const AboutMeImage = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 6px 3px 3px ${props=>props.shadowcolor};
  border: 3px solid ${props=>props.shadowcolor};
`

const Link = styled.a`
  color: ${props=>props.linkcolor};
  text-decoration: underline rgba(0,0,0,0);
  transition: text-decoration-color 200ms;

  &:hover {
    text-decoration: underline ${props=>props.undercolor};
  }
`

const AboutMe = ({}) => {

  const {theme} = useTheme();

  return (
    <AboutMeCont>
      <AboutMeText color={site_theme[theme].text}>
        Hey there! My name is Danny and I find designing and developing fun! <br/> <br/>
        My first experience with the web was back in 2003 when I created my first email account to play Neopets, a virtual pet website.
        Since then, my whole life, like many others, has revolved around using the web to communicate and learn from others. <br/> <br/>
        After experiencing a few different disciplines in the workforce, I fell in love with web and mobile development.
        I got to experience a fast-paced, cooperative school environment at the&nbsp;
        <Link href="https://www.bcit.ca/" linkcolor={site_theme[theme].strong} undercolor={site_theme[theme].strong}>British Columbia Instiute of Technology</Link>
        , where I would work in a team of designers and developers, creating web and mobile applications from scratch! <br/> <br/>
        Currently, I am looking for a practicum as a student intern to attain credits required for graduation. Afterwards, I will be looking for a full-time job
        as a developer, creating web and/or mobile applications that users would enjoy!
      </AboutMeText>
      <AboutMeImage src="/profile.png" shadowcolor={site_theme[theme].strong} />
    </AboutMeCont>
  )
}

export default AboutMe;