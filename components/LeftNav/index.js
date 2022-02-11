import styled from "styled-components";
import { MdHome } from "react-icons/md";

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
  display: flex;
  flex-direction: column;
`

const LeftNav = ({

}) => {
  return (
    <LeftNavCont>
      <Logo src="/Logo.svg" height="100px" width="100px" />
      <IconCont>
        <MdHome color="white" size="60px" style={{marginBottom: 40}}/>
        <MdHome color="white" size="60px" style={{marginBottom: 40}}/>
        <MdHome color="white" size="60px" style={{marginBottom: 40}}/>
        <MdHome color="white" size="60px" style={{marginBottom: 40}}/>
        <MdHome color="white" size="60px"/>
      </IconCont>
    </LeftNavCont>
  )
}

export default LeftNav;