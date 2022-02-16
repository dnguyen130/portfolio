import styled from "styled-components";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

const HeaderCont = styled.h2`
  margin: 0;
  font-family: Genos, sans-serif;
  font-size: 6rem;
  color: ${props=>props.color};
`

const Line = styled.div`
  background: linear-gradient(90deg, ${props=>props.linecolor}, 30%, rgba(0,0,0,0));
  height: 2px;
`

const Header = ({

  headertext = "Default"

}) => {

  const {theme} = useTheme();

  return (
    <HeaderCont color={site_theme[theme].text} >
      {headertext}
      <Line linecolor={site_theme[theme].strong}/>
    </HeaderCont>
  )
}

export default Header;