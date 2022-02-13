import styled from "styled-components";

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #EDF3FD;
  height: 80px;
  width: 180px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 24pt;
  cursor: pointer;
  user-select: none;

  transition: background-color 0.2s;

  &:hover {
    background-color: #38DBFF;
  }
`

const Button = ({
  btnText = "Default"
}) => {
  return (
    <ButtonCont>
      {btnText}
    </ButtonCont>
  )
}

export default Button;