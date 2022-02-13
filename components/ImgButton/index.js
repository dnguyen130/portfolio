import styled from "styled-components";

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 9px;
  font-weight: 600;
  cursor: pointer;
  background-color: #EDF3FD;

  transition: background-color 0.2s;

&:hover {
  background-color: #38DBFF;
}
`

const ImgButton = ({
  children,
  onClick = () => {}
}) => {
  return (
    <ButtonCont onClick={onClick}>
      {children}
    </ButtonCont>
  )
}

export default ImgButton;