import styled from "styled-components";
import Image from "next/image";
import { MdHome } from "react-icons/md";

const LeftNavCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  border: 1px solid red;
  overflow: hidden;
`

const Logo = styled.img`
  position: fixed;
  top: 20px;
  z-index: 99999;
`

const IconCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  min-height: 300px;
  border: 2px solid yellow;
`

const LeftNav = ({

}) => {
  return (
    <LeftNavCont>
      <Logo src="/Logo.svg" height="100px" width="100px" />
      <IconCont>
        <MdHome color="white" size="60px"/>
        <MdHome color="white" size="60px"/>
        <MdHome color="white" size="60px"/>
        <MdHome color="white" size="60px"/>
        <MdHome color="white" size="60px"/>
      </IconCont>
    </LeftNavCont>
  )
}

export default LeftNav;