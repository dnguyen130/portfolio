import styled from "styled-components";
import { FaLaptopCode, FaRegUser, FaHome, FaRegFolderOpen, FaPhone } from "react-icons/fa";
import { site_theme } from "../../utils/variables";
import { useTheme } from "../../utils/provider";

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
  min-height: 800px;
  z-index: 99999;
`

const Logo = styled.img`
  position: fixed;
  top: 20px;
  z-index: 99999;
`

const IconCont = styled.div`
  transform: rotate(45deg);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40%;
  border-radius: 50px;
  cursor: pointer;
  box-sizing: border-box;
  
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

    &::before, &::after{
      width: 100%;
      height: 100%;
    }

    &::before {
      border-top-color: #60daaa;
      border-right-color: #60daaa;
      transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
    }

    &::after {
      border-bottom-color: #60daaa;
      border-left-color: #60daaa;
      transition: border-color 0s ease-out 0.2s, width 0.1s ease-out 0.2s, height 0.1s ease-out 0.3s;
    }
  }
`

const ReverseIconCont = styled.div`
  transform: rotate(-45deg);
`

const LeftNav = ({

}) => {

  const {theme} = useTheme();

  return (
    <LeftNavCont>
      <Logo src="/Logo.svg" height="120px" width="120px" />
      <IconCont>
        <ReverseIconCont>
          <FaHome color="white" size="30px"/>
        </ReverseIconCont>
      </IconCont>
      <IconCont>
        <ReverseIconCont>
          <FaRegUser color="white" size="30px" />
        </ReverseIconCont>
      </IconCont>
      <IconCont>
        <ReverseIconCont>
          <FaLaptopCode size="30px" className="changeColor" />
        </ReverseIconCont>
      </IconCont>
      <IconCont>
        <ReverseIconCont>
          <FaRegFolderOpen color="white" size="30px" />
        </ReverseIconCont>
      </IconCont>
      <IconCont>
        <ReverseIconCont>
          <FaPhone color="white" size="30px"/>
        </ReverseIconCont>
      </IconCont>
    </LeftNavCont>
  )
}

export default LeftNav;