import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

const FooterCont = styled.div`
  height: 40px;
  background-color: ${props=>props.bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterText = styled.p`
  margin: 0;
  color: ${props=>props.textcolor};

`

const Footer = () => {

  const {theme} = useTheme();

  return(
    <FooterCont bgcolor={site_theme[theme].gray}>
      <FooterText textcolor={site_theme[theme].text}>
        © 2022 Designed and Developed by Danny Nguyen
      </FooterText>
    </FooterCont>
  )
}

export default Footer;