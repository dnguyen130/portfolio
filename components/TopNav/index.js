import styled from "styled-components";
import ReactSwitch from "react-switch";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";
import { motion } from "framer-motion";
import { FaLaptopCode, FaRegUser, FaHome, FaRegFolderOpen, FaPhone } from "react-icons/fa";

import DiamondIcon from "../DiamondIcon";

const TopNavCont = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  align-items: center;
  width: 600px;
  height: 120px;
  font-family: 'Maven Pro', sans-serif;
  z-index: 99999;
  position: absolute;
  top: 0;
  border: 1px solid red;
  margin: 20px;
`

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
  visible: {
    opacity: 1, 
    y: 0,
    transition: {
      ease: "easeOut", 
      duration: 0.5,
      delay: 2
    },
  },
  hidden: {
    opacity: 0,
    y: -20
  },
}

const switchStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  fontSize: 15
}

const motionStyle = {
  display: 'flex', 
  justifyContent: 'center', 
  width: '100%', 
  alignItems: 'center' 
}

const TopNav = ({

  onChange = () => {},
  checked = false,
}) => {

  const {theme} = useTheme();

  return (
    <TopNavCont>
      <motion.div 
        variants={container} 
        animate="visible" 
        initial="hidden" 
        style={motionStyle}>
      <DiamondIcon href="#home">
        <FaHome size={30} />
      </DiamondIcon>
      <DiamondIcon href="#about">
        <FaRegUser size={30} />
      </DiamondIcon>
      <DiamondIcon href="#toolkit">
        <FaLaptopCode size={30} />
      </DiamondIcon>
      <DiamondIcon href="#projects">
        <FaRegFolderOpen size={30} />
      </DiamondIcon>
      <ReactSwitch    
        borderRadius = {20}
        onChange = {onChange}
        checked = {checked}
        offColor = {site_theme[theme].text}
        offHandleColor = {site_theme[theme].background}
        onColor = {site_theme[theme].text}
        onHandleColor = {site_theme[theme].background}
        activeBoxShadow = {`0 0 2px 3px ${site_theme[theme].strong}`}
        uncheckedIcon = {false}
        checkedIcon = {false}
        uncheckedHandleIcon = {<div style={switchStyle}>🌙</div>}
        checkedHandleIcon = {<div style={switchStyle}>☀️</div>}
      />
      </motion.div>
    </TopNavCont>
  )
}

export default TopNav;