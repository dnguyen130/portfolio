import styled from "styled-components";
import { site_theme } from "../../utils/variables";
import { FaLaptopCode, FaRegUser, FaHome, FaRegFolderOpen, FaPhone } from "react-icons/fa";
const LeftNavCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 20;
  border: 1px solid red;
  min-height: 800px;
`

const Logo = styled.img`
  position: fixed;
  top: 20px;
  z-index: 99999;
`

const IconCont = styled.div`
  border: 3px solid white;
  transform: rotate(45deg);
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  overflow: hidden;
`

const ReverseIconCont = styled.div`
  transform: rotate(-45deg);
`

const LeftNav = ({

}) => {
  return (
    <LeftNavCont>
      <Logo src="/Logo.svg" height="120px" width="120px" />
      <IconCont>
        <ReverseIconCont>
          <FaHome color="white" size="45px"/>
        </ReverseIconCont>
      </IconCont>
      <IconCont>
        <ReverseIconCont>
          <FaRegUser color="white" size="45px" />
        </ReverseIconCont>
      </IconCont>
      <IconCont>
        <ReverseIconCont>
          <FaLaptopCode color="white" size="45px" />
        </ReverseIconCont>
      </IconCont>
      <IconCont>
        <ReverseIconCont>
          <FaRegFolderOpen color="white" size="45px" />
        </ReverseIconCont>
      </IconCont>
      <IconCont>
        <ReverseIconCont>
          <FaPhone color="white" size="45px"/>
        </ReverseIconCont>
      </IconCont>
    </LeftNavCont>
  )
}

export default LeftNav;