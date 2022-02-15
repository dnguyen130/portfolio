import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

const ToolkitCont = styled.div`
  display: flex;
  flex-direction: column;
`

const Toolheader = styled.h3`
  color: ${props=>props.headcolor};
  font-family: Genos, sans-serif;
  font-size: 24pt;
  margin: 10px 0;
`

const Toolbar = styled.div`
  height: 60px;
  background: white;
  width: 100%;
`

const Toolkit = ({}) => {

  const {theme} = useTheme();

  return (
    <ToolkitCont>
      <Toolheader headcolor={site_theme[theme].text}>Design</Toolheader>
      <Toolbar />
    </ToolkitCont>
  )
}

export default Toolkit;