import styled from "styled-components";
import { site_theme } from "../../utils/variables";
import { useTheme } from "../../utils/provider";

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.bgcolor};
  color: ${props=>props.clr};
  height: 80px;
  width: 180px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 24pt;
  cursor: pointer;
  user-select: none;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${props=>props.bghover};
  }
`

const Button = ({
  btnText = "Default",
}) => {

  const {theme} = useTheme();

  return (
    <ButtonCont bgcolor={site_theme[theme].text} bghover={site_theme[theme].strong} clr={site_theme[theme].background}>
      {btnText}
    </ButtonCont>
  )
}

export default Button;