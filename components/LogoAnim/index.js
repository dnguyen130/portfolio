import styled from "styled-components";

import Lottie from "lottie-react";
import Logo from "../../public/logoanim.json";

const LogoAnimCont = styled.div`
  width: 150px;
  height:150px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoAnim = () => {
  return (
    <LogoAnimCont>
    <Lottie 
    animationData={Logo}
    loop={false}
    />
    </LogoAnimCont>
  )
};

export default LogoAnim;