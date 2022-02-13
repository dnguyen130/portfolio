import styled from "styled-components";
import ReactSwitch from "react-switch";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import Button from "../Button";
import ImgButton from "../ImgButton";

const TopNavCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
  width: 30%;
  height: 120px;
  font-family: Genos, sans-serif;
  border: 1px solid red;
`

const TopNav = ({

  onChange = () => {},
  checked = false

}) => {
  return (
    <TopNavCont>
      <ReactSwitch
        onChange = {onChange}
        checked = {checked}
        
      />
      <ImgButton>
        <FaLinkedin size="40px" color="#030F22" />
      </ImgButton>
      <ImgButton>
        {/* customize width, color of stroke stroke-width="10" stroke="white" */}
        <FaGithubSquare size="40px" color="#030F22" />
      </ImgButton>
      <Button btnText="Resume" />
    </TopNavCont>
  )
}

export default TopNav;