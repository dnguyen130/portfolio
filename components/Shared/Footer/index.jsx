import styled from "styled-components";

import { useTheme } from "../../../utils/provider";
import { SITE_THEME, DEVICES, LINKS } from "../../../utils/variables";

const FooterCont = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.bgcolor};
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.h3`
  color: ${(props) => props.footerTextColor};
  margin: 0 0 5px;
  font-size: 1em;
  font-weight: 400;
  width: 90%;
  text-align: center;

  @media (min-width: ${DEVICES.mobile}) {
    font-size: 1.2em;
  }
`;

const FooterLink = styled.a`
  color: ${(props) => props.footerLinkColor};
  margin: 0;
  font-size: 0.8em;
  font-weight: 400;
  width: 90%;
  text-align: center;

  @media (min-width: ${DEVICES.mobile}) {
    font-size: 1em;
  }
`;

export default function Footer() {
  const { theme } = useTheme();

  return (
    <FooterCont bgcolor={SITE_THEME[theme].gray}>
      <FooterText footerTextColor={SITE_THEME[theme].text}>
        © 2022 Designed and Developed by Danny Nguyen
      </FooterText>
      <FooterLink
        footerLinkColor={SITE_THEME[theme].strong}
        href="https://www.flaticon.com/free-icons/email"
        title="email icons"
      >
        Email icons created by Freepik - Flaticon
      </FooterLink>
    </FooterCont>
  );
}
