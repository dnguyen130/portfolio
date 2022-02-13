import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import { motion } from "framer-motion";

const HeroTextCont = styled.div`
  width: 1000px;
`

const HeroTextHeading = styled.h1`
  margin: 0;
  font-family: Genos, sans-serif;
  font-size: 72pt;
  color: ${props=>props.hcolor};
`

const HeroTextBody = styled.p`
  margin: 0;
  font-size: 18pt;
  color: ${props=>props.bcolor};
  margin-top: 20px;
`

const HeroText = ({
  
}) => {
  
  const {theme} = useTheme();

  const container = {
    visible: {
      opacity: 1, 
      transition: {
        ease: "easeOut", 
        duration: 1,
        staggerChildren: 0.5
      },
    },
    hidden: {
      opacity: 0, 
    },
  }

  const item = {
    hidden: {opacity: 0, x: 50, },
    visible: {opacity: 1, x: 0, transition: { ease: "easeOut", duration: 1}}
  }

  return (
    <HeroTextCont>
      <motion.div animate="visible" variants={container} initial="hidden">
        <motion.div variants={item}>
          <HeroTextHeading hcolor={site_theme[theme].text}>Ahoy, I am</HeroTextHeading>
        </motion.div>
        <motion.div variants={item}>
          <HeroTextHeading hcolor={site_theme[theme].strong}>Danny Thai Nguyen</HeroTextHeading>
        </motion.div>
        <motion.div variants={item}>
          <HeroTextBody bcolor={site_theme[theme].text}>
            I am a web developer with a desire to create interactive 
            and accessible applications and experiences on the web.
          </HeroTextBody>
        </motion.div>
        <motion.div variants={item}>
          <HeroTextBody bcolor={site_theme[theme].text}>
            Currently a digital design &#38; development student at BCIT, 
            learning modern web/mobile development, UI/UX and graphic design.
          </HeroTextBody>
        </motion.div>
      </motion.div>
    </HeroTextCont>
  )
}

export default HeroText;