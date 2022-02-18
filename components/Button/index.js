import styled from "styled-components";
import { site_theme } from "../../utils/variables";
import { useTheme } from "../../utils/provider";

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.bgcolor};
  color: ${props=>props.clr};
  height: ${props=>props.height};
  width: ${props=>props.width};
  border-radius: 10px;
  font-weight: 600;
  font-size: ${props=>props.fsize};
  cursor: pointer;
  user-select: none;
  font-family: 'Maven Pro', sans-serif;
  margin: 0 20px;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${props=>props.bghover};
  }
`

const ButtonLink = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = ({
  btnText = "Default",
  btnLink = "",
  bgcolor = "black",
  bghover = "white",
  clr = "gray",
  height = "80px",
  width = "180px",
  fsize = "2em"
}) => {

  const {theme} = useTheme();

  return (
    <ButtonCont bgcolor={bgcolor} bghover={bghover} clr={clr} height={height} width={width} fsize={fsize}>
      <ButtonLink target="_blank" href={btnLink}>
        {btnText}
      </ButtonLink>
    </ButtonCont>
  )
}

export default Button;