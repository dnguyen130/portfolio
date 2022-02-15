import styled from "styled-components";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

const HeaderCont = styled.h2`
  margin: 0;
  font-family: Genos, sans-serif;
  font-size: 72pt;
  color: ${props=>props.color};
`

const Header = ({

  headertext = "Default"

}) => {

  const {theme} = useTheme();

  return (
    <HeaderCont color={site_theme[theme].text} >
      {headertext}
    </HeaderCont>
  )
}

export default Header;