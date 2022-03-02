import styled from "styled-components";
import { FaLaptopCode, FaRegUser, FaHome, FaRegFolderOpen, FaPhone } from "react-icons/fa";
import { site_theme } from "../../utils/variables";
import { useTheme } from "../../utils/provider";

import { motion } from "framer-motion";

const LeftNavCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  position: fixed;
  min-height: 500px;
  align-self: flex-start;
`

const LinkCont = styled.a`
  width:50px;
  height: 50px;
  margin-bottom: 90%;
  transform: rotate(45deg);

`

const LinkContLast = styled.a`
  width:50px;
  height: 50px;
  transform: rotate(45deg);
`

const IconCont = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  color: ${props=>props.clr};  
  vertical-align: middle;
  background: none;
  border: 0;
  position: relative;
  transition: 0.25s;
  
  &::before, &::after{
    content: "";
    position: absolute;
    border: 2px solid transparent;
    width: 0;
    height: 0;
    box-sizing: inherit;
    z-index: -99999;

  }

  &::before {
    top: 0;
    left: 0;

  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover {

    color: ${props=>props.hvrclr};

    &::before, &::after{
      width: 100%;
      height: 100%;
    }

    &::before {
      border-top-color: ${props=>props.borderColor};
      border-right-color: ${props=>props.borderColor};
      transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
    }

    &::after {
      border-bottom-color: ${props=>props.borderColor};
      border-left-color: ${props=>props.borderColor};
      transition: border-color 0s ease-out 0.2s, width 0.1s ease-out 0.2s, height 0.1s ease-out 0.3s;
    }
  }
`

const ReverseIconCont = styled.div`
  transform: rotate(-45deg);
`

const container = {
  // visible: {
  //   opacity: 1, 
  //   x: 0,
  //   transition: {
  //     ease: "easeOut", 
  //     duration: 1,
  //     delay: 2
  //   },
  // },
  // hidden: {
  //   opacity: 0,
  //   x: -50
  // },
}

const LeftNav = ({

}) => {

  const {theme} = useTheme();

  return (
    <LeftNavCont>
      <motion.div variants={container} animate="visible" initial="hidden" style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'100%'}}>
      <LinkCont href="#home" >
        <IconCont borderColor={site_theme[theme].strong} clr={site_theme[theme].text} hvrclr={site_theme[theme].strong}>
          <ReverseIconCont>
              <FaHome size="30px" />
          </ReverseIconCont>
        </IconCont>
      </LinkCont>
      <LinkCont href="#about">
        <IconCont borderColor={site_theme[theme].strong} clr={site_theme[theme].text} hvrclr={site_theme[theme].strong}>
          <ReverseIconCont>
              <FaRegUser size="30px" />
          </ReverseIconCont>
        </IconCont>
      </LinkCont>
      <LinkCont href="#toolkit">
        <IconCont borderColor={site_theme[theme].strong} clr={site_theme[theme].text} hvrclr={site_theme[theme].strong}>
          <ReverseIconCont>
              <FaLaptopCode size="30px" />
          </ReverseIconCont>
        </IconCont>
      </LinkCont>
      <LinkCont href="#projects">
        <IconCont borderColor={site_theme[theme].strong} clr={site_theme[theme].text} hvrclr={site_theme[theme].strong}>
          <ReverseIconCont>
              <FaRegFolderOpen size="30px" />
          </ReverseIconCont>
        </IconCont>
      </LinkCont>
      <LinkContLast href="#contact">
        <IconCont borderColor={site_theme[theme].strong} clr={site_theme[theme].text} hvrclr={site_theme[theme].strong}>
          <ReverseIconCont>
              <FaPhone size="30px"/>
          </ReverseIconCont>
        </IconCont>
      </LinkContLast>
      </motion.div>
    </LeftNavCont>
  )
}

export default LeftNav;