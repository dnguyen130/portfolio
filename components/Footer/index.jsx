import styled from "styled-components";

import { useTheme } from "../../utils/provider";
import { SITE_THEME, DEVICES, LINKS } from "../../utils/variables";

const FooterCont = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.bgcolor};
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.h3`
  color: ${(props) => props.footerTextColor};
  margin: 0;
  font-size: 1em;
  font-weight: 400;
`;

export default function Footer() {
  const { theme } = useTheme();

  return (
    <FooterCont bgcolor={SITE_THEME[theme].gray}>
      <FooterText footerTextColor={SITE_THEME[theme].text}>
        © 2022 Designed and Developed by Danny Nguyen
      </FooterText>
    </FooterCont>
  );
}
