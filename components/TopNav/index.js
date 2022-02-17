import styled from "styled-components";
import ReactSwitch from "react-switch";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import Button from "../Button";
import ImgButton from "../ImgButton";

import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";
import { motion } from "framer-motion";

const TopNavCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
  align-items: center;
  width: 500px;
  height: 120px;
  font-family: Genos, sans-serif;
  z-index: 99999;
  position: absolute;
  top: 0;
`

const container = {
  visible: {
    opacity: 1, 
    y: 0,
    transition: {
      ease: "easeOut", 
      duration: 1,
      delay: 2
    },
  },
  hidden: {
    opacity: 0,
    y: -50
  },
}

const TopNav = ({

  onChange = () => {},
  checked = false,
}) => {

  const {theme} = useTheme();

  return (
    <TopNavCont>
      <motion.div variants={container} animate="visible" initial="hidden" style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
      <ReactSwitch    
        borderRadius = {10}
        onChange = {onChange}
        checked = {checked}
        offColor = {site_theme[theme].text}
        offHandleColor = {site_theme[theme].background}
        onColor = {site_theme[theme].text}
        onHandleColor = {site_theme[theme].background}
        activeBoxShadow = {`0 0 2px 3px ${site_theme[theme].strong}`}
        uncheckedIcon = {false}
        checkedIcon = {false}
        uncheckedHandleIcon = {<div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 15
          }}
        >
          🌙
        </div>}

        checkedHandleIcon = {<div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            fontSize: 15
          }}
        >
          ☀️
        </div>}
      />
      <ImgButton>
        <FaLinkedin size="40px" color={site_theme[theme].background} />
      </ImgButton>
      <ImgButton imgLink="https://github.com/dnguyen130">
        {/* customize width, color of stroke stroke-width="10" stroke="white" */}
        <FaGithubSquare size="40px" color={site_theme[theme].background} />
      </ImgButton>
      <Button btnText="Resume" bgcolor={site_theme[theme].text} bghover={site_theme[theme].strong} clr={site_theme[theme].background} />
      </motion.div>
    </TopNavCont>
  )
}

export default TopNav;