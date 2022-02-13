import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

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

  return (
    <HeroTextCont>
      <HeroTextHeading hcolor={site_theme[theme].text}>Ahoy, I am</HeroTextHeading>
      <HeroTextHeading hcolor={site_theme[theme].strong}>Danny Thai Nguyen</HeroTextHeading>
      <HeroTextBody bcolor={site_theme[theme].text}>
      I’m a web developer with a desire to create interactive 
      and accessible applications and experiences on the web.
      </HeroTextBody>
      <HeroTextBody bcolor={site_theme[theme].text}>
      Currently a digital design &#38; development student at BCIT, 
      learning modern web/mobile development, UI/UX and graphic design.
      </HeroTextBody>

    </HeroTextCont>
  )
}

export default HeroText;