import styled from "styled-components";
import { useTheme } from "../../utils/provider";
import { site_theme } from "../../utils/variables";

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 9px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${props=>props.bgcolor};

  transition: background-color 0.2s;

&:hover {
  background-color: ${props=>props.bghover};
}
`

const ImgButton = ({
  children,
  onClick = () => {}
}) => {

  const {theme} = useTheme();

  return (
    <ButtonCont onClick={onClick} bgcolor={site_theme[theme].text} bghover={site_theme[theme].strong}>
      {children}
    </ButtonCont>
  )
}

export default ImgButton;