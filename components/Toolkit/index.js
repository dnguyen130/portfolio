import styled from "styled-components";
import { motion } from "framer-motion";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

import { CgFigma } from "react-icons/cg";
import { SiAdobeaftereffects, SiAdobeillustrator, SiAdobeindesign, SiAdobephotoshop } from "react-icons/si"; 

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
  height: 150px;
  background: linear-gradient(to right, #702c8c 40%, #e8248c 60%,  #e82424, #ffbc2c);
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-evenly;
`

const Tool = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #030F22;
`

const ToolGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ToolLabel = styled.div`
  margin: 5px 0 0 0 ;
  font-family: Genos, sans-serif;
  font-weight: 600;
  font-size: 1.7em;
  color: #EDF3FD;
`

const Toolkit = ({}) => {

  const {theme} = useTheme();

  return (
    <ToolkitCont>
      <Toolheader headcolor={site_theme[theme].text}>Design</Toolheader>
      <Toolbar>
        <ToolGroup>
          <Tool>
            <CgFigma size="50px" color={site_theme[theme].text}/>
          </Tool>
          <ToolLabel>Figma</ToolLabel>
        </ToolGroup>
        <ToolGroup>
          <Tool>
            <SiAdobeaftereffects size="50px" color={site_theme[theme].text}/>
          </Tool>
          <ToolLabel>After Effects</ToolLabel>
        </ToolGroup>
        <ToolGroup>
          <Tool>
            <SiAdobeillustrator size="50px" color={site_theme[theme].text}/>
          </Tool>
          <ToolLabel>Illustrator</ToolLabel>
        </ToolGroup>
        <ToolGroup>
          <Tool>
            <SiAdobeindesign size="50px" color={site_theme[theme].text}/>
          </Tool>
          <ToolLabel>Indesign</ToolLabel>
        </ToolGroup>
        <ToolGroup>
          <Tool>
            <SiAdobephotoshop size="50px" color={site_theme[theme].text}/>
          </Tool>
          <ToolLabel>Photoshop</ToolLabel>
        </ToolGroup>
      </Toolbar>
    </ToolkitCont>
  )
}

export default Toolkit;