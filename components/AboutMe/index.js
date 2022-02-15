import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

const AboutMeCont = styled.div`
  width: 70%;
`

const AboutMeText = styled.p`
  color: ${props=>props.color};
  font-size: 22px;
`

const AboutMeImage = styled.img`

`

const AboutMe = ({}) => {

  const {theme} = useTheme();

  return (
    <AboutMeCont>
      <AboutMeText color={site_theme[theme].text}>
        Hey there! My name is Danny and I find designing and developing fun! <br/> <br/>
        My first experience with the web was back in 2003 when I created my first email account to play Neopets, a virtual pet website.
        Since then, my whole life, like many others, has revolved around using the web to communicate and learn from others. <br /> <br/>
        After experiencing a few different disciplines in the workforce, I fell in love with web and mobile development. I got to 
      </AboutMeText>
    </AboutMeCont>
  )
}

export default AboutMe;