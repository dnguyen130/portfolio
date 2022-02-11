import styled from "styled-components";
import { site_theme } from "../../utils/variables";
import { MdOutlineHome, MdPersonOutline, MdRotateLeft } from "react-icons/md";

const LeftNavCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 20;
  border: 1px solid red;
  min-height: 720px;
`

const Logo = styled.img`
  position: fixed;
  top: 20px;
  z-index: 99999;
`

const IconCont = styled.div`
  border: 3px solid white;
  transform: rotate(45deg);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`

const LeftNav = ({

}) => {
  return (
    <LeftNavCont>
      <Logo src="/Logo.svg" height="100px" width="100px" />
      <IconCont>
        <MdOutlineHome color="white" size="60px"/>
      </IconCont>
        <MdPersonOutline color="white" size="60px" style={{marginBottom: 40}}/>
        <MdOutlineHome color="white" size="60px" style={{marginBottom: 40}}/>
        <MdOutlineHome color="white" size="60px" style={{marginBottom: 40}}/>
        <MdOutlineHome color="white" size="60px"/>
    </LeftNavCont>
  )
}

export default LeftNav;